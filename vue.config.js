module.exports = {
    //配置css loader
    css: {
        loaderOptions: {
            sass: {
                // sass 版本 9 中使用 additionalData 版本 8 中使用 prependData 旧版本中使用 data
                additionalData: `@import "@/assets/style/main.scss";
                @import "@/assets/style/minxin.scss";`
            }
        }
    },
    // 配置
    chainWebpack: (config) => {
        // 配置别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('router', resolve('src/router'))
            .set('utils', resolve('src/utils'))
            .set('store', resolve('src/store'))
            .set('views', resolve('src/views'))
    },
    // 跨域代理
    devServer: {
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true
            }
        }
    },
    publicPath: './', // 编译后的地址，可以根据环境进行设置
    // lintOnSave: true, // 是否开启编译时是否不符合eslint提示
}