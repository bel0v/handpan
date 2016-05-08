var webpack = require('webpack');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path:'./public',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                  plugins: ['transform-decorators-legacy'],
                  presets: ['react', 'es2015', 'stage-1', 'stage-0']
                }
            },
            {
                test: /\.sass$/,
                // Passing indentedSyntax query param to node-sass
                loaders: ["style", "css", "sass?indentedSyntax"]
            },
            {
                test: /\.(less)$/,
                loader: "style!css!less"
            },            
            {
                test: /\.(png)$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },            
            {
                test: /\.(svg)$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
            { test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[ext]'},                        
        ]
    }
};