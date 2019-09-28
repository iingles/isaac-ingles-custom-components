<template>
     <v-row sm-12>
        <template v-if="showDetails">
            <ServerDetail 
            @hidedetail="this.showDetails = !this.showDetails"
            />
        </template>
        <template v-else>
            <div
                v-for="(server, serverKey) in servers" :key="serverKey"
            >
                <v-card class="server-info">
                    <v-card-title class="server-title">
                        {{ server.serverName }}
                    </v-card-title>
                    <p>Status:<span class="server-status" :class="server.serverStatus">{{ server.serverStatus }}</span></p>
                    <p>Message:<span class="server-message">{{ server.serverMsg }}</span></p>
                    <v-btn
                        @click="refreshServer(server.serverName)"
                    >
                        Refresh
                    </v-btn>
                    <v-btn
                        @click="showDetails = !showDetails"
                    >
                        View Details
                    </v-btn>
                </v-card>
            </div>
        </template>     
    </v-row>
</template>

<script>
import {dataBus} from "../../main"
import ServerDetail from "./ServerDetail.vue"

export default {
    components: {
      ServerDetail
    },
    props: {
        showDetails: false
    },
    data: () => ({
        servers: dataBus.servers,

    }),
    methods: {
        refreshServer: function(inServer) {
            var vm = this;
            //get an updated list of the servers directly from the source array
            let getServers = dataBus.servers
            console.log(inServer)
            for(let i = 0; i < getServers.length; i++) {

                if(getServers.serverName == inServer) {
                    //update this component's server directly from the source
                    vm.servers[i] = getServers[i];                    
                }
            }
        },
    }

}

</script>

<style scoped>
    .server-title {
        margin-bottom: 10px;
        color: #ffffff;
        background: navy;
    }

    .server-info {
        height: 300px;
        padding: 10px;
    }
    .server-status {
        background: #000;
        margin-left: 10px;
        padding: 5px 10px;
        font-weight: bold;
        font-size: 20px;        
    }

    .Optimal {
        color: green;
    }

    .Warning { 
        color: yellow;
    }

    .Error {   
        color: red;
    }

    .server-message {
        margin-left: 10px;
        font-weight: bold;        
    }
</style>