<template>
	<el-config-provider :locale="i18nLocale" :button="config" :size="assemblySize">
		<router-view></router-view>
	</el-config-provider>
</template>

<script setup>
import { reactive, computed } from "vue";
import { GlobalStoreHooks } from "@/stores";
import { useTheme } from "@/hooks/useTheme";
import { getBrowserLang } from "@/utils/util";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
// 使用主题
useTheme();

const globalStore = GlobalStoreHooks();
// 配置element按钮文字中间是否有空格
const config = reactive({
	autoInsertSpace: false
});

// element 语言配置
const i18nLocale = computed(() => {
	if (globalStore.language && globalStore.language == "zh") return zhCn;
	if (globalStore.language == "en") return en;
	return getBrowserLang() == "zh" ? zhCn : en;
});

// 配置全局组件大小 (small/default(medium)/large)
const assemblySize = computed(() => globalStore.assemblySize);
</script>
