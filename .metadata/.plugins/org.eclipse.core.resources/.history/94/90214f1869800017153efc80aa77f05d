module.exports = {
		entry:['./client/client.js'],
		output:{
			filename:'./_.dist/bundle.js',
			publicPath:'/'
		},
		module:{
			loaders:[
				{
					test:/\.js$/,
					loader:'babel-loader',
					exclude:/node-modules/,
					query:{
						presets: ['react','es2015']
					}
				}
			]
		}
}