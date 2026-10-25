<script setup lang="ts">
import type { PostInput } from '@/api';
import { LABELS, POST_CATEGORIES, slugify } from '@/lib/labels';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ListInput from '@/components/ListInput.vue';
import MediaUploader from '@/components/MediaUploader.vue';
import PageHeader from '@/components/PageHeader.vue';
import RichEditor from '@/components/RichEditor.vue';
import StatusChip from '@/components/StatusChip.vue';
import { siteUrl, toInputDate } from '@/composables/format';
import { useNotify } from '@/composables/useNotify';
import { contentApi, postsApi, type Row, type UploadedMedia } from '@/services/api';

const props = defineProps<{ id?: string }>();
const router = useRouter();
const notify = useNotify();

const empty = (): PostInput => ({
  slug: '',
  title: '',
  excerpt: '',
  coverUrl: null,
  contentJson: null,
  contentHtml: '',
  category: 'TALK',
  status: 'DRAFT',
  publishedAt: null,
  eventName: null,
  eventDate: null,
  eventLocation: null,
  slidesUrl: null,
  talkId: null,
  seoTitle: null,
  seoDescription: null,
  ogImageUrl: null,
  tags: [],
  media: [],
});

const form = reactive<PostInput>(empty());
const loading = ref(Boolean(props.id));
const saving = ref(false);
const slugTouched = ref(Boolean(props.id));
const talks = ref<Row[]>([]);
const scheduleAt = ref('');
const eventDate = computed({
  get: () => toInputDate(form.eventDate ? String(form.eventDate) : ''),
  set: (value: string) => {
    form.eventDate = value || null;
  },
});

const categoryOptions = POST_CATEGORIES.map((value) => ({
  value,
  label: LABELS.postCategory[value],
}));
const talkOptions = computed(() =>
  talks.value.map((t) => ({ value: t.id, label: `${String(t.title)} · ${String(t.event)}` })),
);

watch(
  () => form.title,
  (title) => {
    if (!slugTouched.value) form.slug = slugify(title);
  },
);

watch(
  () => form.talkId,
  (id) => {
    const talk = talks.value.find((t) => t.id === id);
    if (!talk) return;
    form.eventName ??= String(talk.event);
    form.eventLocation ??= (talk.location as string | null) ?? null;
    if (!form.eventDate && talk.date) form.eventDate = String(talk.date).slice(0, 10);
  },
);

onMounted(async () => {
  try {
    talks.value = await contentApi.list('talks');
    if (props.id) {
      const post = await postsApi.get(props.id);
      Object.assign(form, empty(), post, {
        media: post.media.map(({ url, width, height, alt, caption, order }) => ({
          url,
          width,
          height,
          alt,
          caption,
          order,
        })),
      });
      if (post.status === 'SCHEDULED' && post.publishedAt) {
        scheduleAt.value = new Date(post.publishedAt).toISOString().slice(0, 16);
      }
    }
  } catch (error) {
    notify.error(error);
  } finally {
    loading.value = false;
  }
});

function onContent(value: { json: unknown; html: string }) {
  form.contentJson = value.json;
  form.contentHtml = value.html;
}

function addPhoto(media: UploadedMedia) {
  form.media.push({
    url: media.url,
    width: media.width,
    height: media.height,
    alt: form.title,
    caption: null,
    order: form.media.length,
  });
}

