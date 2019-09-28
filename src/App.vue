<template>
  <v-app>
    <Header />
    <v-content>
      <MainContent />
    </v-content>    
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import MainContent from './components/shared/MainContent';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainContent
  },
  data: () => ({
    
    users: [
      {
        userName: 'John Doe',
        Level: 'Administrator'
      },
      {
        userName: 'Jane Dee',
        Level: 'User'
      }
    ], 
    pagetitle:'System Administration',
    pagesubtitle: 'Dolor sit amet'
  }),
  
};
</script>
