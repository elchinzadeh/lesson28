const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}