<template>
	<div style="height: 100%" v-waterMarker="waterMarker"></div>
</template>
<script setup name="watermark">
import { reactive } from "vue";
const waterMarker = reactive({
	text: "buduo 学前端",
	textColor: "rgba(0,0,0,0.6)"
});
</script>
