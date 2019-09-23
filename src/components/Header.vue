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
      >
      <v-btn @click="showServers()">
        <template v-if="!showServerStatus">
          Show Server Status
        </template>
        <template v-else>
          Hide Server Status
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
      Default: 'System Administration'    
    },
    pagesubtitle: String,
    showServerStatus: Boolean
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    showServers: function() {
     this.$emit('showServers');
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 10px 25px;
  }
</style>
