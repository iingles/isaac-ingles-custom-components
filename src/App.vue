<template>
  <v-app>
    <Header  />
    <v-content>
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
    
  }),
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
};
</script>
