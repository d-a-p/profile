const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    output: {
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options:{minimize:true}
                }]
            },
            {
                test: /\.s?css$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },{
		        test: /\.(png|jpg)$/,
		        use: [{
			        loader: 'url-loader',
			        options: {
				        limit: 10000000,
				        fallback: 'file-loader'
			        }
                }]
	        },{
		        test: /\.svg$/,
		        use: {
			        loader: 'svg-sprite-loader'
		        }
	        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
            }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
            })
    ]
};
