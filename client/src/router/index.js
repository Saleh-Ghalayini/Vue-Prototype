import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import { useAuthStore } from '../store/auth'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()

    if(to.meta.requiresAuth && !auth.isAuthenticated) {
        next({ path: '/'})
    } else {
        next()
    }
})

export default router