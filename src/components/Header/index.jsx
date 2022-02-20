import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<h1 className="logo">
					<Link to="/">
						<img src={Logo} alt="Logo" />
					</Link>
				</h1>
				<nav className="gnb">
					<ul className="gnb__lst">
						<li className="gnb__item">
							<Link to="/" className="gnb__link">
								Trang chủ
							</Link>
						</li>
						<li className="gnb__item">
							<Link to="#none" className="gnb__link">
								Sản phẩm
							</Link>
						</li>
						<li className="gnb__item">
							<Link to="#none" className="gnb__link">
								Liên hệ
							</Link>
						</li>
					</ul>
				</nav>
				<div className="header__info">
					<Link to="#none" className="header__cart">
						<box-icon color="#666" name="cart"></box-icon>
					</Link>
					<Link to="#none" className="header__search">
						<box-icon color="#666" name="search"></box-icon>
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
