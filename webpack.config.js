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
  plugins:[
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"index.html"),
    }),
  ]
};
