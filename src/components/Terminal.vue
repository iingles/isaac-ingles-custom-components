<template>
    <v-container>
        <VueTerminal 
            :intro = "intro"
            console-sign="$"
            allow-arbitrary
            height="500px"
            width="100%"
            @command="onCliCommand"
        />
    </v-container>
</template>

<script>
//Got this from https://www.npmjs.com/package/vue-terminal-ui
import VueTerminal from 'vue-terminal-ui'

export default {
    components: {
        VueTerminal
    },
    methods: {
      onCliCommand(data, resolve, reject){
        // typed command is available in data.text
        // don't forget to resolve or reject the Promise
        setTimeout(()=> {
            resolve('')
        }, 300)
      }
    }
}
</script>

<style scoped>

</style>