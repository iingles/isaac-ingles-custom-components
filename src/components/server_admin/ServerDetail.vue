<template>
    <v-container>
        <v-row>
            <v-col md="8" sm="12" xs="12">
            <h1>Server Detail</h1>
                <v-card>
                    <!-- 
                        Grab the id from the URL and set the current server 
                        There's probably a better way of doing this.
                    -->
                    {{ setCurrentServer() }}              
                    <v-card-title> 
                        {{ currentServer.serverName }}
                    </v-card-title>
                    <p>{{ currentServer.serverStatus }}</p>
                    <h3>Connections to {{ currentServer.serverName }}</h3>
                    <ul>
                        <li v-for="(connection, cKey) in currentServer.connections" :key="cKey">
                            {{ connection }}
                        </li>
                    </ul>
                </v-card>
             </v-col>
        </v-row>
    </v-container>
</template>

<script>
import servers from '../../assets/servers.js'

export default {
    data: () => ({
        currentServer: [],
        currentId: ''
    }),
    methods: {
        setCurrentServer: function() {
            let vm = this
            for(let i = 0; i < servers.length; i++) {
                if(servers[i].id == vm.$route.params.id) {
                    vm.currentServer = servers[i]
                    vm.currentId = vm.$route.params.id
                    break;
                }
            }
        }
    }
}
</script>

<style scoped>

</style>