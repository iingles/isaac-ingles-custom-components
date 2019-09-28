<template>
     <v-row>
        <v-col sm-1 
            v-for="(server, serverKey) in servers" :key="serverKey"
        >
            <v-card class="server-info">
                <v-card-title class="server-title">
                    {{ server.serverName }}
                </v-card-title>
                <p>Status:<span class="server-status" :class="server.serverStatus">{{ server.serverStatus }}</span></p>
                <p>Message:<span class="server-message">{{ server.serverMsg }}</span></p>
            </v-card>
        </v-col>        
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
    created() {
        dataBus.$on('createdList', (servers) => {
        this.servers = servers;
        console.log(this.servers);
    });
    },

}

</script>

<style scoped>
    .server-title {
        margin-bottom: 10px;
        color: #ffffff;
        background: navy;
    }

    .server-info {
        min-height: 300px;
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