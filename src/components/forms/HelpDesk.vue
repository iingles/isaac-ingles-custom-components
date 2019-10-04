<template>
    <v-container>
        <h1>Contact the Help Desk</h1>
        <v-form>
            <v-row>
                <v-col md="12" sm="12" xs="12">
                    <v-text-field
                    v-model.lazy="userData.firstname"
                    id="firstname"
                    label="First Name"
                    >
                    </v-text-field>
                </v-col>
                <v-col md="12" sm="12" xs="12">
                    <!-- .lazy doesn't read until after the next event; 
                    instead of on every keystroke -->
                    <v-text-field
                    v-model.lazy="userData.lastname"
                    id="lastname"
                    label="Last Name"
                    >
                    </v-text-field>
                </v-col>
                <v-col md="12" sm="12" xs="12">
                    <v-text-field
                    v-model="userData.email"
                    id="email"
                    label="Email"
                    >
                    </v-text-field>
                </v-col>
                <v-col md="12" sm="12" xs="12">
                    <v-textarea
                    label="Please describe your issue"
                    v-model="message"
                    >
                    </v-textarea>
                </v-col>
            </v-row>
        </v-form>
    </v-container>    
</template>

<script>
export default {
    data() {
        return {
            userData: {
                firstname: '',
                lastname: '',
                email:'',
            },
            message: '',
        }
    }
}
</script>

<style scoped>

</style>