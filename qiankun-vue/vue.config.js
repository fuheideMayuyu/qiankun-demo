module.exports = {
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  lintOnSave: false,
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd'
    }
  }
}