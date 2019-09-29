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
    props: {
        servers: Array
    }
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