import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Home />}></Route>
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
