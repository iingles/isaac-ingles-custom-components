<template>
  <v-app>
    <Header  />
    <v-content>
       <MainContent />           
    </v-content>    
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer'
import MainContent from './components/shared/MainContent';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainContent
  },
  data: () => ({
    
  }),
  
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
};
</script>
