import type {
  AuthResponse,
  LoginInput,
  Message,
  Overview,
  PostDetail,
  PostInput,
  PostRow,
  ProfileInput,
  ProjectDetail,
  ProjectInput,
  ProjectRow,
  Row,
  UploadedMedia,
} from '@/api';
import { http } from './http';

export type {
  Message,
  Overview,
  PostDetail,
  PostRow,
  ProjectDetail,
  ProjectRow,
  Row,
  UploadedMedia,
} from '@/api';

export const authApi = {
  login: (input: LoginInput) => http.post<AuthResponse>('/auth/login', input).then((r) => r.data),
  logout: () => http.post('/auth/logout'),
};

export const overviewApi = {
  get: () => http.get<Overview>('/admin/overview').then((r) => r.data),
};

export const projectsApi = {
  list: () => http.get<ProjectRow[]>('/admin/projects').then((r) => r.data),
  get: (id: string) => http.get<ProjectDetail>(`/admin/projects/${id}`).then((r) => r.data),
  create: (input: ProjectInput) =>
    http.post<ProjectDetail>('/admin/projects', input).then((r) => r.data),
  update: (id: string, input: ProjectInput) =>
    http.put<ProjectDetail>(`/admin/projects/${id}`, input).then((r) => r.data),
  status: (id: string, status: ProjectRow['status']) =>
    http.patch(`/admin/projects/${id}/status`, { status }),
  featured: (id: string, isFeatured: boolean) =>
    http.patch(`/admin/projects/${id}/featured`, { isFeatured }),
  reorder: (ids: string[]) => http.patch('/admin/projects/reorder', { ids }),
  remove: (id: string) => http.delete(`/admin/projects/${id}`),
};

export const postsApi = {
  list: () => http.get<PostRow[]>('/admin/posts').then((r) => r.data),
  get: (id: string) => http.get<PostDetail>(`/admin/posts/${id}`).then((r) => r.data),
  create: (input: PostInput) => http.post<PostDetail>('/admin/posts', input).then((r) => r.data),
  update: (id: string, input: PostInput) =>
    http.put<PostDetail>(`/admin/posts/${id}`, input).then((r) => r.data),
  publish: (id: string, at?: string | null) => http.post(`/admin/posts/${id}/publish`, { at }),
  unpublish: (id: string) => http.post(`/admin/posts/${id}/unpublish`),
  remove: (id: string) => http.delete(`/admin/posts/${id}`),
};

export const profileApi = {
  get: () => http.get<ProfileInput>('/admin/profile').then((r) => r.data),
  update: (input: ProfileInput) =>
    http.put<ProfileInput>('/admin/profile', input).then((r) => r.data),
};

export const messagesApi = {
  list: (status?: Message['status']) =>
    http.get<Message[]>('/admin/messages', { params: { status } }).then((r) => r.data),
  unread: () =>
    http.get<{ count: number }>('/admin/messages/unread-count').then((r) => r.data.count),
  status: (id: string, status: Message['status']) =>
    http.patch(`/admin/messages/${id}`, { status }),
  remove: (id: string) => http.delete(`/admin/messages/${id}`),
};

export const mediaApi = {
  upload: (file: File, folder: string) => {
    const form = new FormData();
    form.append('file', file);
    return http
      .post<UploadedMedia>('/admin/media', form, { params: { folder } })
      .then((r) => r.data);
  },
};

export const contentApi = {
  list: (resource: string) => http.get<Row[]>(`/admin/${resource}`).then((r) => r.data),
  create: (resource: string, data: Record<string, unknown>) =>
    http.post<Row>(`/admin/${resource}`, data).then((r) => r.data),
  update: (resource: string, id: string, data: Record<string, unknown>) =>
    http.patch<Row>(`/admin/${resource}/${id}`, data).then((r) => r.data),
  remove: (resource: string, id: string) => http.delete(`/admin/${resource}/${id}`),
  reorder: (resource: string, ids: string[]) => http.patch(`/admin/${resource}/reorder`, { ids }),
};
