import { defineStore, createPinia } from "pinia";
// import { GlobalState, ThemeConfigProps } from "./interface";
import { DEFAULT_PRIMARY } from "@/config/config";
import piniaPersistConfig from "@/config/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStoreHooks = defineStore("GlobalStore", {
	// id: 必须的，在所有 Store 中唯一
	id: "GlobalState",
	// state: 返回对象的函数
	state: () => ({
		// token
		token: "",
		// userInfo
		userInfo: "",
		// element组件大小
		assemblySize: "default",
		// language
		language: "",
		// themeConfig
		themeConfig: {
			// 布局切换 ==>  纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns
			layout: "vertical",
			// 默认 primary 主题颜色
			primary: DEFAULT_PRIMARY,
			// 黑夜模式
			isDark: false,
			// 折叠菜单
			isCollapse: false,
			// 面包屑导航
			breadcrumb: true,
			// 面包屑导航图标
			breadcrumbIcon: true,
			// 标签页
			tabs: true,
			// 标签页图标
			tabsIcon: true,
			// 页脚
			footer: true,
			// 当前页面是否全屏
			maximize: false
		}
	}),
	getters: {},
	actions: {
		// setToken
		setToken(token) {
			this.token = token;
		},
		// setUserInfo
		setUserInfo(userInfo) {
			this.userInfo = userInfo;
		},
		// setAssemblySizeSize
		setAssemblySizeSize(assemblySize) {
			this.assemblySize = assemblySize;
		},
		// updateLanguage
		updateLanguage(language) {
			this.language = language;
		},
		// setThemeConfig
		setThemeConfig(themeConfig) {
			this.themeConfig = themeConfig;
		}
	},
	persist: piniaPersistConfig("GlobalState")
});

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
