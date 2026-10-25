<script setup lang="ts">
import type { QTableColumn } from 'quasar';
import { computed, onMounted, ref } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import StatusChip from '@/components/StatusChip.vue';
import { siteUrl } from '@/composables/format';
import { useNotify } from '@/composables/useNotify';
import { projectsApi, type ProjectRow } from '@/services/api';

const notify = useNotify();
const rows = ref<ProjectRow[]>([]);
const loading = ref(true);
const filter = ref('');
const kind = ref<'ALL' | 'DEV' | 'DESIGN'>('ALL');

const columns: QTableColumn<ProjectRow>[] = [
  { name: 'order', label: '#', field: 'order', align: 'left', style: 'width: 96px' },
  { name: 'title', label: 'Projeto', field: 'title', align: 'left' },
  { name: 'kind', label: 'Tipo', field: 'kind', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left' },
  { name: 'featured', label: 'Destaque', field: 'isFeatured', align: 'center' },
  { name: 'actions', label: '', field: 'id', align: 'right' },
];

const visible = computed(() =>
  rows.value.filter(
    (row) =>
      (kind.value === 'ALL' || row.kind === kind.value) &&
      row.title.toLowerCase().includes(filter.value.toLowerCase()),
  ),
);

const thumb = (url: string | null) =>
  url ? (url.startsWith('/') ? `${siteUrl}${url}` : url) : undefined;

async function load() {
  loading.value = true;
  try {
    rows.value = await projectsApi.list();
  } catch (error) {
    notify.error(error);
  } finally {
    loading.value = false;
  }
}

async function move(index: number, direction: -1 | 1) {
  const target = index + direction;
  if (target < 0 || target >= rows.value.length) return;
  const next = [...rows.value];
  const [item] = next.splice(index, 1);
  if (!item) return;
  next.splice(target, 0, item);
  rows.value = next;
  try {
    await projectsApi.reorder(next.map((row) => row.id));
  } catch (error) {
    notify.error(error);
    await load();
  }
}

async function toggleFeatured(row: ProjectRow) {
  try {
    await projectsApi.featured(row.id, !row.isFeatured);
    row.isFeatured = !row.isFeatured;
  } catch (error) {
    notify.error(error);
  }
}

async function setStatus(row: ProjectRow, status: ProjectRow['status']) {
  try {
    await projectsApi.status(row.id, status);
    row.status = status;
    notify.success(status === 'PUBLISHED' ? 'Projeto publicado' : 'Status atualizado');
  } catch (error) {
    notify.error(error);
  }
}

async function remove(row: ProjectRow) {
  if (
    !(await notify.confirm(
      'Excluir projeto',
      `Excluir "${row.title}" e todas as mídias vinculadas?`,
    ))
  )
    return;
  try {
    await projectsApi.remove(row.id);
    rows.value = rows.value.filter((item) => item.id !== row.id);
    notify.success('Projeto excluído');
  } catch (error) {
    notify.error(error);
  }
}

onMounted(load);
</script>

<template>
  <q-page class="lc-page">
    <PageHeader
      title="Projetos"
      :subtitle="`${rows.length} projetos · a ordem aqui é a ordem do site`"
    >
      <q-btn
        color="primary"
        unelevated
        no-caps
        icon="add"
        label="Novo projeto"
        to="/projetos/novo"
      />
    </PageHeader>

    <div class="row q-gutter-md q-mb-md items-center">
      <q-input
        v-model="filter"
        dense
        outlined
        dark
        placeholder="Buscar"
        class="col-grow"
        style="max-width: 320px"
      >
        <template #prepend><q-icon name="search" /></template>
      </q-input>
      <q-btn-toggle
        v-model="kind"
        no-caps
        unelevated
        toggle-color="primary"
        color="grey-10"
        :options="[
          { label: 'Todos', value: 'ALL' },
          { label: 'Dev', value: 'DEV' },
          { label: 'Design', value: 'DESIGN' },
        ]"
      />
    </div>

    <q-table
      :rows="visible"
      :columns="columns"
      row-key="id"
      :loading="loading"
      flat
      dark
      class="lc-card"
      :pagination="{ rowsPerPage: 0 }"
      hide-pagination
    >
      <template #body-cell-order="props">
        <q-td :props="props">
          <div class="row items-center no-wrap q-gutter-xs" v-if="kind === 'ALL' && !filter">
            <q-btn
              dense
              flat
              round
              size="sm"
              icon="arrow_upward"
              @click="move(props.rowIndex, -1)"
            />
            <q-btn
              dense
              flat
              round
              size="sm"
              icon="arrow_downward"
              @click="move(props.rowIndex, 1)"
            />
          </div>
          <span v-else class="lc-muted">{{ props.row.order + 1 }}</span>
        </q-td>
      </template>
      <template #body-cell-title="props">
        <q-td :props="props">
          <div class="row items-center no-wrap q-gutter-md">
            <q-avatar rounded size="44px" class="bg-grey-10">
              <img v-if="props.row.coverUrl" :src="thumb(props.row.coverUrl)" alt="" />
              <q-icon v-else name="image" color="grey-7" />
            </q-avatar>
            <div>
              <router-link
                :to="`/projetos/${props.row.id}`"
                class="text-white text-weight-medium"
                style="text-decoration: none"
              >
                {{ props.row.title }}
              </router-link>
              <div class="text-caption lc-muted">
                {{ props.row.category?.name ?? 'Sem categoria' }} ·
                {{ props.row._count.media }} mídias
              </div>
            </div>
          </div>
        </q-td>
      </template>
      <template #body-cell-kind="props">
        <q-td :props="props">{{ props.row.kind === 'DEV' ? 'Desenvolvimento' : 'Design' }}</q-td>
      </template>
      <template #body-cell-status="props">
        <q-td :props="props"><StatusChip :status="props.row.status" /></q-td>
      </template>
      <template #body-cell-featured="props">
        <q-td :props="props">
          <q-btn
            flat
            round
            dense
            :icon="props.row.isFeatured ? 'star' : 'star_outline'"
            :color="props.row.isFeatured ? 'warning' : 'grey-6'"
            @click="toggleFeatured(props.row)"
          />
        </q-td>
      </template>
      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat round dense icon="edit" :to="`/projetos/${props.row.id}`"
            ><q-tooltip>Editar</q-tooltip></q-btn
          >
          <q-btn
            flat
            round
            dense
            icon="open_in_new"
            :href="`${siteUrl}/projetos/${props.row.slug}`"
            target="_blank"
          >
            <q-tooltip>Ver no site</q-tooltip>
          </q-btn>
          <q-btn flat round dense icon="more_vert">
            <q-menu dark>
              <q-list dense style="min-width: 180px">
                <q-item
                  v-if="props.row.status !== 'PUBLISHED'"
                  clickable
                  v-close-popup
                  @click="setStatus(props.row, 'PUBLISHED')"
                >
                  <q-item-section>Publicar</q-item-section>
                </q-item>
                <q-item
                  v-if="props.row.status === 'PUBLISHED'"
                  clickable
                  v-close-popup
                  @click="setStatus(props.row, 'DRAFT')"
                >
                  <q-item-section>Voltar para rascunho</q-item-section>
                </q-item>
                <q-item
                  v-if="props.row.status !== 'ARCHIVED'"
                  clickable
                  v-close-popup
                  @click="setStatus(props.row, 'ARCHIVED')"
                >
                  <q-item-section>Arquivar</q-item-section>
                </q-item>
                <q-separator dark />
                <q-item clickable v-close-popup class="text-negative" @click="remove(props.row)">
                  <q-item-section>Excluir</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>
