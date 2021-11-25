import React from "react";

const Header = ({ text }) => {
	return (
		<header>
			<h1 className="font-mono text-white text-center text-5xl">{text}</h1>
		</header>
	);
};

export default Header;
