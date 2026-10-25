<script setup lang="ts">
import type { ProfileInput } from '@/api';
import { AVAILABILITIES, LABELS } from '@/lib/labels';
import { computed, onMounted, reactive, ref } from 'vue';
import MediaUploader from '@/components/MediaUploader.vue';
import PageHeader from '@/components/PageHeader.vue';
import { useNotify } from '@/composables/useNotify';
import { profileApi } from '@/services/api';

const notify = useNotify();
const loading = ref(true);
const saving = ref(false);
const form = reactive<ProfileInput>({
  fullName: '',
  displayName: '',
  headline: '',
  roleTitle: '',
  company: '',
  bioShort: '',
  bioLong: null,
  location: '',
  avatarUrl: null,
  badgePhotoUrl: null,
  availability: 'AVAILABLE',
  resumeUrl: null,
  email: '',
  whatsapp: null,
});

const availabilityOptions = AVAILABILITIES.map((value) => ({
  value,
  label: LABELS.availability[value],
}));
const photo = computed(() => form.badgePhotoUrl ?? form.avatarUrl);

onMounted(async () => {
  try {
    Object.assign(form, await profileApi.get());
  } catch (error) {
    notify.error(error);
  } finally {
    loading.value = false;
  }
});

async function save() {
  saving.value = true;
  try {
    Object.assign(form, await profileApi.update({ ...form }));
    notify.success('Perfil atualizado');
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
      title="Perfil e crachá"
      subtitle="Dados do hero, do crachá animado e da seção Sobre"
    >
      <q-btn
        unelevated
        no-caps
        color="primary"
        icon="save"
        label="Salvar"
        :loading="saving"
        @click="save"
      />
    </PageHeader>

    <q-inner-loading :showing="loading" dark />

    <div v-if="!loading" class="row q-col-gutter-lg">
      <div class="col-12 col-md-8">
        <div class="lc-card q-pa-lg lc-form-grid">
          <q-input v-model="form.fullName" label="Nome completo" outlined dark />
          <q-input v-model="form.displayName" label="Como quer ser chamada" outlined dark />
          <q-input v-model="form.roleTitle" label="Cargo no crachá" outlined dark />
          <q-input v-model="form.company" label="Empresa" outlined dark />
          <q-input v-model="form.headline" label="Frase do hero" outlined dark class="lc-span" />
          <q-input
            v-model="form.bioShort"
            label="Bio curta"
            type="textarea"
            autogrow
            outlined
            dark
            class="lc-span"
            counter
            maxlength="400"
          />
          <q-input
            v-model="form.bioLong"
            label="Bio completa"
            type="textarea"
            autogrow
            outlined
            dark
            class="lc-span"
          />
          <q-input v-model="form.location" label="Localização" outlined dark />
          <q-select
            v-model="form.availability"
            :options="availabilityOptions"
            emit-value
            map-options
            label="Disponibilidade"
            outlined
            dark
          />
          <q-input v-model="form.email" type="email" label="E-mail de contato" outlined dark />
          <q-input
            v-model="form.whatsapp"
            label="WhatsApp"
            outlined
            dark
            mask="(##) #####-####"
            unmasked-value
          />
          <div>
            <MediaUploader
              v-model="form.badgePhotoUrl"
              label="Foto do crachá"
              folder="perfil"
              :ratio="1"
            />
          </div>
          <div>
            <MediaUploader
              v-model="form.resumeUrl"
              label="Currículo (PDF)"
              folder="perfil"
              accept="application/pdf"
              :ratio="3"
            />
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="text-caption lc-muted q-mb-sm">Prévia do crachá</div>
        <div class="lc-badge-preview">
          <div class="lc-badge-preview__strap" />
          <div class="lc-badge-preview__card">
            <div class="lc-badge-preview__company lc-mono">{{ form.company.split('|')[0] }}</div>
            <div class="lc-badge-preview__photo">
              <img v-if="photo" :src="photo" alt="" />
              <span v-else>{{ form.displayName.slice(0, 2).toUpperCase() }}</span>
            </div>
            <div class="text-weight-bold text-subtitle1">{{ form.fullName }}</div>
            <div class="text-caption text-uppercase" style="color: #313131">
              {{ form.roleTitle }}
            </div>
            <q-chip
              dense
              size="sm"
              :color="form.availability === 'AVAILABLE' ? 'green-1' : 'orange-1'"
              text-color="black"
            >
              {{ LABELS.availability[form.availability] }}
            </q-chip>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
.lc-badge-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lc-badge-preview__strap {
  width: 18px;
  height: 80px;
  background: repeating-linear-gradient(to bottom, $primary 0 16px, #8c0211 16px 18px);
}

.lc-badge-preview__card {
  width: 240px;
  padding: 24px 20px;
  border-radius: 16px;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
}

.lc-badge-preview__company {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.lc-badge-preview__photo {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 3px solid $primary;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: #eee;
  color: $primary;
  font-size: 28px;
  font-weight: 700;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
