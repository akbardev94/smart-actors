module.exports = {
  mode: 'development',
  // devServer: {
  //   proxy: 'https://boss.smartlink.id',
  // },
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  configureWebpack: {
    externals: {
        "@vue/composition-api": "@vue/composition-api",
        "vuex-composition-helpers": "vuex-composition-helpers"
    }
  },
  watchOptions: {
    host: 'localhost',
    poll: true
  },
  // enable HMR
  hot: true,
  hotOnly: true,
}