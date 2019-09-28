<template>
    <v-container>
        <v-row>
            <v-card class="detail-view">
                <v-card-title class="table-title">Connections</v-card-title>
                <ul>
                    <li v-for="(connection,cKey) in connections" :key="cKey" class="table-row" >
                        <template>
                            {{ cKey + 1 }} : {{ connection.clientName }}
                        </template>
                    </li>
                </ul>
                <v-btn @click="hideDetail()">
                    Hide Details
                </v-btn>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        connections: [
            {clientName: 'localhost'},
            {clientName: '123.456.78.9'},
            {clientName: '234.333.214.1'},
            {clientName: '172.217.11.238'}
        ]
    }),
    methods: {
        hideDetail: function() {
            this.$emit('hidedetail');
        }
    }
}
</script>

<style scoped>
    .table-title {
        margin-bottom: 10px;
        color: #ffffff;
        background: lightseagreen;
    }
    .detail-view {
        width: 100%;
    }
</style>