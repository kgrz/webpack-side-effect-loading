const webpack = require('webpack');

module.exports = {
	entry: './entry-import-directly.js',
	mode: 'production',
	devtool: 'none',
	optimization: {
		runtimeChunk: {
			name: 'manifest'
		}
	}
}
