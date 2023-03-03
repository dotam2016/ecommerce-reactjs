import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "redux/categorySlice";
import useClickOutSideHook from "hooks/useClickOutSideHook";

const DropDown = ({ categoryId, onChange }) => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useClickOutSideHook(false);
	const inputRef = useRef(null);
	const dropDownListRef = useRef(null);
	const [categoryIdState, setCategoryIdState] = useState(categoryId);
	const [inputValue, setInputValue] = useState("");

	const dispatch = useDispatch();
	const categoryList = useSelector((state) => state.category.data);

	console.log(categoryList, "sss");
	const getCategoryName = (cateId) => {
		let categoryName = "";
		if (cateId) {
			let result = categoryList.filter((itm) => itm.id === cateId);
			result.length && (categoryName = result[0].name);
		}
		return categoryName;
	};

	const handleChangeValue = (e) => {
		setInputValue(e.target.value);
	};

	const handleChangeOption = (id) => {
		setCategoryIdState(id);
		setIsComponentVisible(false);
	};

	const handleFocus = () => {
		setIsComponentVisible(true);
	};

	useEffect(() => {
		const fetchCategory = () => {
			dispatch(getCategory());
		};
		fetchCategory();
	}, []);

	return (
		<div className="dropdown_wrap" ref={ref}>
			<div className="dropdown_inner">
				<div className="option_selected_box">
					<div className="option_selected_item">
						<span className="text">
							{getCategoryName(categoryIdState)}
						</span>
						{/* <button
					type="button"
					className="btn-remove"
					aria-label="Remove"
				></button> */}
					</div>
				</div>
				<input
					ref={inputRef}
					type="text"
					className="dropdown_input"
					value={inputValue}
					onChange={handleChangeValue}
					onFocus={handleFocus}
				/>
			</div>
			{isComponentVisible && (
				<ul className="dropdown_list">
					{categoryList.map((category) => (
						<li className="dropdown_item" key={category.id}>
							<button
								type="button"
								className="dropdown_btn"
								onClick={() => handleChangeOption(category.id)}
							>
								{category.name}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

DropDown.propTypes = {
	categoryId: PropTypes.string.isRequired,
};

export default DropDown;
