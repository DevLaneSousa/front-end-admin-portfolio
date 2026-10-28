import { LABELS } from '@/lib/labels';

export type FieldType =
  'text' | 'textarea' | 'number' | 'select' | 'date' | 'toggle' | 'list' | 'url' | 'image';

export interface Field {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string }[];
  hint?: string;
  span?: boolean;
  default?: unknown;
  translatable?: boolean;
}

export interface ResourceConfig {
  key: string;
  label: string;
  singular: string;
  icon: string;
  group: 'Landing' | 'Blog';
  columns: string[];
  sortable: boolean;
  fields: Field[];
}

const options = (labels: Record<string, string>) =>
  Object.entries(labels).map(([value, label]) => ({ value, label }));

const published: Field = { key: 'isPublished', label: 'Publicado', type: 'toggle', default: true };

export const resources: ResourceConfig[] = [
  {
    key: 'services',
    label: 'Serviços',
    singular: 'serviço',
    icon: 'design_services',
    group: 'Landing',
    columns: ['title', 'description'],
    sortable: true,
    fields: [
      { key: 'title', translatable: true, label: 'Título', type: 'text', required: true },
      {
        key: 'icon',
        label: 'Ícone',
        type: 'text',
        hint: 'rocket, building, newspaper, plug, smartphone, pen-tool, file-text',
      },
      {
        key: 'description',
        translatable: true,
        label: 'Descrição',
        type: 'textarea',
        required: true,
        span: true,
      },
      {
        key: 'deliverables',
        translatable: true,
        label: 'Entregáveis',
        type: 'list',
        span: true,
        default: [],
      },
      published,
    ],
  },
  {
    key: 'process-steps',
    label: 'Processo',
    singular: 'etapa',
    icon: 'account_tree',
    group: 'Landing',
    columns: ['title', 'description'],
    sortable: true,
    fields: [
      { key: 'title', translatable: true, label: 'Título', type: 'text', required: true },
      {
        key: 'icon',
        label: 'Ícone',
        type: 'text',
        hint: 'search, pen-tool, file-text, layout, database, send',
      },
      {
        key: 'description',
        translatable: true,
        label: 'Descrição',
        type: 'textarea',
        required: true,
        span: true,
      },
      {
        key: 'artifacts',
        translatable: true,
        label: 'Entregáveis',
        type: 'list',
        span: true,
        default: [],
      },
      published,
    ],
  },
  {
    key: 'technologies',
    label: 'Stack',
    singular: 'item da stack',
    icon: 'code',
    group: 'Landing',
    columns: ['name', 'kind', 'layer'],
    sortable: true,
    fields: [
      { key: 'name', translatable: true, label: 'Nome', type: 'text', required: true },
      {
        key: 'slug',
        label: 'Slug',
        type: 'text',
        required: true,
        hint: 'gerado do nome se ficar vazio',
      },
      {
        key: 'layer',
        label: 'Camada',
        type: 'select',
        required: true,
        options: options(LABELS.techLayer),
      },
      {
        key: 'kind',
        label: 'Classificação',
        type: 'select',
        required: true,
        options: options(LABELS.stackKind),
        hint: 'prática, tecnologia, ferramenta, padrão ou integração específica',
      },
      {
        key: 'description',
        translatable: true,
        label: 'Descrição curta',
        type: 'text',
        hint: 'aparece nas integrações, ex.: ERP da construção · Paycom',
      },
      { key: 'icon', label: 'Ícone', type: 'text' },
      published,
    ],
  },
  {
    key: 'categories',
    label: 'Categorias',
    singular: 'categoria',
    icon: 'category',
    group: 'Landing',
    columns: ['name', 'slug'],
    sortable: true,
    fields: [
      { key: 'name', translatable: true, label: 'Nome', type: 'text', required: true },
      {
        key: 'slug',
        label: 'Slug',
        type: 'text',
        required: true,
        hint: 'gerado do nome se ficar vazio',
      },
    ],
  },
  {
    key: 'experiences',
    label: 'Trajetória',
    singular: 'item da trajetória',
    icon: 'timeline',
    group: 'Landing',
    columns: ['title', 'organization', 'startDate'],
    sortable: true,
    fields: [
      { key: 'title', translatable: true, label: 'Título', type: 'text', required: true },
      {
        key: 'organization',
        translatable: true,
        label: 'Organização',
        type: 'text',
        required: true,
      },
      {
        key: 'kind',
        label: 'Tipo',
        type: 'select',
        required: true,
        options: options(LABELS.experienceKind),
      },
      { key: 'startDate', label: 'Início', type: 'date', required: true },
      { key: 'endDate', label: 'Fim (vazio = atual)', type: 'date' },
      { key: 'description', translatable: true, label: 'Descrição', type: 'textarea', span: true },
      published,
    ],
  },
  {
    key: 'talks',
    label: 'Agenda',
    singular: 'evento',
    icon: 'co_present',
    group: 'Blog',
    columns: ['title', 'event', 'date'],
    sortable: true,
    fields: [
      { key: 'title', translatable: true, label: 'Título', type: 'text', required: true },
      { key: 'event', translatable: true, label: 'Evento', type: 'text', required: true },
      {
        key: 'kind',
        label: 'Tipo',
        type: 'select',
        required: true,
        options: options(LABELS.talkKind),
      },
      { key: 'date', label: 'Data', type: 'date', required: true },
      { key: 'location', translatable: true, label: 'Local', type: 'text' },
      { key: 'audience', translatable: true, label: 'Público', type: 'text' },
      { key: 'link', label: 'Link do evento', type: 'url' },
      { key: 'coverUrl', label: 'Imagem', type: 'image' },
      published,
    ],
  },
  {
    key: 'certifications',
    label: 'Certificados',
    singular: 'certificado',
    icon: 'workspace_premium',
    group: 'Landing',
    columns: ['title', 'issuer', 'hours'],
    sortable: true,
    fields: [
      { key: 'title', translatable: true, label: 'Título', type: 'text', required: true },
      { key: 'issuer', translatable: true, label: 'Emissor', type: 'text', required: true },
      { key: 'hours', label: 'Carga horária', type: 'text' },
      {
        key: 'category',
        label: 'Pasta no terminal',
        type: 'select',
        required: true,
        options: [
          { value: 'DEV', label: 'Desenvolvimento' },
          { value: 'DESIGN', label: 'Design' },
          { value: 'ACADEMIC', label: 'Acadêmico' },
          { value: 'TALK', label: 'Palestra' },
        ],
      },
      { key: 'issuedAt', label: 'Emitido em', type: 'date' },
      { key: 'imageUrl', label: 'Imagem', type: 'image', span: true },
      published,
    ],
  },
  {
    key: 'social-links',
    label: 'Redes e contatos',
    singular: 'link',
    icon: 'link',
    group: 'Landing',
    columns: ['label', 'url'],
    sortable: true,
    fields: [
      { key: 'label', label: 'Nome', type: 'text', required: true },
      {
        key: 'icon',
        label: 'Ícone',
        type: 'text',
        required: true,
        hint: 'github, linkedin, instagram, mail, phone, globe',
      },
      { key: 'url', label: 'URL', type: 'url', required: true, span: true },
      published,
    ],
  },
  {
    key: 'tags',
    label: 'Tags',
    singular: 'tag',
    icon: 'sell',
    group: 'Blog',
    columns: ['name', 'slug'],
    sortable: false,
    fields: [
      { key: 'name', label: 'Nome', type: 'text', required: true },
      {
        key: 'slug',
        label: 'Slug',
        type: 'text',
        required: true,
        hint: 'gerado do nome se ficar vazio',
      },
    ],
  },
];

export const findResource = (key: string) => resources.find((resource) => resource.key === key);
