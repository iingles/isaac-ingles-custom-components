<template>
     <v-row>
        <v-col
            v-for="(server, serverKey) in servers" :key="serverKey"
        >
            <v-card>
                <v-card-title>
                    {{ server.serverName }}
                </v-card-title>
                <p>Status:<span :class="server.serverStatus">{{ server.serverStatus }}</span></p>
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
        font-weight: bold;
    }
</style>