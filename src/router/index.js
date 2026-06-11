import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/Resume.vue')
  },
  {
    path: '/matching',
    name: 'MatchingAnimation',
    component: () => import('@/views/MatchingAnimation.vue')
  },
  {
    path: '/match',
    name: 'Match',
    component: () => import('@/views/Match.vue')
  },
  {
    path: '/company/:id',
    name: 'CompanyDetail',
    component: () => import('@/views/CompanyDetail.vue')
  },
  {
    path: '/chat/:companyId',
    name: 'Chat',
    component: () => import('@/views/Chat.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
