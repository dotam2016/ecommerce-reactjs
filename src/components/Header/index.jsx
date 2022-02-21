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
						<box-icon color="#666" name="search"></box-icon>
					</Link>
					<Link to="#none" className="header__cart">
						<box-icon color="#666" name="cart"></box-icon>
					</Link>
					<Link to="#none" className="header__acc">
						<box-icon color="#666" name="user"></box-icon>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
