// <script data-ad-client="ca-pub-4328689268449573" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
module.exports = {
    head: {
        script: [
            // {async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', 'data-ad-client': 'ca-pub-4328689268449573'}
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
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
        extractCSS: false,
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