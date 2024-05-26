<template>
	<div class="card">
		<div id="table">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="date" label="开发者名字" width="150" />
				<el-table-column prop="level" label="级别" width="150" />
				<el-table-column prop="address" label="address" width="150" />
				<el-table-column prop="state" label="state" width="150" />
				<el-table-column prop="city" label="city" width="150" />
				<el-table-column prop="zip" label="zip" />
			</el-table>
		</div>

		<el-button type="primary" @click="bindPrint" style="margin-top: 10px">导出</el-button>
		<el-upload
			class="upload-demo"
			action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
			multiple
			:on-change="handleChange"
		>
			<el-button class="import-button" type="success">导入</el-button>
		</el-upload>
	</div>
</template>
<script setup name="excel">
import { reactive } from "vue";
import { utils, write, read } from "xlsx";
import FileSaver from "file-saver";
import { readFile } from "@/utils/util.js";
const bindPrint = () => {
	const wb = utils.table_to_book(document.getElementById("table"), {
		raw: true
	});
	const wbout = write(wb, {
		bookType: "xlsx",
		bookSST: true,
		type: "array"
	});
	FileSaver.saveAs(
		new Blob([wbout], {
			type: "application/octet-stream"
		}),
		Date.now() + ".xlsx"
	);
};
const tableData = reactive([
	{
		date: "buduo 学前端1",
		level: "资深前端工程师",
		state: "state1",
		city: "北京",
		address: "科技园",
		zip: "zip1"
	},
	{
		date: "buduo 学前端2",
		level: "初级前端工程师",
		state: "state2",
		city: "北京",
		address: "科技园",
		zip: "zip2"
	},
	{
		date: "buduo 学前端3",
		level: "高级前端工程师",
		state: "state3",
		city: "北京",
		address: "科技园",
		zip: "zip3"
	}
]);

const handleChange = async e => {
	let file = e.raw;
	if (!file) return;
	console.log(file);
	// 读取file文件的内容(转换为json格式)
	let data = await readFile(file);
	//console.log(data); //解析出的二进制文件
	// type :'binary' 类型为二进制
	let eleData = read(data, { type: "binary" });
	//console.log(eleData);
	let eleDataSheet = eleData.Sheets[eleData.SheetNames[0]];
	eleData = utils.sheet_to_json(eleDataSheet); // 将解析出的数据转换为json格式（xlsx自带的方法）
	//eleData最终结果
	tableData.push.apply(tableData, eleData);
};
</script>
<style scoped lang="less">
.upload-demo {
	display: inline-block;
	.import-button {
		margin-top: 10px;
	}
}
</style>
