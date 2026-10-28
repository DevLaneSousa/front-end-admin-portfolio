<script setup lang="ts">
import { slugify } from '@/lib/labels';
import type { QTableColumn } from 'quasar';
import { computed, ref, watch } from 'vue';
import EnglishFields from '@/components/EnglishFields.vue';
import ListInput from '@/components/ListInput.vue';
import MediaUploader from '@/components/MediaUploader.vue';
import PageHeader from '@/components/PageHeader.vue';
import { findResource, type Field } from '@/config/resources';
import { formatDate, toInputDate } from '@/composables/format';
import { useNotify } from '@/composables/useNotify';
import { englishOf, withEnglish, type EnglishField, type EnglishValues } from '@/lib/translations';
import { contentApi, type Row } from '@/services/api';

const props = defineProps<{ resourceKey: string }>();
const notify = useNotify();
const resource = computed(() => findResource(props.resourceKey));
const rows = ref<Row[]>([]);
const loading = ref(true);
const dialog = ref(false);
const saving = ref(false);
const editingId = ref<string | null>(null);
const draft = ref<Record<string, unknown>>({});
const english = ref<EnglishValues>({});
const savedTranslations = ref<unknown>({});

const englishFields = computed<EnglishField[]>(() =>
  (resource.value?.fields ?? [])
    .filter((field) => field.translatable)
    .map((field) => ({
      key: field.key,
      label: field.label,
      type: field.type === 'list' ? 'list' : field.type === 'textarea' ? 'textarea' : 'text',
      span: field.span,
    })),
);

const columns = computed<QTableColumn<Row>[]>(() => {
  const config = resource.value;
  if (!config) return [];
  return [
    ...(config.sortable
      ? [{ name: 'order', label: '', field: 'order', align: 'left' as const, style: 'width: 88px' }]
      : []),
    ...config.columns.map((key) => {
      const field = config.fields.find((f) => f.key === key);
      return {
        name: key,
        label: field?.label ?? key,
        field: key,
        align: 'left' as const,
        format: (value: unknown) => display(field, value),
      };
    }),
    { name: 'actions', label: '', field: 'id', align: 'right' as const },
  ];
});

function display(field: Field | undefined, value: unknown): string {
  if (value === null || value === undefined || value === '') return '—';
  if (field?.type === 'date') return formatDate(String(value));
  if (field?.type === 'select')
    return field.options?.find((o) => o.value === value)?.label ?? String(value);
  const text = String(value);
  return text.length > 90 ? `${text.slice(0, 90)}…` : text;
}

async function load() {
  if (!resource.value) return;
  loading.value = true;
  try {
    rows.value = await contentApi.list(resource.value.key);
  } catch (error) {
    notify.error(error);
  } finally {
    loading.value = false;
  }
}

function openEditor(row?: Row) {
  const config = resource.value;
  if (!config) return;
  editingId.value = row?.id ?? null;
  draft.value = Object.fromEntries(
    config.fields.map((field) => {
      const value = row?.[field.key] ?? field.default ?? (field.type === 'toggle' ? false : null);
      return [field.key, field.type === 'date' ? toInputDate(value) : value];
    }),
  );
  savedTranslations.value = row?.translations ?? {};
  english.value = englishOf(row?.translations);
  dialog.value = true;
}

function payload(): Record<string, unknown> {
  const config = resource.value;
  if (!config) return {};
  const data: Record<string, unknown> = {};
  for (const field of config.fields) {
    let value = draft.value[field.key];
    if (field.type === 'number' && value !== null && value !== '') value = Number(value);
    if (field.type === 'date') value = value ? String(value) : null;
    if (
      (field.type === 'text' ||
        field.type === 'textarea' ||
        field.type === 'url' ||
        field.type === 'image') &&
      value === ''
    )
      value = null;
    data[field.key] = value;
  }
  if ('slug' in data && !data.slug) data.slug = slugify(String(data.name ?? data.title ?? ''));
  if (englishFields.value.length > 0) {
    data.translations = withEnglish(savedTranslations.value, english.value);
  }
  return data;
}

async function save() {
  const config = resource.value;
  if (!config) return;
  saving.value = true;
  try {
    const data = payload();
    if (editingId.value) {
      const updated = await contentApi.update(config.key, editingId.value, data);
      rows.value = rows.value.map((row) => (row.id === updated.id ? updated : row));
    } else {
      const created = await contentApi.create(config.key, {
        ...data,
        ...(config.sortable && { order: rows.value.length }),
      });
      rows.value = [...rows.value, created];
    }
    dialog.value = false;
    notify.success('Salvo');
  } catch (error) {
    notify.error(error);
  } finally {
    saving.value = false;
  }
}

