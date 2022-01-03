import React, { Fragment, useState } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "../pages/Homepage";
import PostPage from "../pages/Postpage";
import NotFoundPage from "../pages/NotFoundpage";
import DashboardPage from "../pages/Dashboardpage";

// Layouts
import Menu from "../layouts/Menu";
import SignupPage from "../pages/Signuppage";
import LoginPage from "../pages/Loginpage";

const App = (): JSX.Element => {
	const [scrolling, setScrolling] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	const [cookies, _] = useCookies();

	return (
		<Fragment>
			<BrowserRouter>
				<Menu />
				{cookies["user_a"] && cookies["user_t"] ? (
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/post/:id" element={<PostPage />} />
						<Route path="/admin" element={<DashboardPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				) : (
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/post/:id" element={<PostPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				)}
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
