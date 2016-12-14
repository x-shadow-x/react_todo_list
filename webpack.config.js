var path = require('path');

module.exports = {
	entry: './src/entry.js',
	output: {
		path: path.join(__dirname, 'out'),
		publicPath: './out/',
		filename: 'bundle.js'
	},
	//这个属性是告诉webpack当遇到require('react')的时候，不去处理并且默认为全局的React变量。这样子，我们就需要在index.html单独用src去加载js
	externals: {
		'react': 'React'
	},
	module: {
		loaders: [{
				test: /\.(js|jsx)$/,
				loader: "jsx!babel",
				include: /src/
			}, {
				test: /\.css$/,
				loader: "style!css"
			}, {
				test: /\.scss$/,
				loader: "style!css!sass"
			},
			//图片文件使用 url-loader 来处理，小于8kb的直接转为base64
			{
				test: /\.(jpg|png|gif)$/,
				loader: "url?limit=8192"
			}
		]
	}
}