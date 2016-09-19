var path = require('path');
var webpack = require('webpack');
var OptimizeJsPlugin = require('../index.js');

module.exports = {
	entry: path.join(__dirname, 'index.js'),
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new OptimizeJsPlugin({
            sourceMap: true
        })
    ]
};
