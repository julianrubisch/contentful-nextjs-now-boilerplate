const path = require('path');
const glob = require('glob');
require('dotenv').config();

const webpack = require('webpack');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.s(a|c)ss$/,
        use: ['raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );

    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:..
      }),
    );

    return config;
  }
}