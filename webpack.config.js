var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/index.ts',
    mode: "development",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                //exclude: /node_modules/,
                options: {
                   appendTsSuffixTo: [/\.vue$/],

                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader'
                    },
                    esModule: true
                }
            },
             //sass
  {
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      'resolve-url-loader',
      {
        loader: 'sass-loader?indentedSyntax=false',
        options: {
          sourceMap: true
        },
      },
    ],
  },
 // { test: /\.css$/, loader: "style-loader!css-loader?root=." }
        ],
        // loaders: [
        //         { test: /\.vue$/, loader: "vue" }
        //     ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static')
    },
    plugins: [
        // убедитесь что подключили плагин!
        new VueLoaderPlugin()
    ]
};