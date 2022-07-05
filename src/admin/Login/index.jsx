import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { login } from "redux/userSlice";

export default function AdminLogin() {
	const [cookies, setCookies, removeCookies] = useCookies(["token"]);
	const [dataLogin, setDataLogin] = useState();
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await dispatch(login(dataLogin));
		const result = unwrapResult(response);
		if (result.status) {
			setError(result.message);
		} else {
			setCookies("token", result.accessToken);
			navigate("/admin");
		}
	};
	return (
		<>
			<div className="form_login">
				<h1 className="title">Đăng Nhập</h1>
				{error && <span className="color_danger">{error}</span>}
				<form action="" onSubmit={handleSubmit}>
					<div className="input_box">
						<label htmlFor="username">Tài khoản</label>
						<input
							type="text"
							id="username"
							name="username"
							onChange={(e) => {
								setDataLogin({
									...dataLogin,
									[e.target.name]: e.target.value,
								});
							}}
						/>
					</div>
					<div className="input_box">
						<label htmlFor="pswd">Mật khẩu</label>
						<input
							type="password"
							id="pswd"
							name="password"
							onChange={(e) =>
								setDataLogin({
									...dataLogin,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</div>
					<div className="btn_box">
						<button type="submit" className="btn_primary">
							Đăng Nhập
						</button>
					</div>
				</form>
				<div className="forgot_pwd_box">
					<button type="button" className="btn_forgot_pwd">
						Quên mật khẩu &gt;&gt;
					</button>
				</div>
			</div>
		</>
	);
}
