const webpack = require('webpack');

module.exports = {
  resolve: {
    modules: [webpack.resolve(__dirname,"src"),"node_modules"]
  }
/*
  devServer: {
    disableHostCheck: true
  }
*/
}
