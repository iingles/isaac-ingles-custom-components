<template>
     <v-row sm-12>
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
                    @click="optimizeServer(server.serverName)"
                >
                    Change Status
                </v-btn>
            </v-card>
        </div>        
    </v-row>
</template>

<script>
import {dataBus} from "../../main"
import ServerList from "./ServerList"

export default {
    components: {
      ServerList
    },
    props: {
        
    },
    data: () => ({
        servers: dataBus.servers
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
        optimizeServer: function(inServer) {
            var vm = this;
            //get an updated list of the servers directly from the source array
            let getServers = dataBus.servers
            //update the global data in dataBus
            for(let i = 0; i < getServers.length; i++) {
                if(getServers[i].serverName == inServer) {
                    if(getServers[i].serverStatus == 'Warning') {
                        getServers[i].serverStatus = 'Optimal'
                    } else { getServers[i].serverStatus = 'Warning' }
                }
            }
        }
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