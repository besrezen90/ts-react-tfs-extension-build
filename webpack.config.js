const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: ["babel-polyfill", "./src/index"],
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
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              localIdentName: "[local]--[hash:base64:5]",
              camelCase: "dashes",
              namedExport: "camelCase"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              exec: false,
              plugins: () => [autoprefixer()]
            }
          },
          "less-loader"
        ]
      }
    ]
  }
};
