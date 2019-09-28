<template>
    <v-row>
        Server List
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
                serverMsg: 'Maximum number of connections'
            },
            { 
                serverName: 'Server Five',
                serverStatus: 'Error',
                serverMsg: 'Connection Error'
            },
        ],
    }),
    created: function() {
        //
    }
}
</script>

<style scoped>

</style>