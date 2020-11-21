// <script data-ad-client="ca-pub-4328689268449573" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
module.exports = {
    head: {
        script: [
            // {async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', 'data-ad-client': 'ca-pub-4328689268449573'}
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    css: [
        '~/assets/style/global.less'
    ],
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
                    modifyVars: {
                        'primary-color': '#f8cc00', // 全局主色
                        // 'link-color': '#e7a509', // 链接色
                        // 'success-color': '#52c41a', // 成功色
                        // 'warning-color': '#faad14', // 警告色
                        // 'error-color': '#f5222d', // 错误色
                        'font-size-base': '16px', // 主字号
                        // 'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
                        // 'text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
                        // 'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
                        // 'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
                        // 'border-radius-base': '2px', // 组件/浮层圆角
                        // 'border-color-base': '#d9d9d9', // 边框色
                        // 'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影      
                    },
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