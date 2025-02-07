<!-- 分栏布局 -->
<template>
	<el-container class="layout">
		<div class="aside-split">
			<div class="logo flx-center">
				<img src="@/assets/images/logo.svg" alt="logo" />
			</div>
			<el-scrollbar>
				<div class="split-list">
					<div
						class="split-item"
						:class="{ 'split-active': splitActive == item.path || `/${splitActive.split('/')[1]}` == item.path }"
						v-for="item in menuList"
						:key="item.path"
						@click="changeSubMenu(item)"
					>
						<el-icon>
							<component :is="item.meta.icon"></component>
						</el-icon>
						<span class="title">{{ item.title }}</span>
					</div>
				</div>
			</el-scrollbar>
		</div>
		<el-aside :class="{ 'not-aside': !subMenu.length }" :style="{ width: isCollapse ? '65px' : '210px' }">
			<div class="logo flx-center">
				<span v-show="subMenu.length">Diverse Admin</span>
			</div>
			<el-scrollbar>
				<el-menu
					:default-active="activeMenu"
					:router="false"
					:collapse="isCollapse"
					:collapse-transition="false"
					:unique-opened="true"
					background-color="#ffffff"
				>
					<SubMenu :menuList="subMenu" />
				</el-menu>
			</el-scrollbar>
		</el-aside>
		<el-container>
			<el-header>
				<ToolBarLeft />
				<ToolBarRight />
			</el-header>
			<Main />
		</el-container>
	</el-container>
</template>

<script setup name="layoutColumns">
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GlobalStoreHooks } from "@/stores";
import { AuthStoreHooks } from "@/stores/modules/auth";
import { TABS_WHITE_LIST } from "@/config/config";
import Main from "@/layouts/components/Main/index.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";
import { setAuthMenuList } from "@/utils/util";

const route = useRoute();
const router = useRouter();
const authStore = AuthStoreHooks();
const globalStore = GlobalStoreHooks();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
const menuList = computed(() => setAuthMenuList(authStore.showMenuListGet));

const isCollapse = computed(() => globalStore.themeConfig.isCollapse);

const subMenu = ref([]);
const splitActive = ref("");
watch(
	() => [menuList, route],
	() => {
		// 当前路由存在 tabs 白名单中 || 当前菜单没有数据直接 return
		if (TABS_WHITE_LIST.includes(route.path) || !menuList.value.length) return;
		splitActive.value = route.path;
		const menuItem = menuList.value.filter(item => route.path.includes(item.path));
		if (menuItem[0].children?.length) return (subMenu.value = menuItem[0].children);
		subMenu.value = [];
	},
	{
		deep: true,
		immediate: true
	}
);

// 切换 SubMenu
const changeSubMenu = item => {
	splitActive.value = item.path;
	if (item.children?.length) return (subMenu.value = item.children);
	subMenu.value = [];
	router.push(item.path);
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>

<style lang="less">
.columns {
	.el-menu,
	.el-menu--popup {
		.el-menu-item {
			&.is-active {
				background: var(--el-color-primary-light-9);
				&::before {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					width: 4px;
					content: "";
					background: var(--el-color-primary);
				}
			}
		}
	}
}
</style>
