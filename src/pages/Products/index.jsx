import React from "react";
import ProductFilter from "../../components/ProductFilter";
import ProductList from "../../components/ProductList";

const listImage = [
	"https://lmt.mstatic.lv/lmt/images/a_d_v/from_cms/2013/6811178cc95b11510ba1d75f237bfe42.png",
	"https://lmt.mstatic.lv/lmt/images/a_d_v/from_cms/1919/2670c295433d6281509b684f79a5e641.jpg",
	"https://www.pbtech.co.nz/fileslib/_20190920153135_MI_A3.jpg",
	"https://lmt.mstatic.lv/lmt/images/a_d_v/from_cms/2155/5d5976cfe89ca3c9175eff11e0ef17b6.jpg",
];
const Products = () => {
	return (
		<div className="page page--products">
			<div className="container">
				<div className="product-banner">
					<img src={listImage[1]} alt="" />
				</div>
				<div className="content">
					<div className="product-filter">
						<ProductFilter />
					</div>
					<div className="main-content">
						<ProductList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
