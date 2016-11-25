module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
