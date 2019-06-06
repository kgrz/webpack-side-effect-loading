const webpack = require('webpack');
const WDSPlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
	entry: './entry-import-from-reexport.js',
	plugins: [
		new WDSPlugin()
	],
	mode: 'production',
	devtool: 'none',
	optimization: {
		runtimeChunk: {
			name: 'manifest'
		}
	}
}
