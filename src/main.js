import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

export const dataBus = new Vue({
  data: {
    servers: [
      { 
          serverName: 'Server One',
          serverStatus: 'Optimal',
          serverMsg: 'No Messages'
      },
      { 
          serverName: 'Server Two',
          serverStatus: 'Warning',
          serverMsg: 'Running Diagnostics'
      },
      { 
          serverName: 'Server Three',
          serverStatus: 'Optimal',
          serverMsg: 'No Messages'
      },
      { 
          serverName: 'Server Four',
          serverStatus: 'Warning',
          serverMsg: 'Maximum number of connections'
      },
      { 
          serverName: 'Server Five',
          serverStatus: 'Error',
          serverMsg: 'Connection Error'
      },
  ],
  }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
