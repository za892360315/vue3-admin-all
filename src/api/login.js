import service from "@/utils/request.js";

export const routerList = () => {
	return service({
		method: "GET",
		url: "/api/router/list"
	});
};

export const login = () => {
	return service({
		method: "GET",
		url: "/api/login"
	});
};

export const getButtonAuthList = () => {
	return service({
		method: "GET",
		url: "/api/button/authList"
	});
};
