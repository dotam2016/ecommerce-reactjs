import React from "react";
import classNames from "classnames";

const Toogle = ({ isCompact, name }) => {
	return (
		<span className={classNames("toggle", isCompact && "is_compact")}>
			<input type="checkbox" id={name} className="toggle_input" />
			<label htmlFor={name} className="toggle_label">
				Toggle
			</label>
		</span>
	);
};

export default Toogle;
