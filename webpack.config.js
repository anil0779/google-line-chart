const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Manthan Assignment',
            template: './src/templates/index.html'
        })
    ]
}