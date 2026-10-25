<script setup lang="ts">
import { computed, ref } from 'vue';
import { useNotify } from '@/composables/useNotify';
import { siteUrl } from '@/composables/format';
import { mediaApi, type UploadedMedia } from '@/services/api';

const props = withDefaults(
  defineProps<{ label?: string; folder?: string; accept?: string; ratio?: number }>(),
  {
    label: 'Imagem',
    folder: 'geral',
    accept: 'image/*',
    ratio: 16 / 10,
  },
);

const model = defineModel<string | null | undefined>();
const emit = defineEmits<{ uploaded: [media: UploadedMedia] }>();
const notify = useNotify();
const input = ref<HTMLInputElement | null>(null);
const uploading = ref(false);

const preview = computed(() => {
  const value = model.value;
  if (!value) return null;
  return value.startsWith('/') ? `${siteUrl}${value}` : value;
});

async function onFile(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;
  uploading.value = true;
  try {
    const media = await mediaApi.upload(file, props.folder);
    model.value = media.url;
    emit('uploaded', media);
  } catch (error) {
    notify.error(error);
  } finally {
    uploading.value = false;
    if (input.value) input.value.value = '';
  }
}
</script>

<template>
  <div class="column q-gutter-sm">
    <span class="text-caption lc-muted">{{ label }}</span>
    <q-img
      v-if="preview"
      :src="preview"
      :ratio="ratio"
      class="rounded-borders bg-grey-10"
      fit="cover"
    />
    <div
      v-else
      class="rounded-borders bg-grey-10 flex flex-center lc-muted"
      :style="{ aspectRatio: String(ratio), minHeight: '96px' }"
    >
      <q-icon name="image" size="32px" />
    </div>
    <div class="row q-gutter-sm">
      <q-btn
        dense
        unelevated
        no-caps
        color="primary"
        icon="upload"
        :label="model ? 'Trocar' : 'Enviar'"
        :loading="uploading"
        @click="input?.click()"
      />
      <q-btn
        v-if="model"
        dense
        flat
        no-caps
        color="grey-5"
        icon="close"
        label="Remover"
        @click="model = null"
      />
    </div>
    <q-input
      v-model="model"
      dense
      outlined
      dark
      placeholder="ou cole uma URL / caminho (/projects/arquivo.webp)"
    />
    <input ref="input" type="file" :accept="accept" hidden @change="onFile" />
  </div>
</template>
