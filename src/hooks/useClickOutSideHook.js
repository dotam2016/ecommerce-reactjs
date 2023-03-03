import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const useClickOutSideHook = (initIsVisible) => {
	const [isComponentVisible, setIsComponentVisible] = useState(initIsVisible);
	const ref = useRef(null);

	const handleHideDropdown = (event) => {
		if (event.key === "Escape") {
			setIsComponentVisible(false);
		}
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleHideDropdown, true);
		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("keydown", handleHideDropdown, true);
			document.removeEventListener("click", handleClickOutside, true);
		};
	});

	return { ref, isComponentVisible, setIsComponentVisible };
};

useClickOutSideHook.propTypes = {
	initIsVisible: PropTypes.bool,
};

export default useClickOutSideHook;
