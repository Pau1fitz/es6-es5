module.exports = {
    entry: './src/index.js',
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
                  presets: ['es2015'],
                  plugins:['transform-object-rest-spread']
              }
          }
      ],
  },
    watch: true
};
