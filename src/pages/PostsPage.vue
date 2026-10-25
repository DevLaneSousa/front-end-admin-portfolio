<script setup lang="ts">
import { LABELS } from '@/lib/labels';
import type { QTableColumn } from 'quasar';
import { computed, onMounted, ref } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import StatusChip from '@/components/StatusChip.vue';
import { formatDateTime, siteUrl } from '@/composables/format';
import { useNotify } from '@/composables/useNotify';
import { postsApi, type PostRow } from '@/services/api';

const notify = useNotify();
const rows = ref<PostRow[]>([]);
const loading = ref(true);
const status = ref<'ALL' | PostRow['status']>('ALL');

const columns: QTableColumn<PostRow>[] = [
  { name: 'title', label: 'Post', field: 'title', align: 'left' },
  { name: 'category', label: 'Categoria', field: 'category', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left' },
  { name: 'publishedAt', label: 'Publicação', field: 'publishedAt', align: 'left' },
  { name: 'actions', label: '', field: 'id', align: 'right' },
];

const categoryLabel = (category: PostRow['category']) => LABELS.postCategory[category];

const visible = computed(() =>
  rows.value.filter((row) => status.value === 'ALL' || row.status === status.value),
);

async function load() {
  loading.value = true;
  try {
    rows.value = await postsApi.list();
  } catch (error) {
    notify.error(error);
  } finally {
    loading.value = false;
  }
}

async function remove(row: PostRow) {
  if (
    !(await notify.confirm(
      'Excluir post',
      `Excluir "${row.title}"? Essa ação não pode ser desfeita.`,
    ))
  )
    return;
  try {
    await postsApi.remove(row.id);
    rows.value = rows.value.filter((item) => item.id !== row.id);
    notify.success('Post excluído');
  } catch (error) {
    notify.error(error);
  }
}

onMounted(load);
</script>

<template>
  <q-page class="lc-page">
    <PageHeader title="Blog" subtitle="Relatos de palestras, cursos, mentorias e eventos">
      <q-btn color="primary" unelevated no-caps icon="add" label="Novo post" to="/blog/novo" />
    </PageHeader>

    <q-btn-toggle
      v-model="status"
      no-caps
      unelevated
      toggle-color="primary"
      color="grey-10"
      class="q-mb-md"
      :options="[
        { label: 'Todos', value: 'ALL' },
        { label: 'Publicados', value: 'PUBLISHED' },
        { label: 'Agendados', value: 'SCHEDULED' },
        { label: 'Rascunhos', value: 'DRAFT' },
      ]"
    />

    <q-table
      :rows="visible"
      :columns="columns"
      row-key="id"
      :loading="loading"
      flat
      dark
      class="lc-card"
      :pagination="{ rowsPerPage: 20 }"
      no-data-label="Nenhum post ainda. Que tal contar sobre a última palestra?"
    >
      <template #body-cell-title="props">
        <q-td :props="props">
          <router-link
            :to="`/blog/${props.row.id}`"
            class="text-white text-weight-medium"
            style="text-decoration: none"
          >
            {{ props.row.title }}
          </router-link>
          <div class="text-caption lc-muted">
            {{ props.row.readingMinutes }} min · /blog/{{ props.row.slug }}
          </div>
        </q-td>
      </template>
      <template #body-cell-category="props">
        <q-td :props="props">{{ categoryLabel(props.row.category) }}</q-td>
      </template>
      <template #body-cell-status="props">
        <q-td :props="props"><StatusChip :status="props.row.status" /></q-td>
      </template>
      <template #body-cell-publishedAt="props">
        <q-td :props="props" class="lc-muted">{{ formatDateTime(props.row.publishedAt) }}</q-td>
      </template>
      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat round dense icon="edit" :to="`/blog/${props.row.id}`"
            ><q-tooltip>Editar</q-tooltip></q-btn
          >
          <q-btn
            v-if="props.row.status === 'PUBLISHED'"
            flat
            round
            dense
            icon="open_in_new"
            :href="`${siteUrl}/blog/${props.row.slug}`"
            target="_blank"
          >
            <q-tooltip>Ver no site</q-tooltip>
          </q-btn>
          <q-btn flat round dense icon="delete" color="grey-6" @click="remove(props.row)"
            ><q-tooltip>Excluir</q-tooltip></q-btn
          >
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>
