const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 4200
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    }
};
