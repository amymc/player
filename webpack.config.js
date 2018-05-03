const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]--[hash:base64:5]'
                        }
                    }
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-react-jsx', 'react-css-modules']
                    }
              }
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ]
}
