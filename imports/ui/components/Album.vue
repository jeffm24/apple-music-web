<template>
	<div :class="`col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1`">
		<button
			type="button"
			:class="`btn btn-outline-secondary btn-block card rounded align-top ${active ? 'active' : ''} ${shadowClass}`"
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
	</div>
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
	computed: {
		shadowClass() {
			let shadowClass = '';

			if (!this.active) {
				shadowClass = (this.hover) ? 'shadow' : 'shadow-sm';
			}

			return shadowClass;
		}
	},
	methods: {}
};
</script>
