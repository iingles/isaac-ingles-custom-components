import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

//Define where our components are for router
const Dashboard = Vue.component('dashboard', require('./components/Dashboard.vue').default);
const ServerManagement = Vue.component('servermanagemnet', require('./components/ServerManagement.vue').default);

//Map routes
const router = new VueRouter({
  //enable 'history' to get rid of the hash in the URL
  mode: 'history',
  routes: [
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
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
