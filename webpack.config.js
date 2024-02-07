const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle_client.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    watch: true,
};