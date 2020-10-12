module.exports = {
    build: {
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