<!-- 纵向布局 -->
<template>
	<el-container class="layout">
		<el-aside>
			<div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
				<div class="logo flx-center">
					<img src="@/assets/images/logo.svg" alt="logo" />
					<span v-show="!isCollapse">{{ APPNAME }}</span>
				</div>
				<el-scrollbar>
					<el-menu
						:default-active="activeMenu"
						:router="false"
						:collapse="isCollapse"
						:collapse-transition="false"
						:unique-opened="true"
						background-color="#191a20"
						text-color="#bdbdc0"
						active-text-color="#ffffff"
					>
						<SubMenu :menuList="menuList" />
					</el-menu>
				</el-scrollbar>
			</div>
		</el-aside>
		<el-container>
			<el-header>
				<ToolBarLeft />
				<ToolBarRight />
			</el-header>
			<MainApp />
		</el-container>
	</el-container>
</template>

<script setup name="layoutVertical">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { GlobalStoreHooks } from "@/stores";
import { AuthStoreHooks } from "@/stores/modules/auth";
import MainApp from "@/layouts/components/Main/index.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";
import { APP_NAME } from "@/config/config";
import { setAuthMenuList } from "@/utils/util";

const APPNAME = APP_NAME;

const route = useRoute();
const authStore = AuthStoreHooks();
const globalStore = GlobalStoreHooks();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
const menuList = computed(() => setAuthMenuList(authStore.showMenuListGet));
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);
</script>

<style scoped lang="less">
@import "./index.less";
</style>

<style lang="less">
.vertical {
	.el-menu,
	.el-menu--popup {
		.el-menu-item {
			&.is-active {
				background: #060708;
				&::before {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					width: 4px;
					content: "";
					background: var(--el-color-primary);
				}
			}
		}
	}
}
</style>
