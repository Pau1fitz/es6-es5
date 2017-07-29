module.exports = {
    entry: './src/index.js',
    output: {
        filename: './lib/index.js'
    },
    module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ],
  },
    watch: true
};
