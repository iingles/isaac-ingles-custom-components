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
const Dashboard = Vue.component('dashboard', require('./components/Dashboard').default);

const Terminal = Vue.component('terminal', require('./components/Terminal').default);

const ServerManagement = Vue.component('servermanagemnet', require('./components/server_admin/ServerManagement').default);
const ServerDetail = Vue.component('serverdetail', require('./components/server_admin/ServerDetail').default);

//Header Menu
const Settings = Vue.component('settings', require('./components/header_menu/Settings').default);
const HelpDesk = Vue.component('helpdesk', require('./components/header_menu/HelpDesk').default);
const AppHistory = Vue.component('history', require('./components/header_menu/History').default);
const Updates = Vue.component('updates', require('./components/header_menu/Updates').default);
const About = Vue.component('about', require('./components/header_menu/About').default);


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
  { 
    path: '/system', 
    name: 'System',
    component: Dashboard
  },
  { 
    path: '/logs', 
    name: 'Logs',
    component: Dashboard
  },
  { 
    path: '/services', 
    name: 'Services',
    component: Dashboard
  },
  { 
    path: '/accounts', 
    name: 'Accounts',
    component: Dashboard
  },
  { 
    path: '/diagnostics', 
    name: 'Diagnostics',
    component: Dashboard
  },
  { 
    path: '/terminal', 
    name: 'Terminal',
    component: Terminal
  },
  { 
    path: '/settings', 
    name: 'Settings',
    component: Settings
  },
  { 
    path: '/history', 
    name: 'History',
    component: AppHistory
  },
  { 
    path: '/updates', 
    name: 'Updates',
    component: Updates
  },
  { 
    path: '/helpform', 
    name: 'Help Form',
    component: HelpDesk
  },
  { 
    path: '/about', 
    name: 'About',
    component: About
  },
  
]  

export default new VueRouter({
    //enable 'history' to get rid of the hash in the URL
    mode: 'history',
    routes,
});