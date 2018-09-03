const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const frontend = require('./package');

const yargs = require('yargs');
const { resolve } = require('path');

const args = yargs.argv;

console.log(args.mode);
const isDev = args.mode === 'development';
const isProd = args.mode === 'production';
const environment = args.mode;

const identity = i => i;
const ifDev = then => (isDev ? then : null);
const ifProd = then => (isDev ? null : then);

module.exports = {
  target: 'web',
  profile: true,
  stats: {
    children: false,
  },
  entry: { app: './appLoader.js' },
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
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  resolve: {
    modules: [
      resolve(__dirname, './src'),
      'node_modules',
    ],
    extensions: ['.js', '.json', '.css'],
    alias: {
      actions: resolve(__dirname, './src/actions/'),
      api: resolve(__dirname, 'src/api/'),
      components: resolve(__dirname, './src/components/'),
      containers: resolve(__dirname, 'src/containers/'),
      fonts: resolve(__dirname, './src/fonts/'),
      images: resolve(__dirname, './src/images/'),
      reducers: resolve(__dirname, './src/reducers/'),
      routes: resolve(__dirname, 'src/routes/'),
      store: resolve(__dirname, 'src/store/'),
      styles: resolve(__dirname, './src/styles/'),
      utils: resolve(__dirname, './src/utils/'),
    },
  },
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: isProd ? '/' : '.',
    filename: isDev ? '[name].bundle.js' : '[name].[chunkhash].js',
  },
  optimization: {
    nodeEnv: environment,
    namedModules: true,
    minimizer: [
      ifProd(new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      })),
      ifProd(new OptimizeCSSAssetsPlugin({})),
    ].filter(identity),
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: true },
        },
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 1, import: true },
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              postcssPresetEnv({ browsers: 'last 2 versions' }, autoprefixer({ grid: true })),
            ],
          },
        },
      ],
    }, {
      test: /\.(jpe?g|png|gif|ico)$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: 'images/[name].[hash].[ext]',
          limit: 40000,
          context: './images',
        },
      },
      ],
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: isDev ? '[name].[ext]' : 'fonts/[name].[hash].[ext]',
          useRelativePath: isDev,
        },
      },
      ],
    },
    ],
  },
  plugins: [
    ifProd(new ManifestPlugin({
      fileName: 'manifest.json',
      seed: {
        name: 'Assets Manifest file',
      },
    })),
    ifProd(new CopyWebpackPlugin([
      {
        from: 'fonts/',
        to: './fonts',
      },
      {
        from: 'images/',
        to: './images',
      },
    ])),
    ifProd(new CleanWebpackPlugin(['dist'], { verbose: true })),
    ifDev(new webpack.HotModuleReplacementPlugin()),
    new HtmlWebPackPlugin({
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(isProd),
      'process.env.NODE_ENV': JSON.stringify(environment),
      'process.env': {
        NODE_ENV: JSON.stringify(environment),
        frontend_version: JSON.stringify(frontend.version),
      },
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[name].css' : '[name].[chunkhash].css',
    }),
  ].filter(identity),
};

