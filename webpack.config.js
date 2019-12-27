const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
//
// module.exports = {
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//         // publicPath: './src/',
//         filename: '[name].[hash].bundle.js'
//     },
//     devServer: {
//         contentBase: './dist',
//     },
//     plugins: [new HtmlWebpackPlugin({
//         title: 'hello world',
//         template: './src/index.html'
//     })],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader'],
//             },
//         ],
//     },
// };
//
//
//
//




module.exports = ({ mode }) => {
    const pathToMainJs = require.resolve("./src/main.js");
    const pathToIndexHtml = require.resolve("./src/index.html");

    return {
        mode,
        entry: [
            pathToMainJs,
            pathToIndexHtml
        ],
        module: {
            rules: [
                {
                    test: pathToIndexHtml,
                    use: [
                        "file-loader",
                        "extract-loader",
                        {
                            loader: "html-loader",
                            options: {
                                attrs: ["img:src", "link:href"]
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "file-loader",
                        "extract-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.jpg$/,
                    use: "file-loader"
                }
            ]
        }
    };
}

