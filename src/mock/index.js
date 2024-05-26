import Mock from "mockjs";
import DynamicRouter from "@/assets/json/routerList.json";
import authButton from "@/assets/json/authButton.json";

Mock.mock("/api/router/list", () => {
	{
		return Mock.mock({
			code: 200,
			list: DynamicRouter.data
		});
	}
});

Mock.mock("/api/login", () => {
	{
		return Mock.mock({
			name: "buduo",
			token: "buduo-token"
		});
	}
});

Mock.mock("/api/button/authList", () => {
	{
		return Mock.mock({
			code: 200,
			list: authButton.data
		});
	}
});
