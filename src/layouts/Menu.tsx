import React, { Fragment } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Menu = (): JSX.Element => {
	const [cookies, , removeCookie] = useCookies();

	return (
		<Fragment>
			<div id="menu">
				<div></div>
				<nav id="drop-menu">
					<Link to="/" className="menu-button">
						Inicio
					</Link>
					{cookies.user_a && cookies.user_t && (
						<button
							className="menu-button"
							onClick={(e) => {
								console.log("jola");
								removeCookie("user_a");
								removeCookie("user_t");
							}}
						>
							Salir
						</button>
					)}
				</nav>
			</div>
		</Fragment>
	);
};

export default Menu;
