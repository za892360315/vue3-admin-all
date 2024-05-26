<template>
	<el-dropdown trigger="click">
		<div class="avatar">
			<img
				src="https://p6-pc-sign.douyinpic.com/aweme-avatar/tos-cn-avt-0015_e7e88568ac2dcb215ec5fca0114ef2f8~tplv-8yspqt5zfm-300x300.webp?x-expires=1704531600&x-signature=LKmA5Y8zOLuSY%2B04CVEXHi3BXL4%3D&from=2480802190"
				alt="avatar"
			/>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="logout">
					<el-icon><SwitchButton /></el-icon>退出登录
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup>
import { GlobalStoreHooks } from "@/stores";
import { LOGIN_URL } from "@/config/config";
import { useRouter } from "vue-router";

const router = useRouter();
const globalStore = GlobalStoreHooks();

// 退出登录
const logout = () => {
	globalStore.setToken("");
	router.replace(LOGIN_URL);
};
</script>

<style scoped lang="less">
.avatar {
	width: 40px;
	height: 40px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 50%;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
