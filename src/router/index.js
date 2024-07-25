import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StoreView from '../views/StoreView.vue'
import MartView from '../views/MartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/mart',
      name: 'mart',
      component: MartView
    },
  ]
})

export default router
