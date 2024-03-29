import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
	return (
		<div className="product__list">
			<div className="product__item">
				<Link to="#none" className="product__link">
					<div className="product__image">
						<img
							src="https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg"
							alt="alt"
						/>
					</div>
					<div className="product__info">
						<p className="product__name">
							Samsung Galaxy S22+ 128GB
						</p>
						<div className="product-info__price product-info__price--sale">
							<span className="product__original-price">
								25.990.000 đ
							</span>
							<span className="product__sale-price">
								25.190.000 đ
							</span>
							<span className="product__discount">4%</span>
						</div>
					</div>
				</Link>
			</div>
			<div className="product__item">
				<Link to="#none" className="product__link">
					<div className="product__image">
						<img
							src="https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg"
							alt="alt"
						/>
					</div>
					<div className="product__info">
						<p className="product__name">
							Samsung Galaxy S22+ 128GB
						</p>
						<div className="product-info__price">
							<span className="product__original-price">
								25.990.000 đ
							</span>
						</div>
					</div>
				</Link>
			</div>
			<div className="product__item">
				<Link to="#none" className="product__link">
					<div className="product__image">
						<img
							src="https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg"
							alt="alt"
						/>
					</div>
					<div className="product__info">
						<p className="product__name">
							Samsung Galaxy S22+ 128GB
						</p>
						<div className="product-info__price">
							<span className="product__original-price">
								25.990.000 đ
							</span>
						</div>
					</div>
				</Link>
			</div>
			<div className="product__item">
				<Link to="#none" className="product__link">
					<div className="product__image">
						<img
							src="https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg"
							alt="alt"
						/>
					</div>
					<div className="product__info">
						<p className="product__name">
							Samsung Galaxy S22+ 128GB
						</p>
						<div className="product-info__price">
							<span className="product__original-price">
								25.990.000 đ
							</span>
						</div>
					</div>
				</Link>
			</div>
			<div className="product__item">
				<Link to="#none" className="product__link">
					<div className="product__image">
						<img
							src="https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg"
							alt="alt"
						/>
					</div>
					<div className="product__info">
						<p className="product__name">
							Samsung Galaxy S22+ 128GB
						</p>
						<div className="product-info__price">
							<span className="product__original-price">
								25.990.000 đ
							</span>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ProductList;
