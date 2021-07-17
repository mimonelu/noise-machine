<template>
  <div class="home">
    <h1>Noise Machine</h1>
    <ul class="range-container">
      <li>
        <h3>Volume</h3>
        <range
          :min="0"
          :max="1.0"
          :step="0.1"
          :value="volume"
          @change="setVolume"
        />
        <span>{{ volume }}</span>
      </li>
      <li>
        <h3>Roughness</h3>
        <range
          :min="1"
          :max="30"
          :step="1"
          :value="roughness"
          @change="setRoughness"
        />
        <span>{{ roughness }}</span>
      </li>
    </ul>
    <button
      class="form--button"
      @click="toggle"
    >{{ playButtonLabel }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Audio from '@/assets/scripts/audio'
import Range from '@/components/Range.vue'

@Component({
  components: {
    Range,
  },
})
export default class HomeView extends Vue {
  audio: Audio = new Audio()

  volume: number = 0.5

  roughness: number = 15

  created () {
    this.loadData()
  }

  loadData () {
    const data = JSON.parse(localStorage.getItem('data') || '{}')
    data.volume = data.volume === undefined ? this.volume : data.volume
    data.roughness = data.roughness === undefined ? this.roughness : data.roughness
    this.setVolume(data.volume)
    this.setRoughness(data.roughness)
  }

  saveData () {
    localStorage.setItem('data', JSON.stringify({
      volume: this.volume,
      roughness: this.roughness,
    }))
  }

  setVolume (value: number) {
    const isDiffer = this.volume !== value
    this.volume = value
    if (isDiffer && this.audio.playing) {
      this.audio.stop()
      this.play()
    }
    this.saveData()
  }

  setRoughness (value: number) {
    const isDiffer = this.roughness !== value
    this.roughness = value
    if (isDiffer && this.audio.playing) {
      this.audio.stop()
      this.play()
    }
    this.saveData()
  }

  get playButtonLabel (): string {
    return this.audio.playing ? 'Stop' : 'Play'
  }

  toggle () {
    if (this.audio.playing) {
      this.audio.stop()
    } else {
      this.play()
    }
  }

  play () {
    this.audio.prepare({
      volume: this.volume,
      roughness: this.roughness,
    })
    this.audio.play()
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-image: radial-gradient(transparent, #000000);
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

  .range-container {
    width: 100%;
    max-width: calc(640px - 2rem);

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
    }

    h3 {
      width: 10rem;
    }

    .range {
      font-size: 2rem;
    }

    span {
      text-align: right;
      width: 5rem;
    }
  }
}
</style>
