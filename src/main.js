import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

//Define where our components are for router
const Dashboard = Vue.component('dashboard', require('./components/Dashboard.vue').default);
const ServerManagement = Vue.component('servermanagemnet', require('./components/ServerManagement.vue').default);


//Routing map
const router = new VueRouter({
  //enable 'history' to get rid of the hash in the URL
  mode: 'history',
  routes: [
    { 
      path: '/', 
      name: 'dashboard',
      component: Dashboard
    },
    { 
      path: '/servermanagement',
      name: 'server_management',
      component: ServerManagement
    },
  ]  
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
