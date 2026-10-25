<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { errorMessage } from '@/services/http';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const route = useRoute();
const router = useRouter();
const form = reactive({ email: '', password: '' });
const loading = ref(false);
const error = ref('');
const showPassword = ref(false);

async function submit() {
  loading.value = true;
  error.value = '';
  try {
    await auth.login(form);
    const next =
      typeof route.query.next === 'string' && route.query.next.startsWith('/')
        ? route.query.next
        : '/';
    await router.replace(next);
  } catch (err) {
    error.value = errorMessage(err);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="lc-login flex flex-center">
        <q-form class="lc-login__card lc-card column q-gutter-md" @submit.prevent="submit">
          <div class="column items-center q-mb-sm">
            <span class="lc-login__flame" />
            <h1 class="text-h6 lc-mono q-my-sm">lane<span class="text-primary">codes</span></h1>
            <p class="lc-muted q-mb-none">Entre para gerenciar o portfólio</p>
          </div>
          <q-input
            v-model="form.email"
            type="email"
            label="E-mail"
            outlined
            dark
            autocomplete="username"
            autofocus
          />
          <q-input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            outlined
            dark
            autocomplete="current-password"
          >
            <template #append>
              <q-icon
                :name="showPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
          <q-banner v-if="error" dense rounded class="bg-negative text-white">{{ error }}</q-banner>
          <q-btn
            type="submit"
            color="primary"
            unelevated
            size="lg"
            label="Entrar"
            :loading="loading"
            no-caps
          />
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.lc-login {
  background: radial-gradient(circle at 20% 10%, rgba(181, 3, 22, 0.35), transparent 50%), #000;
}

.lc-login__card {
  width: min(400px, 92vw);
  padding: 32px 28px;
  box-shadow: 0 40px 90px -20px rgba(0, 0, 0, 0.8);
}

.lc-login__flame {
  width: 40px;
  height: 40px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  background: $primary;
  box-shadow: 0 0 40px rgba(181, 3, 22, 0.6);
}
</style>
