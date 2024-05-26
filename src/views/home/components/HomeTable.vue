<template>
	<div class="card" style="height: 400px">
		<el-tag type="success">每天的计划</el-tag>
		<el-divider />
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="时间" width="120" />
			<el-table-column prop="name" label="计划" />
		</el-table>
	</div>
</template>

<script setup>
const tableData = [
	{
		date: "早上8点",
		name: "起床"
	},
	{
		date: "早上9点",
		name: "coding"
	},
	{
		date: "中午",
		name: "午休"
	},
	{
		date: "下午",
		name: "coding"
	},
	{
		date: "晚上",
		name: "运动"
	}
];
</script>
