import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
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
						Tin tức
					</Link>
				</li>
				<li className="gnb__item">
					<Link to="#none" className="gnb__link">
						Liên hệ
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
