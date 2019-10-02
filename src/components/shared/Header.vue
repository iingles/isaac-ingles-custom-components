<template>
  <div>
    <v-app-bar 
      app
      fixed
      color="indigo darken-4"
      dark
      >
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>

        <div class="flex-grow-1"></div>
        <!-- <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        dark
        color="white"
      ></v-text-field> -->
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer 
      app
      fixed
      v-model="drawer"
    >
      <CurrentUserDrawer />
      <v-btn block to="/">Dashboard</v-btn>
      <v-btn block to="/servermanagement">Server Management</v-btn>
      <v-btn block to="/">System</v-btn>
      <v-btn block to="/">Logs</v-btn>
      <v-btn block to="/">Services</v-btn>
      <v-btn block to="/">Accounts</v-btn>
      <v-btn block to="/">Diagnostics</v-btn>
      <v-btn block to="/">Terminal</v-btn>
      <!-- 
        >System
        >Logs
        >Services
        >Accounts
        >Diagnostics
        >Terminal
       -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import CurrentUserDrawer from "./CurrentUserDrawer"

export default {
  components: {
    CurrentUserDrawer
  },
  data: () => ({
    drawer: null
  }),
}
</script>

<style scoped>
  .header {
    padding: 10px 25px;
  }
</style>
