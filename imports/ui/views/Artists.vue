<template>
  	<div id="artists">
		<h1>Artists</h1>
		<div class="row align-items-center">
			<ImgLink v-for="n in 20"
				:key="n"
				:id="getRandomId()"
				type="artist"
				title="Test Artist"
				imgSrc="/logo.png"
			></ImgLink>
    	</div>
  	</div>
</template>

<script>
import ImgLink from '/imports/ui/components/ImgLink';
import { Random } from 'meteor/random';

export default {
	name: 'Artists',
	components: {
		ImgLink
	},
	data: {},
	methods: {
		getRandomId() {
			return Random.id();
		}
	}
};
</script>
