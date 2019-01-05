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

<style lang="scss" scoped>
.album {
	position: relative;

	&.active {
		&::before, &::after {
			content: '';
			cursor: default;
			pointer-events: none;

			z-index: 1;
			position: absolute;
			bottom: -18px;
			left: 50%;
			transform: translateX(-50%);

			width: 0; 
			height: 0;
		}
		&::before {
			border-left: 11px solid transparent;
			border-right: 11px solid transparent;
			border-bottom: 11px solid rgba(0, 0, 0, 0.125);
		}
		&::after {
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-bottom: 10px solid #f8f9fa;
		}
	}
}
</style>
