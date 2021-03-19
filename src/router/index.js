import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/conversation/:id',
    name : 'Conversation',
    component: () => import('../views/Conversation.vue')
  },
  {
    path: '/membre/:membre_id', 
    name : 'Membre',       // Afficher un membre
    component: () => import('../views/Membre.vue')
  },
  {
    path: '/membres',       // Afficher des membres
    name : 'Membres',
    component: () => import('../views/Membres.vue')
  },
  {
    path: '/se-connecter',
    component: () => import('../views/SeConnecter.vue')
  },
   {
    path: '/inscription',
    component: () => import('../views/Inscription.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
