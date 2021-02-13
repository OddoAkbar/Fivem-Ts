module.exports = {
    entry: { 
        client: "./src/client.ts",
        server: "./src/server.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    }, 
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    }
}