const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ... other webpack configuration options
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify")
    }
  }
};
