<template>
    <div>
        <v-row class="main-content">
            <ServerManagement 
                v-if="showServerStatus"
                :servers="this.servers"
            />
            <Users 
                v-if="showUserStatus"
            />
        </v-row>
    </div>
</template>

<script>
import ServerManagement from './ServerManagement'
import Users from './Users'

export default {
    components: {
        ServerManagement,
        Users
    },
        props: {
        servers: Array,
        showServerStatus: Boolean,
        showUserStatus: Boolean
    },
    watch: {
        showServerStatus: function() {
            if(this.showServerStatus) {
                this.$emit('serverStatus');
            }
        },
        showUserStatus: function() {
            if(this.showUserStatus) {
                 this.$emit('userStatus'); 
            }
        }
    }

}
</script>

<style scoped>
    .main-content {
        padding: 10px 25px;
    }
</style>