import { createRouter, createWebHistory } from 'vue-router'
import StudentDashboard from '../views/StudentDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StudentDashboard
    }
  ]
})

export default router