<template>
	<transition
		name="expand"
		@enter="enter"
		@after-enter="afterEnter"
		@leave="leave"
	>
		<slot />
	</transition>
</template>

<script>
export default {
	name: 'TransitionExpand',
	methods: {
		enter(element) {
			const { width } = getComputedStyle(element);

			element.style.width = width;
			element.style.position = 'absolute';
			element.style.visibility = 'hidden';
			element.style.height = 'auto';

			const { height } = getComputedStyle(element);

			element.style.width = null;
			element.style.position = null;
			element.style.visibility = null;
			element.style.height = 0;

			// Force repaint to make sure the
			// animation is triggered correctly.
			/* eslint-disable */
			getComputedStyle(element).height;
			/* eslint-enable */

			// Trigger the animation.
			// We use `setTimeout` because we need
			// to make sure the browser has finished
			// painting after setting the `height`
			// to `0` in the line above.
			setTimeout(() => {
				element.style.height = height;
			});
		},
		afterEnter(element) {
			element.style.height = 'auto';
		},
		leave(element) {
			const { height } = getComputedStyle(element);
			
			element.style.height = height;

			// Force repaint to make sure the
			// animation is triggered correctly.
			/* eslint-disable */
			getComputedStyle(element).height;
			/* eslint-enable */

			setTimeout(() => {
				element.style.height = 0;
			});
		}
	}
};
</script>

<style scoped>
* {
	will-change: height;
	transform: translateZ(0);
	backface-visibility: hidden;
	perspective: 1000px;
}

.expand-enter-active,
.expand-leave-active {
	transition: height 0.4s ease-in-out;
	overflow: hidden;
}

.expand-enter,
.expand-leave-to {
	height: 0;
}
</style>
