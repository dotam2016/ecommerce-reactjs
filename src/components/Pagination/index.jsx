import React from "react";
import PaginationItem from "./PaginationItem";
import classNames from "classnames";
import { useState } from "react";

const Pagination = ({ current = 1, totalRows, limit, onPageChange }) => {
	const [currentPage, setCurrentPage] = useState(Number(current));

	const totalPage = Math.ceil(totalRows / limit);

	const paginationItemUI = () => {
		const pages = [];
		for (let i = 1; i <= totalPage; i++) {
			let active = currentPage === i;
			pages.push(
				<li
					className={classNames("pagination__item", {
						"pagination__item--active": active,
					})}
					onClick={() => handlePageClick(i)}
					key={i}
				>
					<PaginationItem value={i} />
				</li>
			);
		}
		return pages;
	};

	const handlePageClick = (page) => {
		onPageChange(page);
		setCurrentPage(page);
	};

	return (
		<div className="pagination">
			<ul className="pagination__list">
				<li
					className={classNames(
						"pagination__item pagination__item--first"
					)}
					onClick={() => handlePageClick(1)}
				>
					<PaginationItem value="First" />
				</li>
				{paginationItemUI()}
				<li
					className={classNames(
						"pagination__item pagination__item--last"
					)}
					onClick={() => handlePageClick(totalPage)}
				>
					<PaginationItem value="Last" />
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
