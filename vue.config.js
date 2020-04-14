module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/noise-machine/'
    : '/'
}
