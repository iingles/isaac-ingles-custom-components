<template>
  <v-app>
    <Header 
      :pagetitle='this.pagetitle'
      :pagesubtitle='this.pagesubtitle'
      :showServerStatus="this.showServerStatus"
      @showServers="this.showServers"
    />
    <v-content>
      <MainContent 
        :servers="this.servers"
        :showServerStatus="this.showServerStatus"
      />
    </v-content>    
    <v-footer
      height="50"
      color="indigo darken-4" 
      dark
    >
    Footer stuff
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header';
import MainContent from './components/MainContent';

export default {
  name: 'App',
  components: {
    Header,
    MainContent
  },
  data: () => ({
    showServerStatus: false,
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
        serverMsg: 'Maximum number of users'
      },
      { 
        serverName: 'Server Five',
        serverStatus: 'Error',
        serverMsg: 'Connection Error'
      },
    ],
    pagetitle: 'Lorem Ipsum',
    pagesubtitle: 'Dolor sit amet'
  }),
  methods: {
    showServers: function() {
      this.showServerStatus = !this.showServerStatus;
    }
  }
};
</script>
