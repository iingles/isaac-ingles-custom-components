<template>
    <div class="user-info">
        <p>Logged in as: <a href="#">Username</a></p>
        <v-img 
            class="img-center" 
            src="http://placekitten.com/200/200"
            max-width="200"
            max-height="200"
        ></v-img>
        <p><a href="#">Logout</a></p>
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