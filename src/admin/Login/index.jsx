import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/userSlice";

export default function AdminLogin() {
	const [dataLogin, setDataLogin] = useState({});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(dataLogin));
	};
	return (
		<>
			<div className="form_login">
				<h1 className="title">Đăng Nhập</h1>
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
