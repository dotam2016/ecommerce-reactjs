import { useState } from "react";
import Modal from "react-modal";

export default function AdminAccount() {
	const [showChangePwd, setShowChangePwd] = useState(false);
	return (
		<>
			<h1>Thông tin tài khoản</h1>
			<div className="account_info">
				<span className="title">Tên tài khoản:</span>
				<span className="value">admin</span>
			</div>
			<div className="account_info">
				<span className="title">Email:</span>
				<span className="value">email@gmail.com</span>
			</div>
			<button
				type="button"
				className="btn_toggle_frm_pwd"
				onClick={() => setShowChangePwd(!showChangePwd)}
			>
				Change password
			</button>
			{showChangePwd && (
				<Modal
					isOpen={showChangePwd}
					className={"modal_change_pwd"}
					// onRequestClose={() => setShowChangePwd(false)}
				>
					<div className="form_change_pasword">
						<div className="input_box">
							<label htmlFor="current_pwd">
								Mật khẩu hiện tại
							</label>
							<input type="password" id="current_pwd" />
						</div>
						<div className="input_box">
							<label htmlFor="new_pwd">Mật khẩu mới</label>
							<input type="password" id="new_pwd" />
						</div>
						<div className="input_box">
							<label htmlFor="re_new_pwd">
								Nhập Lại Mật khẩu mới
							</label>
							<input type="password" id="re_new_pwd" />
						</div>
						<div className="btn_box">
							<button type="button" className="btn_primary">
								Cập nhật
							</button>
						</div>
						<button
							className="btn_close_modal"
							onClick={() => setShowChangePwd(false)}
						>
							<i className="bx bx-x"></i>
						</button>
					</div>
				</Modal>
			)}
		</>
	);
}
