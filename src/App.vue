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
import MainContent from './components/shared/MainContent';
import Footer from './components/shared/Footer'

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
