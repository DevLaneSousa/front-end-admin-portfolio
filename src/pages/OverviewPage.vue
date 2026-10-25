<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import { useNotify } from '@/composables/useNotify';
import { overviewApi, type Overview } from '@/services/api';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const notify = useNotify();
const data = ref<Overview | null>(null);

onMounted(async () => {
  try {
    data.value = await overviewApi.get();
  } catch (error) {
    notify.error(error);
  }
});

const cards = [
  { key: 'projects', label: 'Projetos publicados', icon: 'folder_code', to: '/projetos' },
  { key: 'drafts', label: 'Projetos em rascunho', icon: 'draft', to: '/projetos' },
  { key: 'posts', label: 'Posts publicados', icon: 'article', to: '/blog' },
  { key: 'scheduled', label: 'Posts agendados', icon: 'schedule_send', to: '/blog' },
  { key: 'newMessages', label: 'Mensagens novas', icon: 'mark_email_unread', to: '/mensagens' },
  { key: 'talksAhead', label: 'Eventos na agenda', icon: 'co_present', to: '/conteudo/talks' },
] as const;
</script>

<template>
  <q-page class="lc-page">
    <PageHeader
      :title="`Olá, ${auth.user?.name.split(' ')[0] ?? 'Lane'}`"
      subtitle="Resumo do portfólio agora"
    >
      <q-btn
        color="primary"
        unelevated
        no-caps
        icon="add"
        label="Novo projeto"
        to="/projetos/novo"
      />
      <q-btn outline color="grey-5" no-caps icon="edit" label="Novo post" to="/blog/novo" />
    </PageHeader>
    <div class="lc-grid">
      <router-link
        v-for="card in cards"
        :key="card.key"
        :to="card.to"
        class="lc-card q-pa-lg text-white"
        style="text-decoration: none"
      >
        <q-icon :name="card.icon" size="24px" color="primary" />
        <div class="text-h4 text-weight-bold q-mt-md">
          <q-skeleton v-if="!data" type="text" width="48px" />
          <template v-else>{{ data[card.key] }}</template>
        </div>
        <div class="lc-muted">{{ card.label }}</div>
      </router-link>
    </div>
  </q-page>
</template>
