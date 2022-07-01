export default function AdminLogin() {
	return (
		<>
			<div className="form_login">
				<h1 className="title">Đăng Nhập</h1>
				<div className="input_box">
					<label htmlFor="username">Tài khoản</label>
					<input type="text" id="username" />
				</div>
				<div className="input_box">
					<label htmlFor="pswd">Mật khẩu</label>
					<input type="password" id="pswd" />
				</div>
				<div className="btn_box">
					<button type="button" className="btn_primary">
						Đăng Nhập
					</button>
				</div>
				<div className="forgot_pwd_box">
					<button type="button" className="btn_forgot_pwd">
						Quên mật khẩu &gt;&gt;
					</button>
				</div>
			</div>
		</>
	);
}
