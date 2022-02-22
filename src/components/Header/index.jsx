import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg";
import Navigation from "../Navigation";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<h1 className="logo">
					<Link to="/">
						<img src={Logo} alt="Logo" />
					</Link>
				</h1>
				<Navigation />
				<div className="header__info">
					<Link to="#none" className="header__search">
						<i class="bx bx-search"></i>
					</Link>
					<Link to="#none" className="header__cart">
						<i class="bx bx-cart"></i>
					</Link>
					<Link to="#none" className="header__acc">
						<i class="bx bx-user"></i>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
