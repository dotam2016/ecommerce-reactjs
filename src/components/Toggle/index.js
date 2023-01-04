import React from "react";
import classNames from "classnames";

const Toggle = ({ isCompact, name, isChecked, onChangeEvt }) => {
	return (
		<span className={classNames("toggle", isCompact && "is_compact")}>
			<input
				type="checkbox"
				id={name}
				className="toggle_input"
				defaultChecked={isChecked}
				{...(onChangeEvt && { onChange: onChangeEvt })}
			/>
			<label htmlFor={name} className="toggle_label">
				Toggle
			</label>
		</span>
	);
};

export default Toggle;
