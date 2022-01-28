import React from "react";
import Logo from "../logo.svg";
import "boxicons";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<h1 className="logo">
					<img src={Logo} alt="Logo" />
				</h1>
				<nav className="nav">
					<ul className="nav__lst">
						<li className="nav__item">
							<a href="#none" className="nav__link">
								Home page
							</a>
						</li>
						<li className="nav__item">
							<a href="#none" className="nav__link">
								Products
							</a>
						</li>
						<li className="nav__item">
							<a href="#none" className="nav__link">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<div className="header--right">
					<a href="#none" className="header_cart">
						<box-icon type="solid" name="cart"></box-icon>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
