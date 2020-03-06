const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');

const gitCommit = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()
  .slice(0, 7);

let entry = {};
let htmlFiles = [];

/**************** OUTPUT (aka build) DIRECTORY ***************** */
const outputDir = 'public';

/**************** FILES TO BE COMPRESSED ***************** */
// COMPRESS A GIVEN LIST OF FILES
/*
entry = {
  // List all js/css/scss you want compressed
  page1: './js/page1.js',
  page2: './js/page2.js',
  myStyles: ['./scss/main.scss', './scss/body.scss']
};
*/
// COMPRESS ALL FILES IN A DIRECTORY
// If you want Webpack to automatically compress all files in a directory uncomment the following code:

const glob = require('glob');
const setEntry = fileArray => {
  return fileArray.reduce((entryObj, file) => {
    let fileName = path.parse(file).name.split('.');
    entryObj[fileName] = file;
    return entryObj;
  }, {});
};

const files = glob.sync('./pug/assets/javascripts/*.js'); // be sure to change the directory and extension
entry = setEntry(files);

// If you have other directories you want to include,  follow this pattern

const cssFiles = glob.sync('./pug/assets/css/*.scss'); // be sure to change the directory and extension
const entryCSS = setEntry(cssFiles);
entry = Object.assign(entry, entryCSS);

/* ****************************************** */

/**************** HTML FILES/INCLUDES TO BE UPDATED ***************** */
// The following is a list of files that should have the html/css paths updated

//htmlFiles = ['./page1.html', './page2.html'];

/* ****************************************** */

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 8080
  },
  //context: __dirname,

  entry: entry, //see  FILES TO BE COMPRESSED above.  Be sure to comment out the entry list above.

  output: {
    path: path.resolve(__dirname, outputDir),
    filename: `assets/javascripts/[name].min.js`
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  devtool: '#source-map',
  // performance: { hints: false },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[id].${gitCommit}.css`,
      allChunks: true
    }),

    new EventHooksPlugin({
      done: () => {
        dir = execSync('npm run buildPug', (err, stdout, stderr) => {
          console.log(stdout);
        });
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  }
};

/*
var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 8080
  }
};
*/
