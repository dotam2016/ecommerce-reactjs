import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { login } from "redux/userSlice";

export default function AdminLogin() {
	const [cookies, setCookies, removeCookies] = useCookies(["token"]);
	const [dataLogin, setDataLogin] = useState();
	const [username, setUsername] = useState();
	const [password, setPassowrd] = useState();
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!username || !password) {
			setError("Vui lòng kiểm tra thông tin đăng nhập!");
			return;
		}
		const response = await dispatch(login({ username, password }));
		const result = unwrapResult(response);
		if (result.status) {
			setError(result.message);
		} else {
			setCookies("token", result.accessToken);
			navigate("/admin/account");
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
								setUsername(e.target.value);
							}}
						/>
					</div>
					<div className="input_box">
						<label htmlFor="pswd">Mật khẩu</label>
						<input
							type="password"
							id="pswd"
							name="password"
							autoComplete="off"
							onChange={(e) => {
								setPassowrd(e.target.value);
							}}
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
