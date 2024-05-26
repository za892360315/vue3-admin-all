import axios from "axios";
const service = axios.create({
	baseURL: "",
	timeout: 5000
});
service.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	res => {
		return res;
	},
	error => {
		return Promise.reject(error);
	}
);

export default service;
