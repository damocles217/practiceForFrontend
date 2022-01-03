import { DefinePlugin } from "webpack";
import common from "./webpack.common";
import { merge } from "webpack-merge";
import path from "path";
import dotenv, { config } from "dotenv";
config({
	path: path.join(__dirname, ".env.dev"),
});

module.exports = merge(common, {
	mode: "development",

	plugins: [
		new DefinePlugin({
			"process.env": dotenv.parse,
		}),
	],
});
