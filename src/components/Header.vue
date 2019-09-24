<template>
  <div>
    <v-app-bar 
      app
      absolute
      color="indigo darken-4"
      dark
      >
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>{{ pagetitle }}</v-toolbar-title>

        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>
      <v-navigation-drawer 
        app
        fixed
        v-model="drawer"
        class="nav-drawer"
      >
        <v-btn 
        block
        @click="showServers()"
        >
          <template v-if="!showServerStatus">
            Show Server Status
          </template>
          <template v-else>
            Hide Server Status
          </template>        
        </v-btn>
        <v-btn 
          block
          @click="showUsers()" 
        >
          <template v-if="!showUserStatus">
            Show User Status
          </template>
          <template v-else>
            Hide User Status
          </template>        
        </v-btn>
      </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    pagetitle: {
      type: String,
      default: "System Administration"
      //I can also pass functions as props!
    },
    pagesubtitle: String,
    showServerStatus: Boolean,
    showUserStatus: Boolean
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    showServers: function() {
     this.$emit('showServers');
    },
    showUsers: function() {
     this.$emit('showUsers');
     //I can use a second argument to pass data...
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 10px 25px;
  }

 </style>
