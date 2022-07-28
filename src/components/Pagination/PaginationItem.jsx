import React from "react";
import classNames from "classnames";

const PaginationItem = ({ value, onclick }) => {
	return (
		<button
			type="button"
			className={classNames("pagination__btn")}
			onClick={onclick && onclick}
		>
			{value}
		</button>
	);
};
export default PaginationItem;
