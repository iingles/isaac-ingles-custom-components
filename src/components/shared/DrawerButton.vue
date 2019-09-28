<template>
    <v-btn
        block
        @click="buttonClick"
    >
        {{ buttonText }}
    </v-btn>
</template>

<script>
export default {
    props: {
        buttonText: String
    },
    methods: {
        buttonClick() {
            this.$emit('buttonClick');
        }
    }
}
</script>

<style scoped>
    
</style>