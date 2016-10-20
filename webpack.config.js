var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'app', 'main.js'),
        vendor: ['react', 'react-dom', 'three']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        // publicPath: path.join(__dirname, '/')
        publicPath: path.join('static')
    },
    externals: {
        THREE: "three"
    },
    resolve: {
        // managing jquery in webpack vendor
        // http://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack
        alias: {
            // jquery: "jquery/src/jquery",
            three: "three/build/three.min.js"
        },
        extensions: [
            '',
            '.js',
            '.json',
            '.css',
            '.jsonp'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss|sass)$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                plugins: ['transform-runtime'],
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.json$/,
                loaders: [
                    "json",
                ]
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                // loader: 'file-loader'
                loader: 'url-loader'
            },
            // {
            //     test: /\.(jpe?g|png|gif)$/i,
            //     loader: 'url?limit=10000!img?progressive=true&name=./imgs/[hash].[ext]'
            // }
            {test: /\.png/, loader: "url-loader?limit=100000&minetype=image/png"},
            {test: /\.jpg/, loader: "file-loader"},
            {
                test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
                loader: "imports?this=>window"
            },
            {
                test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
                loader: "imports?define=>false"
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        //new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./style/style.css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            // $: "jquery",
            // jQuery: "jquery",
            THREE: "three"
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    stats: {
        colors: true
    }
};
