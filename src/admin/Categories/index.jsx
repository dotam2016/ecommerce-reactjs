import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { getCategory, updateCategory } from "redux/categorySlice";

export default function AdminCategory() {
	document.title = "Admin Category";

	const [openModal, setOpenModal] = useState(false);
	const [categoryById, setCategoryById] = useState({});
	const [newNameCate, setNewNameCate] = useState("");

	const dispatch = useDispatch();
	const categoryList = useSelector((state) => state.category.data);

	const handleShowModalCategory = (id) => {
		setOpenModal(true);
		const categoryEdit = categoryList.filter((cate) => cate.id === id);
		setCategoryById(...categoryEdit);
		setNewNameCate("");
	};

	const handleUpdateCategory = () => {
		console.log("handleUpdateCategory::", categoryById);
		dispatch(updateCategory({ ...categoryById, name: newNameCate }));
	};

	useEffect(() => {
		const fetchCategory = () => {
			dispatch(getCategory())
				.unwrap()
				.then((res) => console.log("AdminCategory", res));
		};
		fetchCategory();
	}, []);

	return (
		<>
			<h1>Quản lý danh mục sản phẩm</h1>
			<table className="table">
				<caption className="blind">Quản lý danh mục sản phẩm</caption>
				<colgroup>
					<col width="50px" />
					<col width="80%" />
				</colgroup>
				<thead>
					<tr>
						<th>STT</th>
						<th>Tên</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{categoryList.length > 0 &&
						categoryList.map((category, index) => (
							<tr key={index}>
								<td align="center">{index + 1}</td>
								<td>{category.name}</td>
								<td>
									<button
										type="button"
										className="btn_action primary"
										onClick={() =>
											handleShowModalCategory(category.id)
										}
									>
										<i className="bx bx-edit"></i>
									</button>
									<button
										type="button"
										className="btn_action"
									>
										<i className="bx bx-x-circle"></i>
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<Modal
				isOpen={openModal}
				className={"modal_change_pwd"}
				onRequestClose={() => setOpenModal(false)}
				ariaHideApp={false}
			>
				<div className="form_change_pasword">
					<div className="input_box">
						<label htmlFor="current_pwd">
							Tên danh mục hiện tại
						</label>
						<input
							type="text"
							id="current_cate"
							readOnly
							defaultValue={categoryById?.name}
						/>
					</div>
					<div className="input_box">
						<label htmlFor="current_pwd">Tên danh mục mới</label>
						<input
							type="text"
							id="new_cate"
							value={newNameCate}
							onChange={(e) => setNewNameCate(e.target.value)}
						/>
					</div>
					<div className="btn_box">
						<button
							type="button"
							className="btn_primary"
							onClick={handleUpdateCategory}
						>
							Cập nhật
						</button>
					</div>
					<button
						className="btn_close_modal"
						onClick={() => setOpenModal(false)}
					>
						<i className="bx bx-x"></i>
					</button>
				</div>
			</Modal>
		</>
	);
}
