module.exports = {
    build: {
        publicPath: 'https://static.chenrf.com',
        // extend(config, { isDev, isClient }) {
        //     if (isDev && isClient) {
        //         config.module.rules.push({
        //         enforce: "pre",
        //         test: /\.(js|vue)$/,
        //         loader: "eslint-loader",
        //         exclude: /(node_modules)/,
        //         });
        //     }
        // },
        extractCSS: true,
        loaders: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        },
        babel: {
            plugins: [
                [
                    'import',
                    {
                        libraryName: 'ant-design-vue',
                        libraryDirectory: 'es',
                        style: true,
                    }
                ]
            ]
        },
        transpile: [/ant-design-vue/],
    }
}