<script setup lang="ts">
import type { ProjectInput, ProjectMediaInput } from '@/api';
import { DEVICES, LABELS, slugify } from '@/lib/labels';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import MediaUploader from '@/components/MediaUploader.vue';
import PageHeader from '@/components/PageHeader.vue';
import { siteUrl } from '@/composables/format';
import { useNotify } from '@/composables/useNotify';
import EnglishFields from '@/components/EnglishFields.vue';
import { withEnglish, type EnglishField, type EnglishValues } from '@/lib/translations';
import { contentApi, projectsApi, type Row, type UploadedMedia } from '@/services/api';

const props = defineProps<{ id?: string }>();
const router = useRouter();
const notify = useNotify();

const empty = (): ProjectInput => ({
  slug: '',
  title: '',
  subtitle: null,
  summary: '',
  kind: 'DEV',
  client: null,
  year: new Date().getFullYear(),
  status: 'DRAFT',
  isFeatured: false,
  coverUrl: null,
  liveUrl: null,
  repoUrl: null,
  designUrl: null,
  challenge: null,
  solution: null,
  results: null,
  myRole: null,
  seoTitle: null,
  seoDescription: null,
  categoryId: null,
  technologyIds: [],
  media: [],
  sections: [],
  translations: { en: {} },
});

const form = reactive<ProjectInput>(empty());

const projectEnglishFields: EnglishField[] = [
  { key: 'title', label: 'Título', type: 'text' },
  { key: 'subtitle', label: 'Subtítulo', type: 'text' },
  { key: 'summary', label: 'Resumo', type: 'textarea' },
  { key: 'client', label: 'Cliente', type: 'text' },
  { key: 'myRole', label: 'Meu papel', type: 'textarea' },
  { key: 'challenge', label: 'O desafio', type: 'textarea' },
  { key: 'solution', label: 'A solução', type: 'textarea' },
  { key: 'results', label: 'Resultados', type: 'textarea' },
  { key: 'seoTitle', label: 'Título SEO', type: 'text' },
  { key: 'seoDescription', label: 'Descrição SEO', type: 'textarea' },
];
const sectionEnglishFields: EnglishField[] = [
  { key: 'title', label: 'Título da seção', type: 'text', span: true },
  { key: 'body', label: 'Texto da seção', type: 'textarea' },
];

const projectEnglish = computed<EnglishValues>({
  get: () => form.translations.en ?? {},
  set: (value) => {
    form.translations = { ...form.translations, en: value };
  },
});

function sectionEnglish(index: number) {
  return form.sections[index]?.translations.en ?? {};
}

function setSectionEnglish(index: number, value: EnglishValues) {
  const section = form.sections[index];
  if (section) section.translations = { ...section.translations, en: value };
}
const tab = ref('dados');
const saving = ref(false);
const loading = ref(Boolean(props.id));
const slugTouched = ref(Boolean(props.id));
const categories = ref<Row[]>([]);
const technologies = ref<Row[]>([]);

const sectionKinds = LABELS.sectionKind;

const techOptions = computed(() =>
  technologies.value.map((t) => ({
    label: String(t.name),
    value: t.id,
    caption: LABELS.techLayer[t.layer as keyof typeof LABELS.techLayer],
  })),
);
const categoryOptions = computed(() =>
  categories.value.map((c) => ({ label: String(c.name), value: c.id })),
);
const mediaByDevice = computed(() =>
  DEVICES.map((device) => ({ device, items: form.media.filter((m) => m.device === device) })),
);

watch(
  () => form.title,
  (title) => {
    if (!slugTouched.value) form.slug = slugify(title);
  },
);

onMounted(async () => {
  try {
    const [cats, techs] = await Promise.all([
      contentApi.list('categories'),
      contentApi.list('technologies'),
    ]);
    categories.value = cats;
    technologies.value = techs;
    if (props.id) {
      const project = await projectsApi.get(props.id);
      Object.assign(form, empty(), project, {
        media: project.media.map(
          ({ type, device, url, width, height, alt, isShowcase, order }) => ({
            type,
            device,
            url,
            width,
            height,
            alt,
            isShowcase,
            order,
          }),
        ),
        sections: project.sections.map(({ kind, title, body, mediaUrl, order, translations }) => ({
          kind,
          title,
          body,
          mediaUrl,
          order,
          translations: { en: {}, ...translations },
        })),
        translations: { en: {}, ...project.translations },
      });
    }
  } catch (error) {
    notify.error(error);
  } finally {
    loading.value = false;
  }
});

