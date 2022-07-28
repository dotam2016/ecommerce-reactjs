import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "redux/productSlice";
import { fomartCurrency, getTime } from "utils/synthetic";
import Loading from "components/Loading";

import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const AdminProductDetail = () => {
	let { productId } = useParams();
	const product = useSelector((state) =>
		getProductById(state.products, productId)
	);

	const [name, setName] = useState(product?.name);
	const [price, setPrice] = useState(fomartCurrency(product?.originalPrice));
	const [salePrice, setSalePrice] = useState(
		fomartCurrency(product?.salePrice)
	);
	const [shortDescription, setShortDescription] = useState(
		product?.shortDescription
	);
	const [description, setDescription] = useState(product?.description);
	const [images, setImages] = useState(product?.images);

	const handleEditorChange = (content) => {
		setDescription(content);
	};

	const handleUpdateProduct = () => {
		console.log("description:::", description);
	};

	return (
		<>
			<div className="header_content">
				<div>
					<h1>Cập nhật sản phẩm</h1>
				</div>
				<button type="button" className="btn_create btn_primary">
					+ Thêm mới sản phẩm
				</button>
			</div>
			<div className="adm_product_detail">
				<div className="adm_frm_product">
					<form>
						<div className="ipt_box">
							<label className="label_name" htmlFor="">
								Tên sản phẩm
							</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="ipt_box">
							<label className="label_name" htmlFor="">
								Giá
							</label>
							<input
								type="text"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
						<div className="ipt_box">
							<label className="label_name" htmlFor="">
								Giá khuyến mại
							</label>
							<input
								type="text"
								value={salePrice}
								onChange={(e) => setSalePrice(e.target.value)}
							/>
						</div>
						<div className="ipt_box">
							<label className="label_name" htmlFor="">
								Mô tả
							</label>
							<input
								type="text"
								value={shortDescription}
								onChange={(e) =>
									setShortDescription(e.target.value)
								}
							/>
						</div>
						<div className="ipt_box">
							<label className="label_name" htmlFor="">
								Ảnh sản phẩm
							</label>
							<ul className="adm_lst_images_product">
								{images &&
									images.map((image, index) => (
										<li
											className="itm_images_product"
											key={index}
										>
											<img src={image} alt="" />
											<button
												type="button"
												className="btn_delete_img"
												aria-label="Xóa ảnh"
											>
												<i className="bx bx-x"></i>
											</button>
										</li>
									))}
								<li className="itm_images_product">
									<input
										type="file"
										className="input_add_images"
										multiple
										aria-label="Upload images"
									/>
								</li>
							</ul>
						</div>
						<div className="ipt_box">
							<label className="label_name" htmlFor="">
								Thông tin chi tiết
							</label>
							<SunEditor
								defaultValue={description}
								height="500"
								onChange={handleEditorChange}
							/>
						</div>
						<button
							type="button"
							className="btn_primary"
							onClick={handleUpdateProduct}
						>
							Cập nhật
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminProductDetail;
