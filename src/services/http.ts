import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import type { AuthResponse } from '@/api';

export const API_URL = (import.meta.env.VITE_API_URL ?? 'http://localhost:3333').replace(/\/$/, '');

let accessToken: string | null = null;
let refreshing: Promise<AuthResponse | null> | null = null;
let onSessionChange: (session: AuthResponse | null) => void = () => undefined;

export const http = axios.create({
  baseURL: `${API_URL}/api/v1`,
  withCredentials: true,
});

export function setAccessToken(token: string | null) {
  accessToken = token;
}

export function onSession(listener: (session: AuthResponse | null) => void) {
  onSessionChange = listener;
}

export async function refreshSession(): Promise<AuthResponse | null> {
  refreshing ??= axios
    .post<AuthResponse>(`${API_URL}/api/v1/auth/refresh`, null, { withCredentials: true })
    .then(({ data }) => {
      setAccessToken(data.accessToken);
      onSessionChange(data);
      return data;
    })
    .catch(() => {
      setAccessToken(null);
      onSessionChange(null);
      return null;
    })
    .finally(() => {
      refreshing = null;
    });
  return refreshing;
}

http.interceptors.request.use((config) => {
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

http.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as
      (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined;
    const isAuthCall = original?.url?.startsWith('/auth/');
    if (error.response?.status === 401 && original && !original._retry && !isAuthCall) {
      original._retry = true;
      const session = await refreshSession();
      if (session) return http(original);
    }
    return Promise.reject(error);
  },
);

export function errorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as
      { message?: string | string[]; errors?: { path: string; message: string }[] } | undefined;
    if (data?.errors?.length) return data.errors.map((e) => `${e.path}: ${e.message}`).join(' · ');
    if (Array.isArray(data?.message)) return data.message.join(' · ');
    if (data?.message) return data.message;
    if (!error.response) return 'Não foi possível falar com a API';
  }
  return 'Algo deu errado';
}
