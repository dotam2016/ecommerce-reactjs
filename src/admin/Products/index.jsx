import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getProducts } from "redux/productSlice";
import { fomartCurrency, getTime } from "utils/synthetic";
import Pagination from "components/Pagination";
import Loading from "components/Loading";

// const pageLimit = 15;

const AdminProducts = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const [currentPage, setCurrentPage] = useState(
		searchParams.get("_page") ? searchParams.get("_page") : 1
	);
	const [pageLimit, setPageLimit] = useState(15);
	const [isLoading, setIsLoading] = useState(false);

	const products = useSelector((state) => state.products.data);
	const pagination = useSelector((state) => state.products.pagination);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleEditProduct = (id) => {
		navigate(`/admin/product/${id}`);
	};

	useEffect(() => {
		dispatch(getProducts({ currentPage, pageLimit }))
			.unwrap()
			.then((response) => console.log(response, "ccccc"));
		setSearchParams(`_page=${currentPage}`);
	}, [currentPage, pageLimit, dispatch, searchParams, setSearchParams]);

	return (
		<>
			<div className="header_content">
				<div>
					<h1>Quản lý sản phẩm</h1>
					<p className="other-info">
						Tổng số sản phẩm:{" "}
						<span className="color_danger">
							{pagination._totalRows}
						</span>
					</p>
					<div className="other-info">
						<span>Số sản phẩm trên 1 trang:&nbsp; &nbsp;</span>
						<select
							className="select_row_page"
							name="select_row_page"
							id="select_row_page_id"
							content="fdsafdsa"
							defaultValue="15"
							onChange={(e) => setPageLimit(e.target.value)}
						>
							<option value="15">15 sản phẩm</option>
							<option value="20">20 sản phẩm</option>
							<option value="30">30 sản phẩm</option>
							<option value="40">40 sản phẩm</option>
						</select>
					</div>
				</div>
				<button type="button" className="btn_create btn_primary">
					+ Thêm mới sản phẩm
				</button>
			</div>
			<table className="table table_products">
				<caption className="blind">Quản lý sản phẩm</caption>
				<colgroup>
					<col width="60px" />
					<col width="250px" />
					<col width="" />
					<col width="400px" />
					<col width="" />
					<col width="" />
					<col width="" />
					<col width="" />
					<col width="115px" />
				</colgroup>
				<thead>
					<tr>
						<th>STT</th>
						<th>Tên</th>
						<th>Image</th>
						<th>Mô tả</th>
						<th>Giá</th>
						<th>Giá Khuyến mại</th>
						<th>Created</th>
						<th>Updated</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{products.length > 0 ? (
						products.map((product, index) => (
							<tr key={product.id}>
								<td align="center">{index + 1}</td>
								<td>
									<p>{product.name}</p>
									{product.isFreeShip && (
										<span>Miễn phí vận chuyển</span>
									)}
								</td>
								<td>
									<img
										src={product.images[0]}
										alt={product.name}
										className="tbl_product_image"
										onError={(e) =>
											(e.target.src = product.images[1])
										}
									/>
								</td>
								<td>{product.shortDescription}</td>
								<td>{fomartCurrency(product.originalPrice)}</td>
								<td>{fomartCurrency(product.salePrice)}</td>
								<td>{getTime(product.createdAt)}</td>
								<td>{getTime(product.updatedAt)}</td>
								<td>
									<button
										type="button"
										className="btn_action primary"
										onClick={() =>
											handleEditProduct(product.id)
										}
									>
										<i className="bx bx-edit"></i>
									</button>
									<button
										type="button"
										className="btn_action"
										// onClick={() =>
										// 	handleDeleteCategory(category.id)
										// }
									>
										<i className="bx bx-x-circle"></i>
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={9} align="center">
								<b>Không tìm thấy sản phẩm phù hợp</b>
							</td>
						</tr>
					)}
				</tbody>
			</table>
			{products.length > 0 &&
				Math.ceil(pagination._totalRows / pageLimit) > 1 && (
					<Pagination
						current={currentPage}
						totalRows={pagination._totalRows}
						limit={pageLimit}
						onPageChange={handlePageChange}
					/>
				)}
			{isLoading && <Loading />}
		</>
	);
};

export default AdminProducts;
