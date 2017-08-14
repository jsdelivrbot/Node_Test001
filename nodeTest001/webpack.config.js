var webpack = require('webpack');


module.exports = {
		devtool:'inline-source-map',
		entry:[ //check to see what "client" is ref-ing. file or folder
			'webpack-hot-middleware/client',
			'./client/client.js'
		],
		output:{
			filename:'./_.dist/bundle.js',
//			filename:require('path').resolve('./_.dist/bundle.js'),
			publicPath:'/'
		},
		plugins:[
			new webpack.optimize.OccurrenceOrderPlugin(),
			new webpack.HotModuleReplacementPlugin(),
//			WARNING in webpack: Using NoErrorsPlugin is deprecated.
//			Use NoEmitOnErrorsPlugin instead.
			new webpack.NoErrorsPlugin()
		],
		module:{
			loaders:[
				{
					test:/\.js$/,
					loader:'babel-loader',
					exclude:/node-modules/,
					query:{
						presets: ['react','es2015','react-hmre']
					}
				}
			]
		}
}