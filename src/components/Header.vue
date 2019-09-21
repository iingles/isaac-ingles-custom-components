<template>
<div class="header">
  <v-row>
    <h1>{{ pagetitle }} </h1>
  </v-row>
  <v-row>
    <h3>{{ pagesubtitle }}</h3>
  </v-row>
</div>
</template>

<script>
export default {
  props: {
    pagetitle: String,
    pagesubtitle: String
  },
  data: () => ({
    
  }),
 
}
</script>

<style scoped>
  .header {
    padding: 10px 25px;
  }
</style>
