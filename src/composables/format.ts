const dateTime = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
const date = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeZone: 'UTC' });

export const formatDateTime = (value: string | null | undefined) =>
  value ? dateTime.format(new Date(value)) : '—';
export const formatDate = (value: string | null | undefined) =>
  value ? date.format(new Date(value)) : '—';
export const toInputDate = (value: unknown) =>
  typeof value === 'string' && value ? value.slice(0, 10) : '';

export const siteUrl = (import.meta.env.VITE_SITE_URL ?? 'http://localhost:3000').replace(
  /\/$/,
  '',
);

export const STATUS_COLORS: Record<string, string> = {
  PUBLISHED: 'positive',
  DRAFT: 'grey-7',
  ARCHIVED: 'grey-9',
  SCHEDULED: 'info',
  NEW: 'primary',
  READ: 'grey-7',
};

export const STATUS_LABELS: Record<string, string> = {
  PUBLISHED: 'Publicado',
  DRAFT: 'Rascunho',
  ARCHIVED: 'Arquivado',
  SCHEDULED: 'Agendado',
  NEW: 'Nova',
  READ: 'Lida',
};
