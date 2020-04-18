module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/noise-machine/' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/_variables";',
      },
    },
  },
}
