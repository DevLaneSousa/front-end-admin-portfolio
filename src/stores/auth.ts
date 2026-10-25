import type { AuthResponse, AuthUser, LoginInput } from '@/api';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { authApi } from '@/services/api';
import { onSession, refreshSession, setAccessToken } from '@/services/http';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null);
  const ready = ref(false);
  const isAuthenticated = computed(() => user.value !== null);

  function apply(session: AuthResponse | null) {
    user.value = session?.user ?? null;
    setAccessToken(session?.accessToken ?? null);
  }

  onSession(apply);

  async function restore() {
    if (ready.value) return;
    apply(await refreshSession());
    ready.value = true;
  }

  async function login(input: LoginInput) {
    apply(await authApi.login(input));
    ready.value = true;
  }

  async function logout() {
    await authApi.logout().catch(() => undefined);
    apply(null);
  }

  return { user, ready, isAuthenticated, restore, login, logout };
});
