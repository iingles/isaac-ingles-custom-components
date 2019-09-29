<template>
    <div>
        <v-row class="main-content">
            <router-view></router-view>
        </v-row>
    </div>
</template>

<script>

export default {
    components: {
  
    },
        props: {

    }
}
</script>

<style scoped>
    .main-content {
        padding: 10px 25px;
    }
</style>