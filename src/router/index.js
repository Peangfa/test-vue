import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/checkin',
    name: 'checkin',
    component: () => import('../views/CheckinView.vue')
  },


  {
    path: '/employee',
    name:'employee',
    component: () => import('../views/EmployeeView.vue'),
   
    
  },
  
  {
    path: '/Addemploy',
    name: 'AddView',
    component: () => import('../views/AddView.vue')
  },

  {
    path: '/Leave',
    name: 'Leave',
    component: () => import('../views/LeaveView.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: () => import('../views/EditView.vue')
  },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
