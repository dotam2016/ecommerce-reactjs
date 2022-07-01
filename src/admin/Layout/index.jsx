import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
	return (
		<div className="admin_wrap">
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
	);
}
