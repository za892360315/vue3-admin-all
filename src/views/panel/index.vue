<template>
	<el-row :gutter="10">
		<el-col :xs="24" :sm="24" :md="16" :lg="16">
			<div class="card h-300">
				<div class="count">
					<CountTo prefix="￥" :cutting="true" :endVal="999999" />
				</div>
				<progressBar />
				<div class="graphical">
					<PanceContact />
				</div>
			</div>
		</el-col>
		<el-col :xs="24" :sm="24" :md="8" :lg="8">
			<div class="card h-300">
				<div class="ranking-title">排名</div>
				<div class="ranking">
					<img
						src="https://p6-pc-sign.douyinpic.com/aweme-avatar/tos-cn-avt-0015_e7e88568ac2dcb215ec5fca0114ef2f8~tplv-8yspqt5zfm-300x300.webp?x-expires=1704531600&x-signature=LKmA5Y8zOLuSY%2B04CVEXHi3BXL4%3D&from=2480802190"
						class="ranking-user user-left"
					/>
				</div>
				<div class="ranking-table">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="开发语言" width="120" />
						<el-table-column prop="section" label="部门" width="120">
							<template #default="scope">
								<el-tag size="small">{{ scope.row.section }}</el-tag>
							</template>
						</el-table-column>
						<el-table-column prop="code" label="代码提交量">
							<template #default="scope">
								<CountTo :cutting="true" :endVal="scope.row.code" />
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</el-col>
		<el-col :xs="24" :sm="24" :md="24" :lg="24">
			<div class="card" style="margin-top: 10px; height: 400px">
				<PanceLIne />
			</div>
		</el-col>
	</el-row>
</template>

<script setup name="panel">
import CountTo from "@/components/CountTo";
import progressBar from "./components/progressBar.vue";
import PanceContact from "./components/PanceContact.vue";
import PanceLIne from "./components/PanceLIne.vue";
const tableData = [
	{
		name: "前端",
		section: "开发部",
		code: 10000
	},
	{
		name: "java",
		section: "企业IT部",
		code: 10000
	},
	{
		name: "go",
		section: "效能部",
		code: 199999
	}
];
</script>

<style lang="less" scoped>
.h-300 {
	height: 300px;
}
.h-400 {
	height: 400px;
}
.count {
	font-size: 24px;
	font-weight: bold;
}
.graphical {
	display: flex;
	height: 145px;
}
.ranking-title {
	text-align: center;
	padding-bottom: 10px;
	font-weight: bold;
}
.ranking {
	width: 60px;
	height: 60px;
	margin: 0 auto;
	.ranking-user {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.user-left {
		animation: uleft 0.4s linear;
		animation-fill-mode: forwards;
	}
	.user-right {
		position: absolute;
		top: 0;
		right: 0;
		animation: uright 0.4s linear;
		animation-fill-mode: forwards;
	}
	@keyframes uleft {
		0% {
			left: 0;
		}
		100% {
			left: -65px;
		}
	}
	@keyframes uright {
		0% {
			left: 0;
		}
		100% {
			left: 65px;
		}
	}
}
.ranking-table {
	margin-top: 6px;
	display: flex;
	justify-content: space-around;
}
</style>
