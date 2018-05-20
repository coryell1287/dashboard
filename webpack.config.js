const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const yargs = require('yargs');
const { resolve } = require('path');

const args = yargs.argv;

console.log(args.mode);
const isDev = args.mode === 'development';
const environment = args.mode;

const prodPlugins = [
  new ManifestPlugin({
    fileName: 'manifest.json',
    seed: {
      name: 'Assets Manifest file',
    },
  }),
  new CopyWebpackPlugin([
    { from: 'fonts/', to: './fonts' },
    { from: 'images/', to: './images' },
  ]),
  new CleanWebpackPlugin(['dist'], { verbose: true })
];
const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];
const whichPlugins = () => (isDev ? devPlugins : prodPlugins);
const plugins = whichPlugins();
const ifProd = then => (isDev ? null : then);
const identifyPlugins = plugin => plugin;
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
    overlay: { warnings: true, errors: true },
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
    publicPath: isDev ? '/' : '',
    filename: isDev ? '[name].bundle.js' : '[name].[hash].js',
  },
  optimization: {
    nodeEnv: environment,
    namedModules: true,
    minimizer: [
     ifProd( new UglifyJsPlugin({
       cache: true,
       parallel: true,
       sourceMap: true, // set to true if you want JS source maps
     })),
      ifProd(new OptimizeCSSAssetsPlugin({})),
    ].filter(identifyPlugins),
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
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
            useRelativePath: !isDev,
          },
        },
        ],
      },
    ],
  },
  plugins: [
    ...plugins,
    new HtmlWebPackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[name].css' : '[name].[chunkhash].css',
    }),
  ],
};

