import type {
  Availability,
  Device,
  ExperienceKind,
  PostCategory,
  ProjectSectionKind,
  StackKind,
  TalkKind,
  TechLayer,
} from '@/api';

export const POST_CATEGORIES = [
  'TALK',
  'COURSE',
  'MENTORSHIP',
  'EVENT',
  'PROJECT',
  'CAREER',
] as const satisfies readonly PostCategory[];

export const DEVICES = ['DESKTOP', 'TABLET', 'MOBILE'] as const satisfies readonly Device[];

export const AVAILABILITIES = [
  'AVAILABLE',
  'LIMITED',
  'UNAVAILABLE',
] as const satisfies readonly Availability[];

export const LABELS = {
  postCategory: {
    TALK: 'Palestra',
    COURSE: 'Curso',
    MENTORSHIP: 'Mentoria',
    EVENT: 'Evento',
    PROJECT: 'Projeto',
    CAREER: 'Carreira',
  } satisfies Record<PostCategory, string>,
  talkKind: {
    TALK: 'Palestra',
    COURSE: 'Curso',
    MENTORSHIP: 'Mentoria',
    WORKSHOP: 'Minicurso',
  } satisfies Record<TalkKind, string>,
  stackKind: {
    PRACTICE: 'Competência / prática',
    TECHNOLOGY: 'Tecnologia',
    TOOL: 'Ferramenta',
    INTEGRATION_PATTERN: 'Padrão de integração',
    INTEGRATION: 'Integração específica',
  } satisfies Record<StackKind, string>,
  techLayer: {
    PRODUCT: 'Produto',
    FRONTEND: 'Front-end',
    BACKEND: 'Back-end',
    DATABASE: 'Banco de dados',
    DESIGN: 'Design',
    MOBILE: 'Mobile',
    DEVOPS: 'DevOps',
    ANIMATION: 'Animação',
    INTEGRATION: 'Integrações',
  } satisfies Record<TechLayer, string>,
  experienceKind: {
    WORK: 'Trabalho',
    EDUCATION: 'Formação',
    ACHIEVEMENT: 'Conquista',
    LEADERSHIP: 'Liderança',
  } satisfies Record<ExperienceKind, string>,
  availability: {
    AVAILABLE: 'Disponível para projetos',
    LIMITED: 'Agenda limitada',
    UNAVAILABLE: 'Agenda fechada',
  } satisfies Record<Availability, string>,
  device: {
    DESKTOP: 'Desktop',
    TABLET: 'Tablet',
    MOBILE: 'Mobile',
  } satisfies Record<Device, string>,
  sectionKind: {
    REQUIREMENTS: 'Requisitos',
    PROTOTYPE: 'Protótipo',
    DEVELOPMENT: 'Desenvolvimento',
    INTEGRATION: 'Integrações',
    RESULTS: 'Resultados',
  } satisfies Record<ProjectSectionKind, string>,
};

export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}
