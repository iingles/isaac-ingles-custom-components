<template>
    <v-row>
        <v-card v-for="(server, serverKey) in servers" :key="serverKey">
            {{server.serverName}}
        </v-card>
    </v-row>
</template>

<script>
import {dataBus} from "../../main"

export default {
    props: {
            
    },

    data: () => ({
         
    }),
 }
</script>

<style scoped>

</style>