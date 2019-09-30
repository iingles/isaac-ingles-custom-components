<template>
    <div class="user-info">
        <p>Logged in as: <router-link to="#">Username</router-link></p>
        <v-img 
            class="img-center" 
            src="http://placekitten.com/200/200"
            max-width="200"
            max-height="200"
        ></v-img>
        <p><router-link to="#">Logout</router-link></p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .user-info {
        margin: 10px 0 10px 0;
        padding: 10px;
        text-align: center;
    }
    .img-center {
        margin: 0 auto;
    }
</style>