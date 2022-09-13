import React from "react";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const Home = () => {
	return (
		<>
			<Slider />
			<div className="container">
				<ProductList />
			</div>
		</>
	);
};

export default Home;
