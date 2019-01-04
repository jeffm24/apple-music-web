<template>
	<button
		type="button"
		class="album btn btn-outline-secondary card rounded"
		:class="{ active, shadow: (!active && hover), 'shadow-sm': (!active && !hover) }"
		@mouseover="hover = true"
		@mouseout="hover = false"
		@click="$emit('toggled', id)"
	>
		<img
			:src="artwork"
			class="card-img-top mx-auto"
		>
		<div class="card-body p-2">
			<h5 class="card-title m-0">
				{{ title }}
			</h5>
			<p class="card-text mt-1">
				{{ artist }}
			</p>
		</div>
	</button>
</template>

<script>
export default {
	name: 'Album',
	props: {
		id: { type: String, required: true },
		title: { type: String, required: true },
		artist: { type: String, required: true },
		artwork: { type: String, required: true },
		active: { type: Boolean, required: true }
	},
	data() {
		return {
			hover: false
		};
	},
	computed: {},
	methods: {}
};
</script>
