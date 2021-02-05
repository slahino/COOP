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
    path: '/membre', 
    name : 'Membre',       // Afficher les membres
    component: () => import('../views/Membre.vue')
  },
  {
    path: '/membres',       // Afficher un membre
    name : 'Membres',
    component: () => import('../views/Membres.vue')
  },
  {
    path: '/se-connecter',
    component: () => import('../views/SeConnecter.vue')
  },
   {
    path: '/create-account',
    component: () => import('../views/CreateAccount.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
