<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
	<component :is="LayoutComponents[themeConfig.layout]" />
	<ThemeDrawer />
</template>

<script setup name="layout">
import { computed } from "vue";
import { GlobalStoreHooks } from "@/stores";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutTransverse from "./LayoutTransverse/index.vue";
import LayoutColumns from "./LayoutColumns/index.vue";

const LayoutComponents = {
	vertical: LayoutVertical,
	classic: LayoutClassic,
	transverse: LayoutTransverse,
	columns: LayoutColumns
};

const globalStore = GlobalStoreHooks();
const themeConfig = computed(() => globalStore.themeConfig);
</script>

<style scoped lang="less">
.layout {
	min-width: 740px;
}
</style>
