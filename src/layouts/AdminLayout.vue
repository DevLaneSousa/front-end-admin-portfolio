<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { resources } from '@/config/resources';
import { siteUrl } from '@/composables/format';
import { messagesApi } from '@/services/api';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const router = useRouter();
const drawer = ref(true);
const unread = ref(0);

const main = [
  { to: '/', icon: 'space_dashboard', label: 'Visão geral' },
  { to: '/projetos', icon: 'folder_code', label: 'Projetos' },
  { to: '/blog', icon: 'edit_note', label: 'Blog' },
  { to: '/perfil', icon: 'badge', label: 'Perfil e crachá' },
];

const groups = (['Landing', 'Blog'] as const).map((group) => ({
  group,
  items: resources.filter((resource) => resource.group === group),
}));

onMounted(async () => {
  unread.value = await messagesApi.unread().catch(() => 0);
});

async function logout() {
  await auth.logout();
  await router.push({ name: 'login' });
}
</script>

<template>
  <q-layout view="lHh LpR lFf" class="bg-black">
    <q-header bordered class="bg-dark">
      <q-toolbar>
        <q-btn flat round dense icon="menu" aria-label="Menu" @click="drawer = !drawer" />
        <q-toolbar-title class="lc-mono text-subtitle1">
          lane<span class="text-primary">codes</span><span class="lc-muted"> / painel</span>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          no-caps
          icon="open_in_new"
          label="Ver site"
          :href="siteUrl"
          target="_blank"
          class="q-mr-sm"
        />
        <q-btn flat round dense icon="mail" to="/mensagens" aria-label="Mensagens">
          <q-badge v-if="unread > 0" color="primary" floating>{{ unread }}</q-badge>
        </q-btn>
        <q-btn flat round dense icon="logout" aria-label="Sair" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above bordered :width="248" class="bg-dark">
      <q-list padding>
        <q-item
          v-for="item in main"
          :key="item.to"
          :to="item.to"
          exact
          clickable
          v-ripple
          active-class="text-primary"
        >
          <q-item-section avatar><q-icon :name="item.icon" /></q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
        <q-item to="/mensagens" clickable v-ripple active-class="text-primary">
          <q-item-section avatar><q-icon name="inbox" /></q-item-section>
          <q-item-section>Mensagens</q-item-section>
          <q-item-section v-if="unread > 0" side
            ><q-badge color="primary">{{ unread }}</q-badge></q-item-section
          >
        </q-item>

        <template v-for="section in groups" :key="section.group">
          <q-item-label header class="text-uppercase text-caption lc-mono q-mt-md">{{
            section.group
          }}</q-item-label>
          <q-item
            v-for="resource in section.items"
            :key="resource.key"
            :to="`/conteudo/${resource.key}`"
            clickable
            v-ripple
            dense
            active-class="text-primary"
          >
            <q-item-section avatar><q-icon :name="resource.icon" size="20px" /></q-item-section>
            <q-item-section>{{ resource.label }}</q-item-section>
          </q-item>
        </template>
      </q-list>
      <div class="absolute-bottom q-pa-md text-caption lc-muted ellipsis">
        {{ auth.user?.email }}
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
