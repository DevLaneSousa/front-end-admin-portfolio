import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { resources } from '@/config/resources';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue'),
      meta: { public: true },
    },
    {
      path: '/',
      component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        { path: '', name: 'overview', component: () => import('@/pages/OverviewPage.vue') },
        { path: 'projetos', name: 'projects', component: () => import('@/pages/ProjectsPage.vue') },
        {
          path: 'projetos/novo',
          name: 'project-new',
          component: () => import('@/pages/ProjectEditorPage.vue'),
        },
        {
          path: 'projetos/:id',
          name: 'project-edit',
          component: () => import('@/pages/ProjectEditorPage.vue'),
          props: true,
        },
        { path: 'blog', name: 'posts', component: () => import('@/pages/PostsPage.vue') },
        {
          path: 'blog/novo',
          name: 'post-new',
          component: () => import('@/pages/PostEditorPage.vue'),
        },
        {
          path: 'blog/:id',
          name: 'post-edit',
          component: () => import('@/pages/PostEditorPage.vue'),
          props: true,
        },
        { path: 'perfil', name: 'profile', component: () => import('@/pages/ProfilePage.vue') },
        {
          path: 'mensagens',
          name: 'messages',
          component: () => import('@/pages/MessagesPage.vue'),
        },
        ...resources.map((resource) => ({
          path: `conteudo/${resource.key}`,
          name: `content-${resource.key}`,
          component: () => import('@/pages/ContentPage.vue'),
          props: { resourceKey: resource.key },
        })),
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();
  await auth.restore();
  if (!to.meta.public && !auth.isAuthenticated)
    return { name: 'login', query: { next: to.fullPath } };
  if (to.name === 'login' && auth.isAuthenticated) return { name: 'overview' };
  return true;
});
