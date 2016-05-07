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
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.sass$/,
                // Passing indentedSyntax query param to node-sass
                loaders: ["style", "css", "sass?indentedSyntax"]
            }
        ]
    }
};