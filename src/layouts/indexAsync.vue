<!-- 💥 这里是异步加载 LayoutComponents -->
<template>
	<suspense>
		<template #default>
			<component :is="LayoutComponents[themeConfig.layout]" />
		</template>
		<template #fallback>
			<Loading />
		</template>
	</suspense>
	<ThemeDrawer />
</template>

<script setup name="layout">
import { computed, defineAsyncComponent } from "vue";
import { GlobalStoreHooks } from "@/stores";
import Loading from "@/components/Loading/index.vue";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";

const LayoutComponents = {
	vertical: defineAsyncComponent(() => import("./LayoutVertical/index.vue")),
	classic: defineAsyncComponent(() => import("./LayoutClassic/index.vue")),
	transverse: defineAsyncComponent(() => import("./LayoutTransverse/index.vue")),
	columns: defineAsyncComponent(() => import("./LayoutColumns/index.vue"))
};

const globalStore = GlobalStoreHooks();
const themeConfig = computed(() => globalStore.themeConfig);
</script>

<style scoped lang="less">
.layout {
	min-width: 740px;
}
</style>
