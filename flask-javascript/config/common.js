// ----------------------------------------------------------------------------
// Original Creator: Martin Angelov
// File Developer: Peter Pak
// Description: Webpack common configuration settings
// ----------------------------------------------------------------------------

// Plugin Imports -------------------------------------------------------------
// ----------------------------------------------------------------------------

// Build Configuration Function -----------------------------------------------
function buildConfig(configDirs) {
  return {
    plugins: [],
    entry: [ '@babel/polyfill', configDirs.APP_DIR ],
    output: {
      path: configDirs.BUILD_DIR,
      publicPath: '',
      filename: '[name].bundle.js',                                             // Outputs as main.bundle.js
      chunkFilename: '[name].bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import'
              ]
            }
          }
        },
        {
          test:/\.scss$/,
          use: [
            { loader: 'style-loader' },                                         // inject CSS to page
            { loader: 'css-loader' },                                           // translates CSS into CommonJS modules
            {
              loader: 'postcss-loader',                                         // Run post css actions
              options: {
                plugins: function () {                        // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            { loader: 'sass-loader' }                                           // compiles Sass to CSS
          ]
        }
      ]
    }
  };
};
// ----------------------------------------------------------------------------

// Module Export --------------------------------------------------------------
module.exports = buildConfig;
// ----------------------------------------------------------------------------
