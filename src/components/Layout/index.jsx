import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
	return (
		<>
			<Header />
			<div className="wrap__content">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
