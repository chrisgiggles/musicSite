var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './client/app.js'
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loaders: ['babel']
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};