<template>
  <v-app>
    <Header 
      @showServers="this.showServers"
      @showUsers="this.showUserStatus = $event"
      :pagetitle='this.pagetitle'
      :pagesubtitle='this.pagesubtitle'
      :showServerStatus="this.showServerStatus"
      :showUserStatus="this.showUserStatus"     
    />
    <!-- I can recieve the emitted data by doing 'data = $event' -->
    <v-content>
      <MainContent 
        :servers="this.servers"
        :showServerStatus="this.showServerStatus"
        :showUserStatus="this.showUserStatus"
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
    showUserStatus: false,
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
    users: [
      {
        userName: 'John Doe',
        Level: 'Administrator'
      },
      {
        userName: 'Jane Dee',
        Level: 'User'
      }
    ], 
    pagetitle:'System Administration',
    pagesubtitle: 'Dolor sit amet'
  }),
  methods: {
    showServers: function() {
      this.pagetitle = !this.showServerStatus ? 'Server Management' : 'System Administration';
      this.showServerStatus = !this.showServerStatus;
    },
    showUsers: function() {
      //this.pagetitle = !this.showUserStatus ? 'User Management' : 'System Administration';
      //this.showUserStatus = !this.showUserStatus;
    }
  }
};
</script>
