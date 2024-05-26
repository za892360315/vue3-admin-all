<template>
	<div ref="echartsRef" class="echarts-content"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref();
const data = ref([
	{ value: 1048, name: "Search Engine" },
	{ value: 735, name: "Direct" },
	{ value: 580, name: "Email" },
	{ value: 484, name: "Union Ads" },
	{ value: 300, name: "Video Ads" }
]);
onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	let option = {
		grid: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		},
		legend: {
			orient: "vertical",
			left: "left"
		},
		tooltip: {
			trigger: "item"
		},
		color: ["#F56C6C", "#409EFF", "#67C23A"],
		series: [
			{
				name: "Access From",
				type: "pie",
				radius: ["40%", "70%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: "#fff",
					borderWidth: 2
				},
				label: {
					show: false,
					position: "center"
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: "bold"
					}
				},
				labelLine: {
					show: false
				},
				data: data.value
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
