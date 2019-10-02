<template>
    <div class="card-row">
        <h1>Dashboard</h1>
        <v-row>
            <v-col lg="12" md="12" sm="12" xs="12">
                <v-card >
                    <v-card-title>Statistics</v-card-title>
                    <v-container fluid>
                        <v-sparkline
                            :key="100"
                            :smooth="16"
                            :color="black"
                            :line-width="1"
                            :value=[25,2,15,77,35,4,55,25,43,55,34]
                            height='75'
                            auto-draw
                            stroke-linecap="round"
                        >
                        </v-sparkline>
                        <v-divider></v-divider>
                        <v-sparkline
                            :key="100"
                            :smooth="16"
                            :color="'#0000ff'"
                            :line-width="1"
                            :value=[55,75,4,1,35,11,25,22,77,20,103]
                            height='75'
                            auto-draw
                            stroke-linecap="round"
                        >
                        </v-sparkline>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-card>
                <v-card-title>Alerts</v-card-title>
            </v-card>
        </v-row>
        <v-row>
             <v-card>
                <v-card-title>Logs</v-card-title>
            </v-card>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .card-row {
        width: 100%;
    }

</style>