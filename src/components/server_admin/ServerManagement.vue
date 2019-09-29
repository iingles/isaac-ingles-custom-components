<template>
     <v-row>
        <v-col
            v-for="(server, serverKey) in servers" :key="serverKey"
        >
            <v-card class="server-info">
                <v-card-title class="server-title">{{ server.serverName }}</v-card-title>
                <p>Status:<span class="server-status" :class="server.serverStatus">{{ server.serverStatus }}</span></p>
                <p>Message:<span class="server-message">{{ server.serverMsg }}</span></p>
            </v-card>
        </v-col>        
    </v-row>
</template>

<script>
export default {
    data: () => ({
        servers: [
            { 
                serverName: 'Server One',
                serverStatus: 'Optimal',
                serverMsg: 'No Messages'
            },
            { 
                serverName: 'Server Two',
                serverStatus: 'Warning',
                serverMsg: 'Running Diagnostics'
            },
            { 
                serverName: 'Server Three',
                serverStatus: 'Optimal',
                serverMsg: 'No Messages'
            },
            { 
                serverName: 'Server Four',
                serverStatus: 'Warning',
                serverMsg: 'Maximum number of users'
            },
            { 
                serverName: 'Server Five',
                serverStatus: 'Error',
                serverMsg: 'Connection Error'
            },
        ],
    })
}
</script>

<style scoped>
    .server-info {
        padding: 10px;
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
    .server-status {
        background: #000;
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
</style>