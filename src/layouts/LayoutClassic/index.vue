<!-- 经典布局 -->
<template>
	<el-container class="layout">
		<el-header>
			<div class="header-lf">
				<div class="logo flx-center">
					<img src="@/assets/images/logo.svg" alt="logo" />
					<span>{{ APPNAME }}</span>
				</div>
				<ToolBarLeft />
			</div>
			<ToolBarRight />
		</el-header>
		<el-container class="classic-content">
			<el-aside>
				<div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
					<el-scrollbar>
						<el-menu
							:default-active="activeMenu"
							:router="false"
							:collapse="isCollapse"
							:collapse-transition="false"
							:unique-opened="true"
							background-color="#ffffff"
							text-color="#303133"
						>
							<SubMenu :menuList="menuList" />
						</el-menu>
					</el-scrollbar>
				</div>
			</el-aside>
			<el-container class="classic-main">
				<MainApp />
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup name="layoutClassic">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { GlobalStoreHooks } from "@/stores";
import { AuthStoreHooks } from "@/stores/modules/auth";
import MainApp from "@/layouts/components/Main/index.vue";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";
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
.classic {
	.classic-content {
		height: calc(100% - 55px); // 减去头部高度
		.classic-main {
			display: flex;
			flex-direction: column;
		}
	}
	.el-menu,
	.el-menu--popup {
		.el-menu-item {
			&.is-active {
				background: var(--el-color-primary-light-9);
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

	// guide
	#driver-highlighted-element-stage {
		background-color: #606266 !important;
	}
}
</style>
