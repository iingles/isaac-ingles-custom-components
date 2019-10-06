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
/*
    Got this plugin from https://www.npmjs.com/package/vue-terminal-ui
    Still need to figure out how to actually make this functional; right
    now it doesn't do anything but look like it can do things.
*/
import VueTerminal from 'vue-terminal-ui'

export default {
    components: {
        VueTerminal
    },
    props: {
        intro: "Lorem Ipsom Dolor Sit Amet..."
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