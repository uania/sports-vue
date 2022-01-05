
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/test/ugtest' : '/',
  
    // 在exports中添加，这里很关键，不配置不行
    transpileDependencies: ['element-ui'],
    chainWebpack (config) {
      // 在chainWebpack中添加下面的代码
      config.entry('main').add('babel-polyfill') // main是入口js文件
    },
    devServer: {
      open: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      proxy: {
        '/api ': {
          target: 'http://local.com:7008/api/',
          secure: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/api'
          }
        }
      }
    }
  }
  