<template>
    <v-container>
        <v-row>
            <v-col md="8" sm="12" xs="12">
            <h1>Server Detail</h1>
                <v-card>
                    <!-- Use the information passed into the server prop -->
                    <v-card-title> 
                        {{ server.serverName }}
                    </v-card-title>
                    <p>{{ server.serverStatus }}</p>
                    <h3>Connections to {{ server.serverName }}</h3>
                    <ul>
                        <li v-for="(connection, cKey) in server.connections" :key="cKey">
                            {{ connection }}
                        </li>
                    </ul>
                </v-card>
             </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        server: {}
    },
    data: () => ({
        id: ''
    }),
    created() {
       this.id = this.$route.params.id
    }
}
</script>

<style scoped>

</style>