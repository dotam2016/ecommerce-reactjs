import React from "react";

const ProductFilter = () => {
	return (
		<>
			<div className="filter__box">
				<h3 className="filter__title">Hãng sản xuất</h3>
				<ul className="filter__list">
					<li className="filter__item filter__item--selected">
						<button className="filter-item__btn">
							<span className="filter-item__text">Tất cả</span>
						</button>
					</li>
					<li className="filter__item">
						<button className="filter-item__btn">
							<span className="filter-item__text">Apple</span>
						</button>
					</li>
					<li className="filter__item">
						<button className="filter-item__btn">
							<span className="filter-item__text">Samsung</span>
						</button>
					</li>
					<li className="filter__item">
						<button className="filter-item__btn">
							<span className="filter-item__text">Xiaomi</span>
						</button>
					</li>
				</ul>
			</div>
			<div className="filter__box">
				<h3 className="filter__title">Mức giá</h3>
				<ul className="filter__list">
					<li className="filter__item filter__item--selected">
						<button className="filter-item__btn">
							<span className="filter-item__text">Tất cả</span>
						</button>
					</li>
					<li className="filter__item">
						<button className="filter-item__btn">
							<span className="filter-item__text">
								Dưới 2 triệu
							</span>
						</button>
					</li>
					<li className="filter__item">
						<button className="filter-item__btn">
							<span className="filter-item__text">
								Từ 2-4 triệu
							</span>
						</button>
					</li>
					<li className="filter__item">
						<button className="filter-item__btn">
							<span className="filter-item__text">
								Từ 4-8 triệu
							</span>
						</button>
					</li>
					<li className="filter__item">
						<button className="filter-item__btn">
							<span className="filter-item__text">
								Trên 8 triệu
							</span>
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ProductFilter;
