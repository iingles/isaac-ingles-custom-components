<template>
        <v-container>
            <v-row>
                <v-col md="3" sm='12' xs='12'>
                    <v-row 
                    v-for="server in servers" 
                    :key="server.name"
                    class="mb-10"
                    >
                        <v-card
                            class="server-info"
                            outlined
                            :to="{path:'/serverdetail/' + server.id, serverName: server.serverName}"
                            @click="serverDetail = server"
                        >
                            <v-card-title 
                                primary-title
                                class="server-title"
                            >
                            {{ server.serverName }}
                            </v-card-title>
                            <p>Status:<span class="server-status" :class="server.serverStatus">{{ server.serverStatus }}</span></p>
                            <p>Message:<span class="server-message">{{ server.serverMsg }}</span></p>
                        </v-card>
                    </v-row>
                </v-col>
                <div class="flex-grow-1"></div>
                <v-col md="8" sm="12" xs="12" class="server-detail">
                    <!-- Bind the server data to the ServerDetail prop -->
                    <router-view :server="serverDetail"></router-view>
                </v-col>                                
            </v-row>
        </v-container>
</template>

<script>
//Put the servers info in its own js file; cleaner this way
import servers from '../../assets/servers.js'
export default {
    data: () => ({
        servers: servers,
        serverDetail: [],
    }),
}
</script>

<style scoped>
     .Optimal {
        color: green;
    }

    .Warning {
        color: yellow;
    }

    .Error {
        color: red;
    }
    .server-info {
        width: 100%;
        padding: 10px;
    }
    .server-status {
        background: #000;
        margin: 0 0 0 10px;
        padding: 10px;
        font-size: 20px;
        font-weight: bold
    }
    .server-message {
        font-weight: bold;
    }

    .server-title {
        background: navy;
        color: #fff;
        margin-bottom: 20px;
    }
    .server-detail {
        border-left: 1px solid black;
    }

</style>