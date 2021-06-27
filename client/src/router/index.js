import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from "../views/Details";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
