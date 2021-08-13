<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import sandStorm from '@/assets/scripts/sand-storm'

@Component
export default class App extends Vue {
  mounted () {
    sandStorm(this.$el as HTMLElement, 640, 640, {
      r: [ 0, 24 ],
      g: [ 0, 48 ],
      b: [ 0, 96 ],
      a: [ 255, 255 ],
    }, 16)
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-repeat: repeat;
  height: 100%;
}
</style>
