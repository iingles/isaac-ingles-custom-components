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

        <v-toolbar-title>{{ thePageTitle }}</v-toolbar-title>

        <div class="flex-grow-1"></div>
        <!-- <v-form v-if="searchInput">
          <v-text-field
            rounded
            placeholder="search"
            single-line
            light
            background-color="white"
            class="search-text"
          >

        </v-text-field>
        </v-form>
        <v-btn 
        icon
        @click.stop="searchInput = !searchInput"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->
        
    </v-app-bar>
      <v-navigation-drawer 
        app
        fixed
        v-model="drawer"
        class="nav-drawer"
      >
        <div v-for="(page, titleKey) in this.pageTitles" :key="titleKey">
          <DrawerButton 
            :buttonText = page
            @buttonClick="changePage(page)"
          />
        </div>

      </v-navigation-drawer>
  </div>
</template>

<script>
import DrawerButton from "./DrawerButton"
import {dataBus} from "../../main"

export default {
  components: {
    DrawerButton
  },
  props: {
      
  },
  data: () => ({
    drawer: null,
    pageTitles: [],
    thePageTitle: '' 
  }),
  created() {
    dataBus.$on('titlesAdded', (pageTitles) => {
      this.pageTitles = pageTitles;
    });
  },
  methods: {
    changePage(pageName) {
      this.thePageTitle = pageName;
      dataBus.$emit('pageChange', pageName);
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 10px 25px;
  }
  .v-form {
    margin-top: 18px;
  }
</style>
