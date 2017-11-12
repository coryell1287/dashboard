const path = require('path');

module.exports = (config) => {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests/client/**/*.test.js',
    ],

    preprocessors: {
      'src/appLoader.js': ['webpack', 'sourcemap'],
      'tests/client/**/*.test.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              plugins: ['transform-decorators-legacy', 'transform-regenerator'],
              presets: ['react', 'airbnb', 'es2017', 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
            },
          },
          {
            test: /\.css/,
            loader: 'style-loader',
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
        ],
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
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
