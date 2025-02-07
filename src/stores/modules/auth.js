import { defineStore } from "pinia";
import { getFlatArr } from "@/utils/util";
import { getButtonAuthList } from "@/api/login";
import { getShowMenuList, getAllBreadcrumbList } from "@/utils/util";
import { routerList } from "@/api/login.js";

export const AuthStoreHooks = defineStore("AuthStore", {
	state: () => ({
		// 当前页面的 router name，用来做按钮权限筛选
		routeName: "",
		// 按钮权限列表
		authButtonList: {},
		// 菜单权限列表
		authMenuList: []
	}),
	getters: {
		// 按钮权限列表
		authButtonListGet: state => state.authButtonList,
		// 后端返回的菜单列表 ==> 这里没有经过任何处理
		authMenuListGet: state => state.authMenuList,
		// 后端返回的菜单列表 ==> 左侧菜单栏渲染，需要去除 isHide == true
		showMenuListGet: state => getShowMenuList(state.authMenuList),
		// 扁平化之后的一维数组路由，主要用来添加动态路由
		flatMenuListGet: state => getFlatArr(state.authMenuList),
		// 所有面包屑导航列表
		breadcrumbListGet: state => getAllBreadcrumbList(state.authMenuList)
	},
	actions: {
		// getAuthButtonList
		async getAuthButtonList() {
			const { data } = await getButtonAuthList();
			this.authButtonList = data.list;
		},
		// getAuthMenuList
		async getAuthMenuList() {
			const { data } = await routerList();
			this.authMenuList = data.list;
		},
		// setRouteName
		async setRouteName(name) {
			this.routeName = name;
		}
	}
});
