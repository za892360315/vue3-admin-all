<template>
	<div ref="echartsRef" class="card content-box" style="height: 400px"></div>
</template>

<script setup name="columnChart">
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref();

onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	let option = {
		legend: {
			selectedMode: false
		},
		grid: {
			top: 20,
			bottom: 20,
			left: 30,
			right: 20
		},
		yAxis: {
			type: "value"
		},
		xAxis: {
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
		},
		series: [
			{
				name: "Direct",
				type: "bar",
				stack: "total",
				barWidth: "60%",
				label: {
					show: true,
					formatter: params => Math.round(params.value * 1000) / 10 + "%"
				},
				data: [
					0.062111801242236024, 0.1819277108433735, 0.1775811209439528, 0.18659217877094972, 0.17333333333333334,
					0.12941176470588237, 0.1245136186770428
				]
			},
			{
				name: "Mail Ad",
				type: "bar",
				stack: "total",
				barWidth: "60%",
				label: {
					show: true,
					formatter: params => Math.round(params.value * 1000) / 10 + "%"
				},
				data: [
					0.19875776397515527, 0.07951807228915662, 0.05958702064896755, 0.07486033519553073, 0.04, 0.09019607843137255,
					0.08171206225680934
				]
			},
			{
				name: "Affiliate Ad",
				type: "bar",
				stack: "total",
				barWidth: "60%",
				label: {
					show: true,
					formatter: params => Math.round(params.value * 1000) / 10 + "%"
				},
				data: [
					0.13664596273291926, 0.10963855421686747, 0.11268436578171091, 0.13072625698324022, 0.1288888888888889,
					0.12941176470588237, 0.12062256809338522
				]
			},
			{
				name: "Video Ad",
				type: "bar",
				stack: "total",
				barWidth: "60%",
				label: {
					show: true,
					formatter: params => Math.round(params.value * 1000) / 10 + "%"
				},
				data: [
					0.09316770186335403, 0.12771084337349398, 0.11858407079646018, 0.08603351955307263, 0.08444444444444445,
					0.12941176470588237, 0.15953307392996108
				]
			},
			{
				name: "Search Engine",
				type: "bar",
				stack: "total",
				barWidth: "60%",
				label: {
					show: true,
					formatter: params => Math.round(params.value * 1000) / 10 + "%"
				},
				data: [
					0.5093167701863354, 0.5012048192771085, 0.5315634218289086, 0.5217877094972067, 0.5733333333333334, 0.5215686274509804,
					0.5136186770428015
				]
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
