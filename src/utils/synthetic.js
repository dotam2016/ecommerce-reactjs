export const getTime = (timeString) => {
	return (
		new Date(timeString).toLocaleDateString() +
		" - " +
		new Date(timeString).toLocaleTimeString()
	);
};

export const UUID = () => {
	var dt = new Date().getTime();
	var uuid = "xxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (dt + Math.random() * 16) % 16 | 0;
		dt = Math.floor(dt / 16);
		return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
	});
	return uuid;
};

export const toSlug = (str) => {
	// Chuyển hết sang chữ thường
	str = str.toLowerCase();

	// xóa dấu
	str = str
		.normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
		.replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

	// Thay ký tự đĐ
	str = str.replace(/[đĐ]/g, "d");

	// Xóa ký tự đặc biệt
	str = str.replace(/([^0-9a-z-\s])/g, "");

	// Xóa khoảng trắng thay bằng ký tự -
	str = str.replace(/(\s+)/g, "-");

	// Xóa ký tự - liên tiếp
	str = str.replace(/-+/g, "-");

	// xóa phần dư - ở đầu & cuối
	str = str.replace(/^-+|-+$/g, "");

	// return
	return str;
};
