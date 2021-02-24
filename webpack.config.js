const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin({ filename: './main.css'})],
    entry: './public/javascript/app.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/assets',
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpg)$/,
            loader: 'url-loader'
          },
        ],
      },
      watch: true,
      watchOptions: {
        aggregateTimeout: 600,
        ignored: /node_modules/,
      },
  };