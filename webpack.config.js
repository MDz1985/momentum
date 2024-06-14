const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'main.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
            watch: true
        },
        compress: true,
        port: 3000,
    },
};
