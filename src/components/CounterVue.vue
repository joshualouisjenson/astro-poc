<template>
	<div class="counter">
		<button @click="subtract()">-</button>
		<pre>{{ $count }}</pre>
		<button @click="add()">+</button>
	</div>
	<div class="counter-message">
		<slot />
	</div>
</template>

<script lang="ts">
import { count } from '../stores/count';
import { useStore } from '@nanostores/vue';
export default {
	setup() {
		const $count = useStore(count);
		const add = () => (count.set($count.value + 1));
		const subtract = () => (count.set($count.value - 1));

		return {
			$count,
			add,
			subtract,
		};
	},
};
</script>

<style>
.counter {
	display: grid;
	font-size: 2em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 2em;
	place-items: center;
}

.counter-message {
	text-align: center;
}
</style>
