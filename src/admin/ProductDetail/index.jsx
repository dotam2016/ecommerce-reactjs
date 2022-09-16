import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "redux/productSlice";
import { fomartCurrency, fomartNumber } from "utils/synthetic";
import Loading from "components/Loading";
import DropDown from "components/Dropdown";
import { toast, ToastContainer } from "react-toastify";
import SunEditor from "suneditor-react";

import "react-toastify/dist/ReactToastify.min.css";
import "suneditor/dist/css/suneditor.min.css";

const AdminProductDetail = () => {
	let { productId } = useParams();
	const product = useSelector((state) =>
		getProductById(state.products, productId)
	);

	const dispatch = useDispatch();

	const [name, setName] = useState(product?.name);
	const [price, setPrice] = useState(product?.originalPrice);
	const [salePrice, setSalePrice] = useState(product?.salePrice);
	const [shortDescription, setShortDescription] = useState(
		product?.shortDescription
	);
	const [description, setDescription] = useState(product?.description);
	const [images, setImages] = useState(product?.images);

	const handleEditorChange = (content) => {
		setDescription(content);
	};

	// const onChangeCategory = (categoryId) => {
	// 	console.log(categoryId, "product detail");
	// };

	// const handleUploadImages = (e) => {
	// 	const imagesUpload = [];
	// 	for (let i = 0; i < e.target.files.length; i++) {
	// 		let file = e.target.files[i];
	// 		imagesUpload.push(window.URL.createObjectURL(file));
	// 	}
	// 	setImages((prev) => [...prev, ...imagesUpload]);
	// };

	// const handleDeleteImages = (index) => {
	// 	const imagesCurrent = [...images];
	// 	imagesCurrent.splice(index, 1);
	// 	setImages(imagesCurrent);
	// };

	const handleUpdateProduct = () => {
		let data = {
			name: name,
			originalPrice: Number(String(price).replaceAll(".", "")),
			salePrice: Number(String(salePrice).replaceAll(".", "")),
			shortDescription: shortDescription,
			description: description,
			updatedAt: new Date().getTime(),
		};
		dispatch(updateProduct({ id: productId, data }))
			.unwrap()
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					toast.success("Bạn cập nhật sản phẩm thành công");
				}
			});
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
								value={fomartNumber(price)}
								onChange={(e) => setPrice(e.target.value)}
							/>
							<span className="unit">VNĐ</span>
						</div>
						<div className="ipt_box">
							<label className="label_name" htmlFor="">
								Giá khuyến mại
							</label>
							<input
								type="text"
								value={fomartNumber(salePrice)}
								onChange={(e) => setSalePrice(e.target.value)}
							/>
							<span className="unit">VNĐ</span>
						</div>
						<div className="ipt_box">
							<label className="label_name" htmlFor="">
								Danh mục
							</label>
							{/* <DropDown
								categoryId={product.categoryId}
								onChangeCategory={onChangeCategory}
							/> */}
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
						{/* <div className="ipt_box">
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
												onClick={() =>
													handleDeleteImages(index)
												}
											>
												<i className="bx bx-x"></i>
											</button>
										</li>
									))}
								<li className="itm_images_product item_upload">
									<label htmlFor="upload_images">
										Upload Image
									</label>
									<input
										id="upload_images"
										type="file"
										className="input_add_images"
										multiple
										aria-label="Upload images"
										onChange={handleUploadImages}
									/>
								</li>
							</ul>
						</div> */}
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
			<ToastContainer
				position="top-right"
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default AdminProductDetail;
