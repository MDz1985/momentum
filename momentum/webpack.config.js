const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'main.js',
    },
    devServer: {
        compress: true,
        port: 3000,
    },
};