const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname),
      '@src': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@reducers': path.resolve(__dirname, 'src/reducers')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png)$/,
        exclude: /node-modules/,
        loader: 'file-loader',
        options: {
          outputPath: 'img/'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
        filename: 'app.css',
        chunkFilename: '[id].css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin({})
    ]
}
};