async function remove(row: Row) {
  const config = resource.value;
  if (!config) return;
  if (!(await notify.confirm(`Excluir ${config.singular}`, 'Essa ação não pode ser desfeita.')))
    return;
  try {
    await contentApi.remove(config.key, row.id);
    rows.value = rows.value.filter((item) => item.id !== row.id);
  } catch (error) {
    notify.error(error);
  }
}

async function move(index: number, direction: -1 | 1) {
  const config = resource.value;
  const target = index + direction;
  if (!config || target < 0 || target >= rows.value.length) return;
  const next = [...rows.value];
  const [item] = next.splice(index, 1);
  if (!item) return;
  next.splice(target, 0, item);
  rows.value = next;
  try {
    await contentApi.reorder(
      config.key,
      next.map((row) => row.id),
    );
  } catch (error) {
    notify.error(error);
    await load();
  }
}

watch(() => props.resourceKey, load, { immediate: true });
</script>

<template>
  <q-page v-if="resource" class="lc-page">
    <PageHeader :title="resource.label" :subtitle="`${rows.length} itens`">
      <q-btn
        color="primary"
        unelevated
        no-caps
        icon="add"
        :label="`Novo ${resource.singular}`"
        @click="openEditor()"
      />
    </PageHeader>

    <q-table
      :rows="rows"
      :columns="columns"
      row-key="id"
      :loading="loading"
      flat
      dark
      class="lc-card"
      :pagination="{ rowsPerPage: 0 }"
      hide-pagination
    >
      <template #body-cell-order="cell">
        <q-td :props="cell">
          <q-btn dense flat round size="sm" icon="arrow_upward" @click="move(cell.rowIndex, -1)" />
          <q-btn dense flat round size="sm" icon="arrow_downward" @click="move(cell.rowIndex, 1)" />
        </q-td>
      </template>
      <template #body-cell-actions="cell">
        <q-td :props="cell">
          <q-icon
            v-if="cell.row.isPublished === false"
            name="visibility_off"
            color="grey-6"
            class="q-mr-sm"
          >
            <q-tooltip>Oculto no site</q-tooltip>
          </q-icon>
          <q-btn flat round dense icon="edit" @click="openEditor(cell.row)" />
          <q-btn flat round dense icon="delete" color="grey-6" @click="remove(cell.row)" />
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="dialog" persistent>
      <q-card dark class="lc-card" style="width: 720px; max-width: 94vw">
        <q-card-section class="row items-center">
          <div class="text-h6">
            {{ editingId ? `Editar ${resource.singular}` : `Novo ${resource.singular}` }}
          </div>
          <q-space />
          <q-btn flat round dense icon="close" v-close-popup />
        </q-card-section>
        <q-form @submit.prevent="save">
          <q-card-section class="lc-form-grid">
            <template v-for="field in resource.fields" :key="field.key">
              <q-input
                v-if="field.type === 'text' || field.type === 'url' || field.type === 'number'"
                v-model="draft[field.key] as string"
                :type="field.type === 'number' ? 'number' : field.type === 'url' ? 'url' : 'text'"
                :label="`${field.label}${field.required ? ' *' : ''}`"
                :hint="field.hint"
                :class="{ 'lc-span': field.span }"
                outlined
                dark
              />
              <q-input
                v-else-if="field.type === 'textarea'"
                v-model="draft[field.key] as string"
                type="textarea"
                autogrow
                :label="`${field.label}${field.required ? ' *' : ''}`"
                class="lc-span"
                outlined
                dark
              />
              <q-input
                v-else-if="field.type === 'date'"
                v-model="draft[field.key] as string"
                type="date"
                stack-label
                :label="`${field.label}${field.required ? ' *' : ''}`"
                outlined
                dark
              />
              <q-select
                v-else-if="field.type === 'select'"
                v-model="draft[field.key]"
                :options="field.options"
                emit-value
                map-options
                :label="`${field.label}${field.required ? ' *' : ''}`"
                outlined
                dark
              />
              <q-toggle
                v-else-if="field.type === 'toggle'"
                v-model="draft[field.key] as boolean"
                :label="field.label"
                color="primary"
              />
              <ListInput
                v-else-if="field.type === 'list'"
                v-model="draft[field.key] as string[]"
                :label="field.label"
                class="lc-span"
              />
              <div v-else-if="field.type === 'image'" :class="{ 'lc-span': field.span }">
                <MediaUploader
                  v-model="draft[field.key] as string | null"
                  :label="field.label"
                  :folder="resource.key"
                />
              </div>
            </template>
            <EnglishFields
              v-if="englishFields.length > 0"
              v-model="english"
              :fields="englishFields"
              :source="draft"
            />
          </q-card-section>
          <q-card-actions align="right" class="q-pa-md">
            <q-btn flat no-caps label="Cancelar" v-close-popup />
            <q-btn
              type="submit"
              unelevated
              no-caps
              color="primary"
              label="Salvar"
              :loading="saving"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>
