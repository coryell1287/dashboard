const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const identity = i => i;

module.exports = (env) => {

  const isDev = env === 'dev';
  const isProd = env !== 'dev';

  const ifEnv = (condition1, condition2) => (isDev ? condition1 : condition2);

  const ifDev = then => (isDev ? then : null);
  const ifProd = then => (env === 'prod' ? then : null);
  const vendor = [
    'axios',
    'react',
    'redux',
    'lodash',
    'es5-shim',
    'es6-shim',
    'react-dom',
    'react-redux',
    'redux-thunk',
    'react-router',
    'react-helmet',
    'core-decorators',
    'react-router-dom',
    'redux-async-await',
    'autobind-decorator',
    'connected-react-router',
    'react-addons-transition-group',
  ];
  const app = [
    ifDev('react-hot-loader/patch'),
    ifDev('webpack-dev-server/client?http://localhost:8000'),
    ifDev('webpack/hot/only-dev-server'),
    './appLoader'].filter(identity);

  return {
    target: 'web',
    profile: true,
    stats: {
      children: false,
    },
    entry: { vendor, app },
    performance: { maxEntrypointSize: 400000 },
    context: resolve(__dirname, './src'),
    devtool: 'source-map',
    devServer: {
      port: 8000,
      host: 'localhost',
      stats: 'errors-only',
      hot: true,
      compress: true,
      historyApiFallback: true,
      disableHostCheck: true,
      contentBase: resolve(__dirname, './dist'),
      overlay: { warnings: true, errors: true },
    },
    resolve: {
      modules: [
        resolve(__dirname, './src'),
        'node_modules',
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css'],
      alias: {
        actions: resolve(__dirname, './src/actions/'),
        api: resolve(__dirname, 'src/api/'),
        components: resolve(__dirname, './src/components/'),
        containers: resolve(__dirname, 'src/containers/'),
        reducers: resolve(__dirname, './src/reducers/'),
        images: resolve(__dirname, './src/images/'),
        fonts: resolve(__dirname, './src/fonts/'),
        routes: resolve(__dirname, 'src/routes/'),
        stores: resolve(__dirname, 'src/stores/'),
        styles: resolve(__dirname, './src/styles/'),
      },
    },
    output: {
      publicPath: '',
      path: resolve(__dirname, './dist'),
      filename: ifEnv('[name].bundle.js', '[name].[chunkhash].js'),
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor'],
        minChunks: Infinity,
      }),
      ifProd(new webpack.optimize.UglifyJsPlugin()),
      ifProd(new CleanWebpackPlugin(['dist'], { verbose: true })),
      ifProd(new CopyWebpackPlugin([
        { from: 'fonts/', to: './fonts' },
        { from: 'images/', to: './images' },
      ])),
      new webpack.EnvironmentPlugin({
        DEBUG: isDev,
        NODE_ENV: ifEnv('development', 'production'),
      }),
      ifProd(new ManifestPlugin({
        fileName: 'manifest.json',
        seed: {
          name: 'Assets Manifest file',
        },
      })),
      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: true,
        minify: {
          collapseWhitespace: true,
        },
      }),
      ifDev(new webpack.HotModuleReplacementPlugin()),
      ifDev(new webpack.NamedModulesPlugin()),
      new ExtractTextPlugin({
        filename: ifEnv('[name].bundle.[contenthash].css', 'styles/[name].bundle.[contenthash].css'),
        disable: isDev,
      }),
    ].filter(identity),
    module: {
      rules: [{
        use: 'babel-loader',
        test: /\.jsx?$/,
        include: [resolve(__dirname, './src')],
      }, {
        test: /\.(sass|scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev,
                importLoaders: 1,
                modules: true,
                url: true,
                minimize: isDev ? false : { discardComments: { removeAll: true } },
              },
            },
            { loader: 'postcss-loader' },
          ],
        }),
      }, {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'images/[name].[ext]',
            limit: 40000,
            context: './images',
          },
        },
        ],
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            useRelativePath: isProd,
          },
        },
        ],
      },
      ],
    },
  };
};
