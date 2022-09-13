import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
	document.title = "Admin Home";
	return (
		<>
			<h1>Home Admin</h1>
		</>
	);
}
