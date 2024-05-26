import router from "@/routers/index";
import { isType } from "@/utils/util";
import { LOGIN_URL } from "@/config/config";
import { AuthStoreHooks } from "@/stores/modules/auth";
import { notFoundRouter } from "@/routers/modules/staticRouter";
// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

/**
 * 初始化动态路由
 */
export const initDynamicRouter = async () => {
	let list = [];
	const authRouter = JSON.parse(localStorage.getItem("router")) || [];

	const authStore = AuthStoreHooks();
	try {
		await authStore.getAuthMenuList();
		await authStore.getAuthButtonList();
		if (authRouter.length > 0) {
			authRouter.forEach(e1 => {
				authStore.flatMenuListGet.forEach(e2 => {
					if (e1 === e2.id) {
						list.push(e2);
					}
				});
			});
		} else {
			list = authStore.flatMenuListGet;
		}
		// 添加动态路由
		list.forEach(item => {
			item.children && delete item.children;
			if (item.component && isType(item.component) == "string") {
				item.component = modules["/src/views" + item.component + ".vue"];
			}
			if (item.meta.isFull) {
				router.addRoute(item);
			} else {
				router.addRoute("layout", item);
			}
		});
		router.addRoute(notFoundRouter);
	} catch (error) {
		//  当按钮 || 菜单请求出错时，重定向到登陆页
		router.replace(LOGIN_URL);
		return Promise.reject(error);
	}
};
