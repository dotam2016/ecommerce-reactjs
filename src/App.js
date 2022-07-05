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
import AdminCategory from "@/admin/Categories";

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
				<Route path="category" element={<AdminCategory />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
