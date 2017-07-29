var glob = require("glob");

module.exports = {
    entry: {
      js: glob.sync("./src/*.js"),
    },
    output: {
        filename: './build/index.js'
    },
    module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              options: {
                  presets: ['env']
              }
          }
      ],
  },
    watch: true
};
