import { render } from "react-dom";
import { CookiesProvider } from "react-cookie";
import * as React from "react";

import App from "./components/App";

import "./sass/main.scss";
// TODO import "./assets/fonts/style.css";

render(
	<CookiesProvider>
		<App />
	</CookiesProvider>,
	document.querySelector("#main")
);
