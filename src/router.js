/*
  I decided to use Vue Router for this because it 
  just made more sense for what I was trying to do.
  I've never used it before, (I just adapted the router
  tutorials to this project) so if I did something 
  wrong, let me know.
*/


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Define our components for router
const Dashboard = Vue.component('dashboard', require('./components/Dashboard.vue').default);
const ServerManagement = Vue.component('servermanagemnet', require('./components/server_admin/ServerManagement.vue').default);
const ServerDetail = Vue.component('serverdetail', require('./components/server_admin/ServerDetail').default);

//Map routes
const routes = [
  //default path should go to dashboard
  {
    path: '*',
    redirect: '/'
  },
  { 
    path: '/', 
    name: 'Dashboard',
    component: Dashboard
  },
  { 
    path: '/servermanagement',
    name: 'Server Management',
    component: ServerManagement,
    children: [
      { 
        path: '/serverdetail/:id',
        name: 'Server Detail',
        component: ServerDetail
       },
    ]
  },
]  

export default new VueRouter({
    //enable 'history' to get rid of the hash in the URL
    mode: 'history',
    routes,
});