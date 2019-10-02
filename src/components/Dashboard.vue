<template>
    <div class="card-row">
        <h1>Dashboard</h1>
        <v-row>
            <v-col lg="12" md="12" sm="12" xs="12">
                <v-card >
                    <v-card-title class="card-title">Statistics</v-card-title>
                    <v-container fluid>
                        <v-sparkline
                            :key="25"
                            :smooth="16"
                            :color="black"
                            :line-width="1"
                            :value=[25,2,15,77,35,4,55,25,43,55,34,10,1,22,1,0,25,]
                            width="100"
                            height="50"
                            auto-draw
                            stroke-linecap="round"
                            
                        >
                        </v-sparkline>
                        <v-divider></v-divider>
                        <v-sparkline
                            :key="25"
                            :smooth="16"
                            :color="'#0000ff'"
                            :line-width="1"
                            :value=[1,5,4,1,25,10,1,22,1,0,25,1,15,1,10,1,25,14,20,10,22,25]
                            width="100"
                            height='25'
                            auto-draw
                            stroke-linecap="round"
                        >
                        </v-sparkline>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-card class="card-title">
                <v-card-title>Alerts</v-card-title>
            </v-card>
        </v-row>
        <v-row>
             <v-card class="card-title">
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
    .card-title {
        background: navy;
        color: #fff;
    }
    .card-row {
        width: 100%;
    }

</style>