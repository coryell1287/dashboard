const webpack = require('karma-webpack');
const webpackConfig = require('./webpack.config');


module.exports = (config) => {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.test.js',
    ],
    preprocessors: {
      'src/appLoader.js': ['webpack', 'sourcemap'],
      'src/**/*.test.js': ['webpack', 'sourcemap'],
    },
    htmlReporter: {
      outputFile: 'tests/test.html',
      pageTitle: 'Dashboard Tests',
      subPageTitle: 'Generic dashboard for aggregating data',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true,
    },

    webpackServer: {
      noInfo: true,
    },

    reporters: ['nyan', 'verbose', 'html'],
    webpack: webpackConfig,

    nyanReporter: {
      suppressErrorHighlighting: true,
      suppressErrorReport: true,
      renderOnRunCompleteOnly: false,
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
  });
};
