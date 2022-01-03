import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { join } from "path";
import TerserPlugin from "terser-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { Configuration } from "webpack";

const CommonConfig: Configuration = {
	devtool: "eval-cheap-module-source-map",

	entry: {
		filename: "./src/index.tsx",
	},

	output: {
		filename: "[name].bundle.js",
		publicPath: "/",
		chunkFilename: "[id].[hash:8].js",
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new HtmlWebpackPlugin({
			template: join(__dirname, "..", "global", "index.html"),
			// favicon: join(__dirname, "..", "global", "favicon.jpg"),
		}),
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						type: "asset/resource",
						esModule: false,
						emit: true,
					},
				},
			},
		],
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json", ""],
	},

	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
		runtimeChunk: "single",
	},
};

export default CommonConfig;