function addMedia(device: ProjectMediaInput['device'], uploaded: UploadedMedia) {
  form.media.push({
    type: uploaded.type === 'VIDEO' ? 'VIDEO' : 'IMAGE',
    device,
    url: uploaded.url,
    width: uploaded.width,
    height: uploaded.height,
    alt: form.title,
    isShowcase: false,
    order: form.media.filter((m) => m.device === device).length,
  });
}

function removeMedia(item: ProjectMediaInput) {
  form.media = form.media.filter((m) => m !== item);
}

function addSection() {
  form.sections.push({
    kind: 'DEVELOPMENT',
    title: '',
    body: '',
    mediaUrl: null,
    order: form.sections.length,
    translations: { en: {} },
  });
}

async function save(status?: ProjectInput['status']) {
  if (status) form.status = status;
  saving.value = true;
  try {
    const payload: ProjectInput = {
      ...form,
      translations: withEnglish(form.translations, form.translations.en ?? {}),
      sections: form.sections.map((s, order) => ({
        ...s,
        order,
        translations: withEnglish(s.translations, s.translations.en ?? {}),
      })),
      media: form.media.map((m, order) => ({ ...m, order })),
    };
    if (props.id) {
      await projectsApi.update(props.id, payload);
      notify.success('Projeto salvo');
    } else {
      const created = await projectsApi.create(payload);
      notify.success('Projeto criado');
      await router.replace(`/projetos/${created.id}`);
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
      :title="id ? form.title || 'Editar projeto' : 'Novo projeto'"
      :subtitle="form.slug ? `/projetos/${form.slug}` : undefined"
    >
      <q-btn flat no-caps icon="arrow_back" label="Projetos" to="/projetos" />
      <q-btn
        v-if="id"
        outline
        no-caps
        color="grey-5"
        icon="open_in_new"
        label="Ver no site"
        :href="`${siteUrl}/projetos/${form.slug}`"
        target="_blank"
      />
      <q-btn
        outline
        no-caps
        color="grey-5"
        label="Salvar rascunho"
        :loading="saving"
        @click="save('DRAFT')"
      />
      <q-btn
        unelevated
        no-caps
        color="primary"
        icon="rocket_launch"
        label="Publicar"
        :loading="saving"
        @click="save('PUBLISHED')"
      />
    </PageHeader>

    <q-inner-loading :showing="loading" dark />

    <div v-if="!loading" class="lc-card">
      <q-tabs
        v-model="tab"
        align="left"
        dense
        no-caps
        active-color="primary"
        indicator-color="primary"
        class="q-px-md"
      >
        <q-tab name="dados" label="Dados" />
        <q-tab name="case" label="Case" />
        <q-tab name="midias" :label="`Mídias (${form.media.length})`" />
        <q-tab name="seo" label="SEO" />
        <q-tab name="en" label="Inglês (EN)" />
      </q-tabs>
      <q-separator dark />

      <q-tab-panels v-model="tab" animated dark class="bg-transparent">
        <q-tab-panel name="dados">
          <div class="lc-form-grid">
            <q-input v-model="form.title" label="Título *" outlined dark />
            <q-input
              v-model="form.slug"
              label="Slug *"
              outlined
              dark
              prefix="/projetos/"
              @update:model-value="slugTouched = true"
            />
            <q-input
              v-model="form.summary"
              label="Resumo *"
              type="textarea"
              autogrow
              outlined
              dark
              class="lc-span"
              counter
              maxlength="600"
            />
            <q-select
              v-model="form.kind"
              :options="[
                { label: 'Desenvolvimento', value: 'DEV' },
                { label: 'Design', value: 'DESIGN' },
              ]"
              emit-value
              map-options
              label="Tipo"
              outlined
              dark
            />
            <q-select
              v-model="form.categoryId"
              :options="categoryOptions"
              emit-value
              map-options
              clearable
              label="Categoria"
              outlined
              dark
            />
            <q-input v-model="form.client" label="Cliente" outlined dark />
            <q-input v-model.number="form.year" type="number" label="Ano" outlined dark />
            <q-input v-model="form.liveUrl" label="Link do projeto" outlined dark />
            <q-input v-model="form.designUrl" label="Link do Figma" outlined dark />
            <q-input v-model="form.repoUrl" label="Repositório" outlined dark />
            <q-input v-model="form.myRole" label="Meu papel" outlined dark />
            <q-select
              v-model="form.technologyIds"
              :options="techOptions"
              emit-value
              map-options
              multiple
              use-chips
              label="Stack"
              outlined
              dark
              class="lc-span"
            />
            <q-toggle v-model="form.isFeatured" label="Destaque na landing" color="primary" />
            <div class="lc-span" style="max-width: 420px">
              <MediaUploader v-model="form.coverUrl" label="Capa" folder="projects" />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="case">
          <div class="column q-gutter-md">
            <q-input
              v-model="form.challenge"
              label="O desafio"
              type="textarea"
              autogrow
              outlined
              dark
            />
            <q-input
              v-model="form.solution"
              label="A solução"
              type="textarea"
              autogrow
              outlined
              dark
            />
            <q-input
              v-model="form.results"
              label="Resultados"
              type="textarea"
              autogrow
              outlined
              dark
            />
            <div class="row items-center justify-between q-mt-lg">
              <div>
                <div class="text-subtitle1 text-weight-medium">Seções extras</div>
                <div class="lc-muted text-caption">
                  Requisitos, protótipo, integrações (ex.: CVCRM e Sienge), etc.
                </div>
              </div>
              <q-btn
                outline
                no-caps
                color="grey-5"
                icon="add"
                label="Adicionar seção"
                @click="addSection"
              />
            </div>
            <div
              v-for="(section, index) in form.sections"
              :key="index"
              class="lc-card q-pa-md column q-gutter-sm"
            >
              <div class="row q-col-gutter-sm items-center">
                <q-select
                  v-model="section.kind"
                  :options="
                    Object.entries(sectionKinds).map(([value, label]) => ({ value, label }))
                  "
                  emit-value
                  map-options
                  dense
                  outlined
                  dark
                  class="col-12 col-sm-3"
                />
                <q-input v-model="section.title" dense outlined dark label="Título" class="col" />
                <q-btn
                  flat
                  round
                  dense
                  icon="delete"
                  color="grey-6"
                  @click="form.sections.splice(index, 1)"
                />
              </div>
              <q-input
                v-model="section.body"
                type="textarea"
                autogrow
                outlined
                dark
                label="Texto"
              />
              <div style="max-width: 360px">
                <MediaUploader
                  v-model="section.mediaUrl"
                  label="Imagem da seção (opcional)"
                  folder="projects"
                />
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="midias">
          <p class="lc-muted">
            Separe as telas por dispositivo. As marcadas como <strong>vitrine</strong> aparecem na
            cena do tablet da landing.
          </p>
          <div v-for="group in mediaByDevice" :key="group.device" class="q-mb-xl">
            <div class="text-subtitle1 text-weight-medium q-mb-sm">
              {{ LABELS.device[group.device] }}
            </div>
            <div class="lc-grid">
              <div
                v-for="item in group.items"
                :key="item.url"
                class="lc-card q-pa-sm column q-gutter-xs"
              >
                <q-img
                  :src="item.url.startsWith('/') ? `${siteUrl}${item.url}` : item.url"
                  :ratio="
                    group.device === 'MOBILE' ? 9 / 19 : group.device === 'TABLET' ? 3 / 4 : 16 / 10
                  "
                  class="rounded-borders"
                  fit="cover"
                />
                <q-input v-model="item.alt" dense outlined dark label="Texto alternativo" />
                <div class="row items-center justify-between">
                  <q-toggle v-model="item.isShowcase" dense label="Vitrine" color="primary" />
                  <q-btn flat round dense icon="delete" color="grey-6" @click="removeMedia(item)" />
                </div>
              </div>
              <div class="lc-card q-pa-sm">
                <MediaUploader
                  :model-value="null"
                  :label="`Adicionar tela ${LABELS.device[group.device].toLowerCase()}`"
                  folder="projects"
                  accept="image/*,video/mp4,video/webm"
                  @uploaded="(media) => addMedia(group.device, media)"
                />
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="seo">
          <div class="lc-form-grid">
            <q-input
              v-model="form.seoTitle"
              label="Título SEO"
              outlined
              dark
              counter
              maxlength="70"
              class="lc-span"
            />
            <q-input
              v-model="form.seoDescription"
              label="Descrição SEO"
              type="textarea"
              autogrow
              outlined
              dark
              counter
              maxlength="160"
              class="lc-span"
            />
          </div>
        </q-tab-panel>

        <q-tab-panel name="en">
          <div class="lc-form-grid">
            <EnglishFields
              v-model="projectEnglish"
              :fields="projectEnglishFields"
              :source="form"
              default-open
            />
            <EnglishFields
              v-for="(section, index) in form.sections"
              :key="index"
              :model-value="sectionEnglish(index)"
              :fields="sectionEnglishFields"
              :source="section"
              @update:model-value="setSectionEnglish(index, $event)"
            />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>
