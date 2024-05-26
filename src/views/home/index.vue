<template>
	<div class="app-container">
		<el-row :gutter="10">
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<HomeUser />
			</el-col>
			<el-col :xs="24" :sm="24" :md="6" :lg="6">
				<HomeCount :list="countListData[0]" />
				<HomeCount :list="countListData[1]" />
			</el-col>
			<el-col :xs="24" :sm="24" :md="6" :lg="6">
				<HomeCount :list="countListData[2]" />
				<HomeCount :list="countListData[3]" />
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<HomeTable />
			</el-col>
			<el-col :xs="24" :sm="24" :md="16" :lg="16">
				<HomeBar />
			</el-col>
		</el-row>
	</div>
</template>

<script setup name="home">
import HomeUser from "./components/HomeUser.vue";
import HomeCount from "./components/HomeCount.vue";
import HomeTable from "./components/HomeTable.vue";
// import HomeLine from "./components/HomeLine.vue";
import HomeBar from "./components/HomeBar.vue";
const countListData = [
	{
		name: "抖音",
		count: 2024,
		icon: new URL("@/assets/images/baseball-cap.png", import.meta.url).href
	},
	{
		name: "小红书",
		count: 2024,
		icon: new URL("@/assets/images/basketball-clothes.png", import.meta.url).href
	},
	{
		name: "B站",
		count: 2024,
		icon: new URL("@/assets/images/clothes-crew-neck.png", import.meta.url).href
	},
	{
		name: "视频号",
		count: 2024,
		icon: new URL("@/assets/images/clothes-pants-short.png", import.meta.url).href
	}
];
</script>
