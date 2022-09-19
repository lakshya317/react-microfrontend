const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/build'), // the bundle output path
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                app1: 'app1@http://localhost:3001/remoteEntry.js',
                app2: 'app2@http://localhost:3002/remoteEntry.js'
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies['react']
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: dependencies['react-dom']
                }
            }
        })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: 'url-loader',
                options: { limit: false }
            }
        ]
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};
