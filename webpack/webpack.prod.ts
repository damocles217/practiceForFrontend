import { DefinePlugin } from "webpack";
import path from "path";
import { merge } from "webpack-merge";
import common from "./webpack.common";
import dotenv, { config } from "dotenv";
config({
	path: path.join(__dirname, ".env.prod"),
});

module.exports = merge(common, {
	mode: "production",

	plugins: [
		new DefinePlugin({
			"process.env": dotenv.parse,
		}),
	],
});
