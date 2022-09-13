import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
	getCategory,
	createCategory,
	updateCategory,
	deleteCategory,
} from "redux/categorySlice";
import { UUID, getTime, toSlug } from "@/utils/synthetic";

export default function AdminCategory() {
	document.title = "Admin Category";

	const [openModal, setOpenModal] = useState(false);
	const [categoryById, setCategoryById] = useState({});
	const [newNameCate, setNewNameCate] = useState("");
	const [modalCreate, setModalCreate] = useState(false);

	const dispatch = useDispatch();
	const categoryList = useSelector((state) => state.category.data);

	const handleShowModalCategory = (id) => {
		setOpenModal(true);
		const categoryEdit = categoryList.filter((cate) => cate.id === id);
		setCategoryById(...categoryEdit);
		setNewNameCate("");
	};

	const handleUpdateCategory = () => {
		if (!newNameCate) {
			toast.warn("Bạn chưa nhập tên cho danh mục");
			return;
		}
		let data = {
			...categoryById,
			name: newNameCate,
			searchTerm: toSlug(newNameCate),
			updatedAt: new Date().getTime(),
		};
		dispatch(updateCategory(data))
			.unwrap()
			.then((res) => {
				if (res.status === 200) {
					setOpenModal(false);
					setNewNameCate("");
				}
			});
	};

	const handleDeleteCategory = (id) => {
		const isDelete = window.confirm(
			"Bạn có chắc chắc muốn xóa danh mục không ?"
		);
		if (isDelete) {
			dispatch(deleteCategory(id))
				.unwrap()
				.then((res) => {
					console.log(res, "ccccc");
					if (res.status === 200) {
						toast.success("Bạn đã xóa danh mục");
					}
				});
		}
	};

	const handleModalCreateCategory = () => {
		setOpenModal(true);
		setModalCreate(true);
	};

	const handleCreateCategory = () => {
		if (!newNameCate) {
			toast.warn("Bạn chưa nhập tên cho danh mục");
			return;
		}
		let data = {
			id: UUID(),
			name: newNameCate,
			searchTerm: toSlug(newNameCate),
			createdAt: new Date().getTime(),
			updatedAt: new Date().getTime(),
		};

		dispatch(createCategory(data))
			.unwrap()
			.then((res) => {
				if (res.status === 201) {
					setOpenModal(false);
					setModalCreate(false);
					setNewNameCate("");
					toast.success("Tạo danh mục thành công");
				}
			});
	};

	useEffect(() => {
		const fetchCategory = () => {
			dispatch(getCategory());
		};
		fetchCategory();
	}, []);

	return (
		<>
			<div className="header_content">
				<h1>Quản lý danh mục sản phẩm</h1>
				<button
					type="button"
					className="btn_create btn_primary"
					onClick={handleModalCreateCategory}
				>
					+ Thêm mới danh mục
				</button>
			</div>
			<table className="table">
				<caption className="blind">Quản lý danh mục sản phẩm</caption>
				<colgroup>
					<col width="60px" />
					<col width="auto" />
					<col width="200px" />
					<col width="200px" />
					<col width="95px" />
				</colgroup>
				<thead>
					<tr>
						<th>STT</th>
						<th>Tên</th>
						<th>Created</th>
						<th>Update</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{categoryList.length > 0 &&
						categoryList.map((category, index) => (
							<tr key={index}>
								<td align="center">{index + 1}</td>
								<td>{category.name}</td>
								<td>{getTime(category.createdAt)}</td>
								<td>{getTime(category.updatedAt)}</td>
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
										onClick={() =>
											handleDeleteCategory(category.id)
										}
									>
										<i className="bx bx-x-circle"></i>
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
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
			<Modal
				isOpen={openModal}
				className={"modal_change_pwd"}
				onRequestClose={() => setOpenModal(false)}
				ariaHideApp={false}
			>
				{modalCreate ? (
					<div className="form_change_pasword">
						<div className="input_box">
							<label htmlFor="current_pwd">Tên danh mục</label>
							<input
								type="text"
								id="current_cate"
								value={newNameCate}
								onChange={(e) => setNewNameCate(e.target.value)}
							/>
						</div>
						<div className="btn_box">
							<button
								type="button"
								className="btn_primary"
								onClick={handleCreateCategory}
							>
								Thêm mới
							</button>
						</div>
						<button
							className="btn_close_modal"
							onClick={() => setOpenModal(false)}
						>
							<i className="bx bx-x"></i>
						</button>
					</div>
				) : (
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
							<label htmlFor="current_pwd">
								Tên danh mục mới
							</label>
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
				)}
			</Modal>
		</>
	);
}
