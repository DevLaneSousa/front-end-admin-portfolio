<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import StatusChip from '@/components/StatusChip.vue';
import { formatDateTime } from '@/composables/format';
import { useNotify } from '@/composables/useNotify';
import { messagesApi, type Message } from '@/services/api';

const notify = useNotify();

function whatsappLink(phone: string) {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits.length <= 11 ? `55${digits}` : digits}`;
}
const messages = ref<Message[]>([]);
const loading = ref(true);
const view = ref<'INBOX' | 'ARCHIVED'>('INBOX');
const selectedId = ref<string | null>(null);
const selected = computed(() => messages.value.find((m) => m.id === selectedId.value) ?? null);

async function load() {
  loading.value = true;
  try {
    messages.value = await messagesApi.list(view.value === 'ARCHIVED' ? 'ARCHIVED' : undefined);
    selectedId.value = messages.value[0]?.id ?? null;
  } catch (error) {
    notify.error(error);
  } finally {
    loading.value = false;
  }
}

async function setStatus(message: Message, status: Message['status']) {
  try {
    await messagesApi.status(message.id, status);
    message.status = status;
    if (status === 'ARCHIVED' && view.value === 'INBOX') {
      messages.value = messages.value.filter((m) => m.id !== message.id);
      selectedId.value = messages.value[0]?.id ?? null;
    }
  } catch (error) {
    notify.error(error);
  }
}

async function open(message: Message) {
  selectedId.value = message.id;
  if (message.status === 'NEW') await setStatus(message, 'READ');
}

async function remove(message: Message) {
  if (!(await notify.confirm('Excluir mensagem', `Excluir a mensagem de ${message.name}?`))) return;
  try {
    await messagesApi.remove(message.id);
    messages.value = messages.value.filter((m) => m.id !== message.id);
    selectedId.value = messages.value[0]?.id ?? null;
  } catch (error) {
    notify.error(error);
  }
}

watch(view, load);
onMounted(load);
</script>

<template>
  <q-page class="lc-page">
    <PageHeader title="Mensagens" subtitle="Contatos enviados pelo formulário do site">
      <q-btn-toggle
        v-model="view"
        no-caps
        unelevated
        toggle-color="primary"
        color="grey-10"
        :options="[
          { label: 'Caixa de entrada', value: 'INBOX' },
          { label: 'Arquivadas', value: 'ARCHIVED' },
        ]"
      />
    </PageHeader>

    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-5">
        <q-list class="lc-card" separator dark>
          <q-item v-if="!loading && messages.length === 0">
            <q-item-section class="lc-muted">Nenhuma mensagem por aqui.</q-item-section>
          </q-item>
          <q-item
            v-for="message in messages"
            :key="message.id"
            clickable
            :active="message.id === selectedId"
            active-class="bg-grey-10"
            @click="open(message)"
          >
            <q-item-section>
              <q-item-label :class="{ 'text-weight-bold': message.status === 'NEW' }">{{
                message.name
              }}</q-item-label>
              <q-item-label caption lines="1">{{ message.subject }}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label caption>{{ formatDateTime(message.createdAt) }}</q-item-label>
              <q-badge v-if="message.status === 'NEW'" color="primary" label="nova" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-12 col-md-7">
        <div v-if="selected" class="lc-card q-pa-lg column q-gutter-md">
          <div class="row items-start justify-between">
            <div>
              <div class="text-h6">{{ selected.subject }}</div>
              <div class="lc-muted">
                {{ selected.name }} ·
                <a :href="`mailto:${selected.email}`" class="text-primary">{{ selected.email }}</a>
                <template v-if="selected.phone">
                  ·
                  <a
                    :href="whatsappLink(selected.phone)"
                    target="_blank"
                    rel="noopener"
                    class="text-primary"
                    >{{ selected.phone }}</a
                  >
                </template>
                <template v-if="selected.company"> · {{ selected.company }}</template>
              </div>
            </div>
            <StatusChip :status="selected.status" />
          </div>
          <q-chip v-if="selected.budgetRange" dense outline color="grey-5" icon="payments">{{
            selected.budgetRange
          }}</q-chip>
          <p style="white-space: pre-line">{{ selected.message }}</p>
          <div class="row q-gutter-sm">
            <q-btn
              unelevated
              no-caps
              color="primary"
              icon="reply"
              label="Responder"
              :href="`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`"
            />
            <q-btn
              v-if="selected.status !== 'ARCHIVED'"
              outline
              no-caps
              color="grey-5"
              icon="archive"
              label="Arquivar"
              @click="setStatus(selected, 'ARCHIVED')"
            />
            <q-btn
              v-else
              outline
              no-caps
              color="grey-5"
              icon="unarchive"
              label="Desarquivar"
              @click="setStatus(selected, 'READ')"
            />
            <q-btn
              flat
              no-caps
              color="negative"
              icon="delete"
              label="Excluir"
              @click="remove(selected)"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
