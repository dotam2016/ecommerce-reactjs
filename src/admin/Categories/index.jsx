import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "redux/categorySlice";

export default function AdminCategory() {
	document.title = "Admin Category";

	const dispatch = useDispatch();
	const categoryList = useSelector((state) => state.category.category);

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
				<thead>
					<tr>
						<th>STT</th>
						<th>Tên</th>
					</tr>
				</thead>
				<tbody>
					{categoryList.length > 0 &&
						categoryList.map((category, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{category.name}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
}
