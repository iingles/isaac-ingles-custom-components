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

        <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>

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
      <v-btn block to="/">Dashboard</v-btn>
      <v-btn block to="/servermanagement">Server Management</v-btn>
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
