import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Define our components for router
const Dashboard = Vue.component('dashboard', require('./components/Dashboard.vue').default);
const ServerManagement = Vue.component('servermanagemnet', require('./components/server_admin/ServerManagement.vue').default);

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
      component: ServerManagement
    },
]  

export default new VueRouter({
    //enable 'history' to get rid of the hash in the URL
    mode: 'history',
    routes,
});