<template>
  <div class="range">
    <div class="range__bar">
      <div class="range__knob" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Range extends Vue {
  @Prop({ default: 0 })
  min!: number

  @Prop({ default: 100 })
  max!: number

  @Prop({ default: 1 })
  step!: number

  @Prop({ default: 0 })
  readonly value!: number

  pseudoValue: number = this.value

  knobNode: HTMLElement | null = null

  inputStarted: boolean = false

  mounted () {
    this.knobNode = this.$el.querySelector('.range__knob')
    if (this.knobNode) {
      this.updateKnobPosition()
      if ('ontouchstart' in window) {
        this.$el.addEventListener('touchstart', this.onInputStart)
        document.body.addEventListener('touchmove', this.onInputMove)
        document.body.addEventListener('touchend', this.onInputEnd)
      } else {
        this.$el.addEventListener('mousedown', this.onInputStart)
        document.body.addEventListener('mousemove', this.onInputMove)
        document.body.addEventListener('mouseup', this.onInputEnd)
      }
      window.addEventListener('resize', this.updateKnobPosition)
    }
  }

  onInputStart (event: Event) {
    this.inputStarted = true
    this.moveKnob(event as TouchEvent)
  }

  onInputMove (event: Event) {
    if (this.inputStarted) {
      this.moveKnob(event as TouchEvent)
    }
  }

  onInputEnd () {
    this.inputStarted = false
  }

  moveKnob (event: TouchEvent) {
    const width = this.$el.clientWidth
    const pageX = ((event.touches ? event.touches[0] : event) as any).pageX
    const box = this.$el.getBoundingClientRect()
    const left = Math.max(0, Math.min(width, pageX - box.left))
    this.pseudoValue = (left / width) * (this.max - this.min) + this.min
    this.updateKnobPosition()
  }

  updateKnobPosition () {
    const width = this.$el.clientWidth
    this.pseudoValue = Math.round(this.pseudoValue / this.step) * this.step
    this.pseudoValue = Number(this.pseudoValue.toFixed((String(this.step).split('.')[1] || '0').length))
    const left = (this.pseudoValue - this.min) / (this.max - this.min) * width
    if (this.knobNode) {
      this.knobNode.style.left = `${left}px`
    }
    this.$emit('change', this.pseudoValue)
  }
}
</script>

<style lang="scss" scoped>
.range {
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 1em;

  &__bar {
    background-color: rgba($app-background-color, 0.75);
    border: 1px solid $app-foreground-color;
    border-radius: 1em;
    position: relative;
    top: calc(50% - 0.125em);
    height: 0.25em;
    transition: all 100ms linear;
  }

  &__knob {
    background-color: rgba($app-background-color, 0.75);
    box-shadow: 0 0 0.25em 1px $app-background-color;
    border: 1px solid $app-foreground-color;
    border-radius: 1em;
    margin-top: calc(-#{(1 / 2) - (0.25 / 2)}em - 1px);
    margin-left: - 0.5em;
    pointer-events: none;
    position: relative;
    width: 1em;
    height: 1em;
    transition: all 100ms linear;
  }

  &:hover &__bar,
  &:hover &__knob {
    border-color: $app-accent-color;
    box-shadow: 0 0 0.25em 1px $app-accent-color;
  }
}
</style>
