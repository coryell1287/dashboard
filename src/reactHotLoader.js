module.exports = process.env.NODE_ENV === 'production'
  ? require('react-hot-loader/lib/AppContainer.prod')
  : require('react-hot-loader/lib/AppContainer.dev');
