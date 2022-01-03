import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Menu = (): JSX.Element => {
	return (
		<Fragment>
			<div id="menu">
				<div></div>
				<nav id="drop-menu">
					<Link to="/" className="menu-button">
						Inicio
					</Link>
				</nav>
			</div>
		</Fragment>
	);
};

export default Menu;
