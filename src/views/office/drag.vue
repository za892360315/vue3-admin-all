<template>
	<draggable
		class="card grid-container"
		v-model="gridList"
		item-key="id"
		animation="300"
		chosenClass="chosen"
		forceFallback="true"
	>
		<template #item="{ element }">
			<div :class="'item' + ' ' + 'item-' + element.id">
				{{ element.name }}
			</div>
		</template>
	</draggable>
</template>

<script setup name="drag">
import { ref } from "vue";
import draggable from "vuedraggable/src/vuedraggable";

let gridList = ref([
	{ id: 1, name: "buduo 学前端1" },
	{ id: 2, name: "buduo 学前端2" },
	{ id: 3, name: "buduo 学前端3" },
	{ id: 4, name: "buduo 学前端4" },
	{ id: 5, name: "buduo 学前端5" },
	{ id: 6, name: "buduo 学前端6" },
	{ id: 7, name: "buduo 学前端7" },
	{ id: 8, name: "buduo 学前端8" },
	{ id: 9, name: "buduo 学前端9" }
]);
</script>

<style scoped lang="less">
.grid-container {
	display: grid;
	grid-template-rows: 33.3% 33.3% 33.3%;
	grid-template-columns: 33.3% 33.3% 33.3%;
	height: 100%;
	.item {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 25px;
		color: #ffffff;
		cursor: move;
		border: 1px solid #e5e4e9;
	}
}
.item-1 {
	background-color: #f44336;
}
.item-2 {
	background-color: #9c27b0;
}
.item-3 {
	background-color: #e91e63;
}
.item-4 {
	background-color: #009688;
}
.item-5 {
	background-color: #03a9f4;
}
.item-6 {
	background-color: #ff9800;
}
.item-7 {
	background-color: #8bc34a;
}
.item-8 {
	background-color: #9e9e9e;
}
.item-9 {
	background-color: #673ab7;
}
.chosen {
	border: 2px solid #795548 !important;
}
</style>
