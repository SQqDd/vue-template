import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "App" */ '../views/login.vue'),
  },

  {
    path: '*',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "Not Found" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
