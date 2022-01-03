module.exports = {
    // 在exports中添加，这里很关键，不配置不行,兼容IE
    transpileDependencies: ['element-ui'],
    // 开启eslint代码格式检验
    lintOnSave: true,
    devServer: {
        // true 则热更新，false 则手动刷新，默认值为 true
        inline: false,
        // port: 8888
        // 启动浏览器
        open: true,
        hotOnly: true, // 热更新
        // host: '0.0.0.0' 开放端口
        // 配置代理跨域
        // Proxy : {
        //     '/api': {
        //         target: '',  // 后台接口域名
        //         secure: true, //如果是https接口，需要配在这个参数
        //         changeOrigin: true, //是否跨域 
        //         pathRewrite:{
        //             // '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api' 转接为 http://localhost:8081/
        //             '^/api': '' //需要代理的路径
        //         }
        //     }
        // },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    }
}