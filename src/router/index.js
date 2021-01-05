import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Welcome'
    },
    component: Home
  },
  {
    path: '/collection/latest',
    name: 'Latest',
    meta: {
      title: 'Latest'
    },
    component: () => import('../views/collection/Latest.vue')
  },
  {
    path: '/collection/archive',
    name: 'Archive',
    meta: {
      title: 'Archive'
    },
    component: () => import('../views/collection/Archive.vue')
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    meta: {
      title: 'Contact Us'
    },
    component: () => import('../views/ContactUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
