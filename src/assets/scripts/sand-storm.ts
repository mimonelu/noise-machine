const irandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

export default function (target: HTMLElement, width: number, height: number, color: any, enlarge: number) {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', width.toString())
  canvas.setAttribute('height', height.toString())
  const context = canvas.getContext('2d')
  if (context) {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
    const c: any = {
      r: irandom(color.r[0], color.r[1]),
      g: irandom(color.g[0], color.g[1]),
      b: irandom(color.b[0], color.b[1]),
      a: irandom(color.a[0], color.a[1]),
    }
    for (let y = 0; y < imageData.height; y ++) {
      for (let x = 0; x < imageData.width; x ++) {
        const index = (imageData.width * y + x) * 4
        if (irandom(0, enlarge) === 0) {
          c.r = irandom(color.r[0], color.r[1])
          c.g = irandom(color.g[0], color.g[1])
          c.b = irandom(color.b[0], color.b[1])
          c.a = irandom(color.a[0], color.a[1])
        }
        imageData.data[index] = c.r
        imageData.data[index + 1] = c.g
        imageData.data[index + 2] = c.b
        imageData.data[index + 3] = c.a
      }
    }
    context.putImageData(imageData, 0, 0, 0, 0, canvas.width, canvas.height)
    target.style.backgroundImage = `url(${canvas.toDataURL()})`
  }
}
