import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AdminHome from "@/admin/Home";
import AdminLayout from "@/admin/Layout";
import AdminAccount from "@/admin/Account";
import AdminLogin from "@/admin/Login";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Home />}></Route>
				<Route path="/products" element={<Products />}></Route>
				<Route
					path="/products/:slug"
					element={<ProductDetail />}
				></Route>
			</Route>
			<Route path="/admin/login" element={<AdminLogin />}></Route>
			<Route path="/admin" element={<AdminLayout />}>
				<Route path="" element={<AdminHome />}></Route>
				<Route path="account" element={<AdminAccount />}></Route>
			</Route>
		</Routes>
	);
};

export default App;

// const addData = () => {
// 	const data = {
// 		title: "fdasfdas",
// 		description: "description description description",
// 		author: "do tam",
// 	};
// 	fetch("http://localhost:8000/api/posts", {
// 		method: "POST",
// 		headers: {
// 			"content-type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	}).then(() => {
// 		setChange(true);
// 	});
// };
// const deleteData = () => {
// 	fetch("http://localhost:8000/api/posts/vmmVZv2", {
// 		method: "DELETE",
// 	}).then(() => {
// 		setChange(true);
// 	});
// };
// useEffect(() => {
// 	fetch("http://localhost:8000/api/posts")
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 		});
// }, [change]);
