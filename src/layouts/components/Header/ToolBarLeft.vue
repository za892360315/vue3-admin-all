<template>
	<div class="tool-bar-lf">
		<CollapseIcon id="collapseIcon" />
		<Breadcrumb id="breadcrumb" v-if="themeConfig.breadcrumb" />
	</div>
</template>

<script setup>
import { computed } from "vue";
import { GlobalStoreHooks } from "@/stores";
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/Breadcrumb.vue";

const globalStore = GlobalStoreHooks();
const themeConfig = computed(() => globalStore.themeConfig);
</script>

<style scoped lang="less">
.tool-bar-lf {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
