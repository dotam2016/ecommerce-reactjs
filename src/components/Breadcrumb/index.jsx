import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
	return (
		<div className="breadcrumb">
			<ul className="breadcrumb__list">
				<li className="breadcrumb__item">
					<Link to="/" className="breadcrumb-item__link">
						Trang chủ
					</Link>
				</li>
				<li className="breadcrumb__item">
					<Link to="/products" className="breadcrumb-item__link">
						Điện thoại
					</Link>
				</li>
				<li className="breadcrumb__item">
					<span className="breadcrumb-item__text">
						Iphone 11 64GB
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Breadcrumb;
