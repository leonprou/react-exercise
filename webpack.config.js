var path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/containers/App.js'),
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
             test: /\.js?$/,
             exclude: /node_modules/,
             loader: 'babel', // 'babel-loader' is also a legal name to reference
             query: {
               presets: ['react', 'es2015']
             }
          },
          { test: /\.css$/, loader: "style!css" },
          {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
