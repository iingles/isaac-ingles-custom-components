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
      <router-link to="/">Dashboard</router-link>    
      <router-link to="/servermanagement">Server Management</router-link>    
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
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
