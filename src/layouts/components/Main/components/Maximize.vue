<template>
	<div class="maximize" @click="exitMaximize">
		<el-icon><Close /></el-icon>
	</div>
</template>

<script setup>
import { computed, watch } from "vue";
import { GlobalStoreHooks } from "@/stores";

const globalStore = GlobalStoreHooks();
const themeConfig = computed(() => globalStore.themeConfig);
const exitMaximize = () => {
	globalStore.setThemeConfig({ ...themeConfig.value, maximize: false });
};

// 监听当前页是否全屏，动态添加 class
watch(
	() => themeConfig.value.maximize,
	() => {
		const app = document.getElementById("app");
		if (themeConfig.value.maximize) app.classList.add("main-maximize");
		else app.classList.remove("main-maximize");
	},
	{ immediate: true }
);
</script>

<style scoped lang="less">
.maximize {
	position: fixed;
	top: -25px;
	right: -25px;
	z-index: 999;
	width: 52px;
	height: 52px;
	cursor: pointer;
	background-color: var(--el-color-info);
	border-radius: 50%;
	opacity: 0.7;
	&:hover {
		background-color: var(--el-color-info-dark-2);
	}
	.el-icon {
		position: relative;
		top: 68%;
		left: 32%;
		font-size: 16px;
		color: #ffffff;
		transform: translate(-50%, -50%);
	}
}
</style>
