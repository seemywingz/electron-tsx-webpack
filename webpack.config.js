// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ElectronReloadPlugin = require('webpack-electron-reload')({
  path: path.join(__dirname, './dist/main.js'),
});

module.exports = [
  {
    mode: 'development',
    entry: './src/main.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'main.js'
    },
    plugins: [
      ElectronReloadPlugin()
    ],
  },
  {
    mode: 'development',
    entry: './src/react.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'react.js'
    },
    plugins: [
      ElectronReloadPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }
];