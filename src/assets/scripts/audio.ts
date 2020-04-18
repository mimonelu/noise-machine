const frandom = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

export default class {
  context: AudioContext

  buffer: AudioBuffer | null = null

  source: AudioBufferSourceNode | null = null

  playing: boolean = false

  constructor () {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    this.context = new AudioContext()

    // WebKit ではユーザージェスチャーのイベントリスナー内でこれが必要
    // SEE: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    window.addEventListener('mousedown', () => {
      if (this.context.state !== 'running') {
        this.context.resume().then(() => { /**/ })
      }
    }, false)
  }

  prepare (options: any) {
    const scale: number = 2
    const rate: number = 48000
    const seconds: number = 10.0 * scale
    this.buffer = this.context.createBuffer(1, rate * seconds, rate)
    const channelData: Float32Array = this.buffer.getChannelData(0)
    for (let i = 0, j = 0, jj = 0, ii = channelData.length; i < ii; i ++) {
      const v0: number = i / ii * Math.PI
      const v1: number = Math.sin(v0 * 4 * scale) * 0.1 + 0.9
      const v2: number = Math.sin(v0 * 3 * scale) * 0.1 + 0.9
      if ((i % options.roughness) === 0) {
        jj = frandom(- 0.25, 0.25) * v2
      }
      j += jj * v1
      j = Math.max(- 1.0, Math.min(1.0, j))
      channelData[i] = j * options.volume
    }
  }

  play () {
    if (!this.playing) {
      this.source = this.context.createBufferSource()
      this.source.buffer = this.buffer
      this.source.loop = true
      this.source.connect(this.context.destination)
      this.source.start(this.context.currentTime)
      this.playing = true
    }
  }

  stop () {
    if (this.source && this.playing) {
      this.source.stop()
      this.playing = false
    }
  }
}
