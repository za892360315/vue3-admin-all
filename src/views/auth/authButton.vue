<template>
	<div>
		<el-card>
			<el-divider content-position="left">自定义指令控制(单条件)</el-divider>
			<el-button type="primary" v-authButton="'add'">添加</el-button>
			<el-button type="waring" v-authButton="'remove'">删除</el-button>
			<el-divider content-position="left">自定义指令控制(多条件)</el-divider>
			<el-button type="primary" v-authButton="['add', 'remove']">添加 | 删除</el-button>
			<el-divider content-position="left">Hooks控制</el-divider>
			<el-button type="primary" v-if="isButton.add">添加</el-button>
			<el-button type="danger" v-if="isButton.remove">添加</el-button>
		</el-card>
	</div>
</template>
<script setup>
import { useAuthButtons } from "@/hooks/useAuthButtons";
const isButton = useAuthButtons();
</script>
