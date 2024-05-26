<template>
	<div>
		<input v-model="content" @keyup.enter="handleInput(content)" />
		<hr />
		<ruby>
			伟
			<rp>(</rp>
			<rt>wei</rt>
			<rp>)</rp>
		</ruby>
	</div>
</template>
<script setup>
import { ref } from "vue";
import { pinyin } from "pinyin-pro";
const res = pinyin("汉语拼音", {
	type: "array"
});
console.log(res);
const content = ref("");
const reg = /[\u4e00-\u9fa5]/;
function handleInput(char) {
	return reg.test(char);
}
</script>
<!-- https://github.com/zh-lx/pinyin-pro -->
