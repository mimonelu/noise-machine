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
      r: [ 16, 16 ],
      g: [ 16, 64 ],
      b: [ 16, 128 ],
      a: [ 255, 255 ],
    }, 8)
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-repeat: repeat;
  height: 100%;
}
</style>
