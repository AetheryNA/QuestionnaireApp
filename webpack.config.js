module.exports = {
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
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
  };