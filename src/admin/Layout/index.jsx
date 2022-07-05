import { useEffect } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { logout } from "redux/userSlice";
import Logo from "../../logo.svg";

export default function AdminLayout() {
	const [cookies, setCookies, removeCookies] = useCookies(["token"]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	const handleLogout = () => {
		dispatch(logout());
		removeCookies("token");
		navigate("/admin/login");
	};

	useEffect(() => {
		if (!cookies.token) {
			navigate("/admin/login");
		}
	}, [cookies.token, navigate]);

	return (
		<div className="admin_wrap">
			<header className="admin_header">
				<Link to="/admin">
					<img src={Logo} alt="Logo" />
				</Link>
				<h2>Admin dashboard</h2>
				<button type="button" className="logout" onClick={handleLogout}>
					<i className="bx bx-log-in"></i>
				</button>
			</header>
			<div className="admin_container">
				<aside className="admin_aside">
					<ul className="admin_gnb_list">
						<li className="admin_gnb_item">
							<i className="bx bx-user"></i>
							<NavLink
								to="account"
								className={
									(classNames("link"),
									({ isActive }) =>
										isActive ? "active" : undefined)
								}
							>
								Tài khoản
							</NavLink>
						</li>
						<li className="admin_gnb_item">
							<i className="bx bx-category"></i>
							<NavLink
								to="category"
								className={
									(classNames("link"),
									({ isActive }) =>
										isActive ? "active" : undefined)
								}
							>
								Danh mục sản phẩm
							</NavLink>
						</li>
						<li className="admin_gnb_item">
							<i className="bx bx-notepad"></i>
							<NavLink
								to="product"
								className={
									(classNames("link"),
									({ isActive }) =>
										isActive ? "active" : undefined)
								}
							>
								Sản phẩm
							</NavLink>
						</li>
					</ul>
				</aside>
				<div className="admin_content">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
