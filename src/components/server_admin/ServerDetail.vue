<template>
    <v-row>
        <h1>Server Detail View</h1>
        <v-card>
            Route:{{ $route.params.id }}
        </v-card>
    </v-row>    
</template>

<script>

export default {
    data: () => ({

    }),
}
</script>

<style scoped>

</style>