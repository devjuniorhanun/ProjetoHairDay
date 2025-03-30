// Pacote para ajustar o caminho do arquivo
const path = require("path");

//Importação do plugin de importação do HTML
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: path.resolve(__dirname, "src", "js", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "scissors.svg"),
    }),
  ],
  module: {
    rules: [
      //Para o bloco abaixo instalei
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules",
      },
      //Para o bloco abaixo instalei
      //npm i babel-loader@9.1.3 @babel/core@7.23.7 @babel/preset-env@7.23.7 --save-dev
      {
        test: /\.js$/i,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
