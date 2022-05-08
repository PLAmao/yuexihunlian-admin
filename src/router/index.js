import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/layout/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
  {
    path: '/',
    component: home,
    redirect: '/user',
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user'),
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/account'),
      },
      {
        path: 'applet',
        name: 'applet',
        component: () => import('@/views/applet'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

export default router
