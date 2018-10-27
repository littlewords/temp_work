const path = require('path');
module.exports = {
    entry: {
        login: './src/login.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        host:'0.0.0.0'
    }
}