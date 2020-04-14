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
    sandStorm(this.$el as HTMLElement, 375, 375, {
      r: [ 0, 16 ],
      g: [ 0, 32 ],
      b: [ 0, 48 ],
      a: [ 255, 255 ],
    }, 48)
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-repeat: repeat;
  height: 100%;
}
</style>
