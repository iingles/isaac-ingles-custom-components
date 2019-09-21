<template>

<!-- Vuetify docs say to include the drawer, app-bar, and app-footer outside 
of 'content'; I think it would be a little too messy to create individual 
components for them -->
  <v-app>
    <v-navigation-drawer 
    app
    fixed
    v-model="drawer"
    >
    </v-navigation-drawer>

    <v-app-bar 
    app
    absolute
    color="indigo darken-4"
    dark
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer;"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Server Management</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <Header 
        :pagetitle='this.pagetitle'
        :pagesubtitle='this.pagesubtitle'
      />
      <MainContent />
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
    drawer: null,
    servers: [
      { 
        name: 'Server One',
        status: 'Good'
      },
      { 
        name: 'Server Two',
        status: 'Running Diagnostics'
      },
      { 
        name: 'Server Three',
        status: 'Optimal'
      },
      { 
        name: 'Server Four',
        status: 'Warning'
      },
      { 
        name: 'Server Five',
        status: 'Error'
      },
    ],
    pagetitle: 'Lorem Ipsum',
    pagesubtitle: 'Dolor sit amet'
  }),
};
</script>
