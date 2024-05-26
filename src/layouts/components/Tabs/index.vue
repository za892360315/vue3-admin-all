<template>
	<div class="tabs-box">
		<div class="tabs-menu">
			<el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
				<el-tab-pane v-for="item in tabsMenuList" :key="item.path" :label="item.title" :name="item.path" :closable="item.close">
					<template #label>
						<el-button
							size="default"
							:icon="themeConfig.tabsIcon ? item.icon : ''"
							:type="tabsMenuValue === item.path ? 'primary' : ''"
						>
							{{ item.title }}
						</el-button>
					</template>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script setup>
import Sortable from "sortablejs";
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GlobalStoreHooks } from "@/stores";
import { TabsStoreHooks } from "@/stores/modules/tabs";
import { AuthStoreHooks } from "@/stores/modules/auth";
import { KeepAliveStoreHooks } from "@/stores/modules/keepAlive";

const route = useRoute();
const router = useRouter();
const tabStore = TabsStoreHooks();
const globalStore = GlobalStoreHooks();
const authStore = AuthStoreHooks();
const keepAliveStore = KeepAliveStoreHooks();

const tabsMenuValue = ref(route.fullPath);
const tabsMenuList = computed(() => tabStore.tabsMenuList);
const themeConfig = computed(() => globalStore.themeConfig);

onMounted(() => {
	tabsDrop();
	initTabs();
});

// 标签拖拽排序
const tabsDrop = () => {
	Sortable.create(document.querySelector(".el-tabs__nav"), {
		draggable: ".el-tabs__item",
		animation: 300,
		onEnd({ newIndex, oldIndex }) {
			const tabsList = [...tabStore.tabsMenuList];
			const currRow = tabsList.splice(oldIndex, 1)[0];
			tabsList.splice(newIndex, 0, currRow);
			tabStore.setTabs(tabsList);
		}
	});
};

// 初始化需要固定的标签
const initTabs = () => {
	authStore.flatMenuListGet.forEach(item => {
		if (item.meta.isAffix && !item.meta.isHide && !item.meta.isFull) {
			const tabsParams = {
				icon: item.meta.icon,
				title: item.title,
				path: item.path,
				name: item.name,
				close: !item.meta.isAffix
			};
			tabStore.addTabs(tabsParams);
		}
	});
};

// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
	() => route.fullPath,
	() => {
		if (route.meta.isFull) return;
		tabsMenuValue.value = route.fullPath;
		const findItem = authStore.flatMenuListGet.find(e => e.path === route.fullPath);
		const tabsParams = {
			icon: route.meta.icon,
			title: findItem.title,
			path: route.fullPath,
			name: route.name,
			close: !route.meta.isAffix
		};
		tabStore.addTabs(tabsParams);
		route.meta.isKeepAlive && keepAliveStore.addKeepLiveName(route.name);
	},
	{
		immediate: true
	}
);

// Tab Click
const tabClick = tabItem => {
	const fullPath = tabItem.props.name;
	router.push(fullPath);
};

// Remove Tab
const tabRemove = fullPath => {
	const name = tabStore.tabsMenuList.filter(item => item.path == fullPath)[0].name || "";
	keepAliveStore.removeKeepLiveName(name);
	tabStore.removeTabs(fullPath, fullPath == route.fullPath);
};
</script>

<style scoped lang="less">
.tabs-box {
	background-color: #ffffff;
	:deep(.tabs-menu) {
		position: relative;
		width: 100%;
		.el-dropdown {
			position: absolute;
			top: 8px;
			right: 13px;
		}
		.tabs-icon {
			top: 2px;
			font-size: 15px;
		}
		.el-tabs__nav-wrap {
			position: absolute;
			width: calc(100% - 110px);
		}
		.el-tabs--card > .el-tabs__header {
			box-sizing: border-box;
			height: 40px;
			margin: 0;
		}
		.el-tabs--card > .el-tabs__header .el-tabs__nav {
			border: none;
		}
		.el-tabs--card > .el-tabs__header .el-tabs__item {
			color: #cccccc;
			border: none;
			padding: 0 4px;
		}
		.el-tabs__item .is-icon-close svg {
			margin-top: 0.5px;
		}
	}
}
</style>
