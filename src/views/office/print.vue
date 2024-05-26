<template>
	<div class="card">
		<div id="printTable">
			<p style="color: blue; font-weight: bold">加上样式</p>
			<p>普通不带样式</p>
			<img src="https://hbimg.huaban.com/5b33ebe252d957e9668d1e329be3fa5068040c0e12c9d-mSZnPl_fw658" alt="" />
		</div>
		<el-button type="primary" @click="bindPrint">打印</el-button>
	</div>
</template>
<script setup name="print">
import printJS from "print-js";

const bindPrint = () => {
	printJS({
		printable: "printTable",
		type: "html",
		header: null,
		targetStyles: ["*"],
		style: "@page {margin:0 10mm}"
	});
};
</script>
