<template>
	<el-icon class="collapse-icon" @click="collapse">
		<component :is="'fold'"></component>
	</el-icon>
</template>

<script setup>
import { computed } from "vue";
import { GlobalStoreHooks } from "@/stores";

const globalStore = GlobalStoreHooks();
const themeConfig = computed(() => globalStore.themeConfig);

const collapse = () => {
	globalStore.setThemeConfig({ ...themeConfig.value, isCollapse: !themeConfig.value.isCollapse });
};
</script>

<style scoped lang="less">
.collapse-icon {
	margin-right: 20px;
	font-size: 22px;
	cursor: pointer;
}
</style>
