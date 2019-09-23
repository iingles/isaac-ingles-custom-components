<template>
    <div>
        <v-row class="main-content">
            <ServerManagement 
                v-if="showServerStatus"
                :servers="this.servers"
            />
        </v-row>
    </div>
</template>

<script>
import ServerManagement from './ServerManagement'

export default {
    components: {
        ServerManagement
    },
        props: {
        servers: Array,
        showServerStatus: Boolean
    },

}
</script>

<style scoped>
    .main-content {
        padding: 10px 25px;
    }
</style>