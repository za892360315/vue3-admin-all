import { AuthStoreHooks } from "@/stores/modules/auth";

/**
 * @description 页面按钮权限
 * */
export const useAuthButtons = () => {
	const authStore = AuthStoreHooks();
	const authButtons = authStore.authButtonListGet || [];
	let currentPageAuthButton = {};
	authButtons.authButton.forEach(item => (currentPageAuthButton[item] = true));
	return currentPageAuthButton;
};
