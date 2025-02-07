import { computed, onBeforeMount } from "vue";
import { getLightColor, getDarkColor } from "@/utils/tool";
import { GlobalStoreHooks } from "@/stores";
import { DEFAULT_PRIMARY } from "@/config/config";
import { ElMessage } from "element-plus";

/**
 * @description 切换主题
 * */
export const useTheme = () => {
	const globalStore = GlobalStoreHooks();
	const themeConfig = computed(() => globalStore.themeConfig);

	// 修改主题颜色
	const changePrimary = val => {
		if (!val) {
			val = DEFAULT_PRIMARY;
			ElMessage({ type: "success", message: `主题颜色已重置为 ${DEFAULT_PRIMARY}` });
		}
		globalStore.setThemeConfig({ ...themeConfig.value, primary: val });
		document.documentElement.style.setProperty("--el-color-primary", themeConfig.value.primary);
		document.documentElement.style.setProperty(
			"--el-color-primary-dark-2",
			themeConfig.value.isDark
				? `${getLightColor(themeConfig.value.primary, 0.2)}`
				: `${getDarkColor(themeConfig.value.primary, 0.3)}`
		);
		// 颜色加深或变浅
		for (let i = 1; i <= 9; i++) {
			document.documentElement.style.setProperty(
				`--el-color-primary-light-${i}`,
				themeConfig.value.isDark
					? `${getDarkColor(themeConfig.value.primary, i / 10)}`
					: `${getLightColor(themeConfig.value.primary, i / 10)}`
			);
		}
	};
	// 切换黑夜模式
	const switchDark = () => {
		const body = document.documentElement;
		if (themeConfig.value.isDark) body.setAttribute("class", "dark");
		else body.setAttribute("class", "");
		changePrimary(themeConfig.value.primary);
	};

	onBeforeMount(() => {
		changePrimary(themeConfig.value.primary);
	});

	// 初始化 theme 配置
	const initTheme = () => {
		switchDark();
		changePrimary(themeConfig.value.primary);
	};

	return {
		changePrimary,
		switchDark,
		initTheme
	};
};
