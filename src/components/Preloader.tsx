import React, { Fragment } from "react";

const Preloader = (): JSX.Element => {
	return (
		<Fragment>
			<div id="preloader">
				<div className="preloader-box"></div>
				<div className="preloader-box"></div>
				<div className="preloader-box"></div>
			</div>
		</Fragment>
	);
};

export default Preloader;
