var config = {
	"entry":"./src/js/index.js",
	"output":{
		filename:"bundle.js",
		path:__dirname
	},
	"module": {
		"loaders": [
			{
				"test": /\.js$/,
				"loaders": ['babel']
			},
			{
				"test": /\.scss$/,
				"loaders": ['style', 'css', 'sass']
			},
			{
				"test": /\.json$/,
				"loaders": ['json']
			}
		]
	}
}

module.exports = config;
