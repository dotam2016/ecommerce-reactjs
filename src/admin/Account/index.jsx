import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";

export default function AdminAccount() {
	const [showChangePwd, setShowChangePwd] = useState(false);
	const user = useSelector((state) => state.user);
	return (
		<>
			<h1>Thông tin tài khoản</h1>
			<div className="account_info">
				<span className="title">Tên tài khoản: </span>
				<span className="value">{user?.username}</span>
			</div>
			<button
				type="button"
				className="btn_toggle_frm_pwd"
				onClick={() => setShowChangePwd(!showChangePwd)}
			>
				Change password
			</button>
			<Modal
				isOpen={showChangePwd}
				className={"modal_change_pwd"}
				// onRequestClose={() => setShowChangePwd(false)}
				ariaHideApp={false}
				contentLabel="Change Password"
			>
				<div className="form_change_pasword">
					<div className="input_box">
						<label htmlFor="current_pwd">Mật khẩu hiện tại</label>
						<input
							type="password"
							autoComplete="off"
							id="current_pwd"
						/>
					</div>
					<div className="input_box">
						<label htmlFor="new_pwd">Mật khẩu mới</label>
						<input
							type="password"
							autoComplete="off"
							id="new_pwd"
						/>
					</div>
					<div className="input_box">
						<label htmlFor="re_new_pwd">
							Nhập Lại Mật khẩu mới
						</label>
						<input
							type="password"
							autoComplete="off"
							id="re_new_pwd"
						/>
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
		</>
	);
}