async function save(mode: 'draft' | 'publish' | 'schedule') {
  if (mode === 'schedule' && !scheduleAt.value) {
    notify.error(new Error('Escolha a data e hora do agendamento'));
    return;
  }
  form.status = mode === 'draft' ? 'DRAFT' : mode === 'schedule' ? 'SCHEDULED' : 'PUBLISHED';
  form.publishedAt =
    mode === 'schedule'
      ? new Date(scheduleAt.value).toISOString()
      : mode === 'publish'
        ? (form.publishedAt ?? new Date().toISOString())
        : form.publishedAt;
  saving.value = true;
  try {
    const payload: PostInput = { ...form, media: form.media.map((m, order) => ({ ...m, order })) };
    if (props.id) {
      const saved = await postsApi.update(props.id, payload);
      form.status = saved.status;
      notify.success(
        mode === 'draft'
          ? 'Rascunho salvo'
          : mode === 'schedule'
            ? 'Post agendado'
            : 'Post publicado',
      );
    } else {
      const created = await postsApi.create(payload);
      notify.success('Post criado');
      await router.replace(`/blog/${created.id}`);
    }
  } catch (error) {
    notify.error(error);
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <q-page class="lc-page">
    <PageHeader
      :title="id ? 'Editar post' : 'Novo post'"
      :subtitle="
        form.slug ? `/blog/${form.slug}` : 'Escreva sobre a última palestra, curso ou mentoria'
      "
    >
      <q-btn flat no-caps icon="arrow_back" label="Blog" to="/blog" />
      <StatusChip v-if="id" :status="form.status" />
      <q-btn
        v-if="id && form.status === 'PUBLISHED'"
        outline
        no-caps
        color="grey-5"
        icon="open_in_new"
        label="Ver no site"
        :href="`${siteUrl}/blog/${form.slug}`"
        target="_blank"
      />
      <q-btn
        outline
        no-caps
        color="grey-5"
        label="Salvar rascunho"
        :loading="saving"
        @click="save('draft')"
      />
      <q-btn
        unelevated
        no-caps
        color="primary"
        icon="send"
        label="Publicar agora"
        :loading="saving"
        @click="save('publish')"
      />
    </PageHeader>

    <q-inner-loading :showing="loading" dark />

    <div v-if="!loading" class="row q-col-gutter-lg">
      <div class="col-12 col-md-8 column q-gutter-md">
        <q-input v-model="form.title" label="Título *" outlined dark />
        <q-input
          v-model="form.excerpt"
          label="Resumo *"
          type="textarea"
          autogrow
          outlined
          dark
          counter
          maxlength="400"
        />
        <RichEditor :json="form.contentJson" :html="form.contentHtml" @change="onContent" />

        <div class="lc-card q-pa-md">
          <div class="row items-center justify-between q-mb-sm">
            <div class="text-subtitle1 text-weight-medium">Galeria do evento</div>
            <span class="lc-muted text-caption">{{ form.media.length }} fotos</span>
          </div>
          <div class="lc-grid">
            <div v-for="(photo, index) in form.media" :key="photo.url" class="column q-gutter-xs">
              <q-img :src="photo.url" :ratio="4 / 3" class="rounded-borders" fit="cover" />
              <q-input v-model="photo.caption" dense outlined dark label="Legenda" />
              <q-btn
                dense
                flat
                no-caps
                color="grey-6"
                icon="delete"
                label="Remover"
                @click="form.media.splice(index, 1)"
              />
            </div>
            <MediaUploader
              :model-value="null"
              label="Adicionar foto"
              folder="blog"
              :ratio="4 / 3"
              @uploaded="addPhoto"
            />
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 column q-gutter-md">
        <div class="lc-card q-pa-md column q-gutter-md">
          <div class="text-subtitle2">Publicação</div>
          <q-input
            v-model="form.slug"
            label="Slug *"
            dense
            outlined
            dark
            prefix="/blog/"
            @update:model-value="slugTouched = true"
          />
          <q-select
            v-model="form.category"
            :options="categoryOptions"
            emit-value
            map-options
            label="Categoria"
            dense
            outlined
            dark
          />
          <ListInput v-model="form.tags" label="Tags" />
          <q-input
            v-model="scheduleAt"
            type="datetime-local"
            label="Agendar para"
            dense
            outlined
            dark
            stack-label
          />
          <q-btn
            outline
            no-caps
            color="info"
            icon="schedule_send"
            label="Agendar"
            :loading="saving"
            @click="save('schedule')"
          />
        </div>

        <div class="lc-card q-pa-md column q-gutter-md">
          <div class="text-subtitle2">Capa</div>
          <MediaUploader
            v-model="form.coverUrl"
            label="Imagem de capa"
            folder="blog"
            :ratio="16 / 9"
          />
        </div>

        <div class="lc-card q-pa-md column q-gutter-md">
          <div class="text-subtitle2">Evento vinculado</div>
          <q-select
            v-model="form.talkId"
            :options="talkOptions"
            emit-value
            map-options
            clearable
            label="Evento da agenda"
            dense
            outlined
            dark
            hint="O evento passa a mostrar “ler o relato”"
          />
          <q-input v-model="form.eventName" label="Nome do evento" dense outlined dark />
          <q-input
            v-model="eventDate"
            type="date"
            label="Data do evento"
            dense
            outlined
            dark
            stack-label
          />
          <q-input v-model="form.eventLocation" label="Local" dense outlined dark />
          <q-input v-model="form.slidesUrl" label="Link dos slides" dense outlined dark />
        </div>

        <div class="lc-card q-pa-md column q-gutter-md">
          <div class="text-subtitle2">SEO</div>
          <q-input
            v-model="form.seoTitle"
            label="Título SEO"
            dense
            outlined
            dark
            counter
            maxlength="70"
          />
          <q-input
            v-model="form.seoDescription"
            label="Descrição SEO"
            type="textarea"
            autogrow
            dense
            outlined
            dark
            counter
            maxlength="160"
          />
          <MediaUploader
            v-model="form.ogImageUrl"
            label="Imagem de compartilhamento"
            folder="blog"
            :ratio="1200 / 630"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
