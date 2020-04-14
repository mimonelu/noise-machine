<template>
  <div class="home">
    <h1>Noise Machine</h1>
    <button
      class="form--button"
      @click="play"
    >{{ playButtonLabel }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Audio from '@/assets/scripts/audio'

@Component
export default class HomeView extends Vue {
  audio: Audio = new Audio()

  get playButtonLabel (): string {
    return this.audio.playing ? 'Stop' : 'Play'
  }

  mounted () {
    this.audio.prepare()
  }

  play () {
    if (this.audio.playing) {
      this.audio.stop()
    } else {
      this.audio.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
  user-select: none;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
