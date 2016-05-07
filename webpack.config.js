module.exports = {
    entry: "./src/entry.js",
    output: {
        path:'./public',
        filename: "bundle.js"
    },
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
                test: /\.(png)$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            }            
        ]
    }
};