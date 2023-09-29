const path = require("path");
const webpack = require('webpack'); // Import webpack
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const deps = require("./package.json");
const { ModuleFederationPlugin } = require('webpack').container; 

const port = 8080;



module.exports = {
  mode: "development",
  cache: false,
  devtool: "source-map",
  target: "web",
  optimization: {
    minimize: false
  },
  devServer: {
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: `http://localhost:${port}`
  },
  resolve: {
    extensions: [".js", ".vue", ".json",".html"],
    alias: {
      vue: "vue/dist/vue.runtime.esm.js",
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, 'src/assets')
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
    //   {
    //     test: /\.ts$/,
    //     loader: "ts-loader",
    //     options: { appendTsSuffixTo: [/\.vue$/] }
    //   },
      {
        test: /\.css|.sass|.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
            name: "[name].[ext]",
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: [
    
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
        favicon: path.resolve(__dirname, "./public/favicon.ico"),
        template: path.resolve(__dirname, "./public/index.html"),
        chunks: ["main"],
      }),
      new ModuleFederationPlugin({
        name: "micro_main",
        remotes: {
            web_common: "web_common@http://localhost:8082/remoteEntry.js"
          }, 
        shared:{
            vue:{
                eager: true,
                singleton: false,
                requiredVersion: deps.vue
            }
        } 
    })
  ],
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    static: {
      directory: path.join(__dirname, "public")
    },
    compress: true,
    port,
    hot: true,
    webSocketServer: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};