const path = require('path')
const webpack = require('webpack')
const Visualizer = require('webpack-visualizer-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let plugins = [
    new ExtractTextPlugin({
        filename: getPath => getPath('[name].css').replace('js.css', 'min.css'),
        allChunks: true
    })
]
if (process.env.NODE_ENV === 'development') {
    plugins.push(new Visualizer({
        filename: './statistics.html'
    }))
}

module.exports = {
    entry: {
        'app.js': './src/client/app.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name]',
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                loaders: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false&minimize=true', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false&minimize=true']
                })
            },
            {
                test: /.html$/,
                loaders: ['raw-loader']
            },
        ]
    },
    plugins: plugins,
}
