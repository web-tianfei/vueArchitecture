const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry : {
		main : './src/main.js',
		vendor : ['vue']
	},
	output : {
		path : path.join(__dirname , './'),
		filename : './build/[name].js',
		chunkFilename : './build/[name]_chunk.js',
		publicPath: './',
	},
	resolve:{
		extensions:['.js','.vue','.json','.css'],
		alias : {
			'vue$':'vue/dist/vue.common.js',
			'@assets' : './assets'
		}
	},
	module : {
		rules : [			
	      	{
			    test: /\.vue$/,
			    loader: 'vue-loader',
			    options: {
			        loaders:{
				        css: ExtractTextPlugin.extract({
				            use: 'css-loader',
				            fallback: 'vue-style-loader'
				        })
			        }
			    }
		    },
	      	{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
		    {
		        test: /\.css$/,
		        exclude: /(node_modules|bower_components)/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
	      	},
	      	{
		        test: /\.(png|jpg|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000,
		          name : 'build/images/[hash:8].[name].[ext]',
		          publicPath:'/'
		        }
		    },
		    {
		        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000
		        }
		    },
		    {
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000
		        }
		    }
		]
	},
	plugins:[
		/*将框架代码与业务代码分离*/
		new webpack.optimize.CommonsChunkPlugin({
    		name : 'vendor'
    	}),
    	/*将样式代码与功能代码分离*/
    	new ExtractTextPlugin({
		    filename:'./build/style.css',
		    allChunks:true
	  	}),
    	new HtmlWebpackPlugin({
    		template: './entry.html'
    	})
    ]
}