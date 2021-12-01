const path = require('path');
const yaml = require('yamljs');
const json5 = require('json5');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    module: {
        rules: [
            /*{
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },*/
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.csv$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}