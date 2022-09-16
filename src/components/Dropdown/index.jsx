import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "redux/categorySlice";

const DropDown = ({ categoryId, onChangeCategory }) => {
	const dispatch = useDispatch();

	const categoryList = useSelector((state) => state.category.data);

	const initialState = (categoryId) => {
		let categoryName = "";
		if (categoryId) {
			let result = categoryList.filter((itm) => itm.id === categoryId);
			if (result.length) categoryName = categoryName[0].name;
		}
		return categoryName;
	};

	const [inputValue, setInputValue] = useState(() =>
		initialState(categoryId)
	);

	const handleChangeValue = (e) => {
		console.log(e);
	};

	const handleChangeOption = (category) => {
		console.log(category);
	};

	useEffect(() => {
		const fetchCategory = () => {
			dispatch(getCategory());
		};
		fetchCategory();
	}, []);

	return (
		<div className="dropdown_wrap">
			<input
				type="text"
				className="dropdown_text"
				value={inputValue}
				onChange={handleChangeValue}
			/>
			<ul className="dropdow_list">
				{categoryList.map((category) => (
					<li className="dropdow_item" key={category.id}>
						<button
							type="button"
							className="dropdown_btn"
							onClick={() => handleChangeOption(category)}
						>
							{category.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DropDown;
