<template>
	<div class="home">
		<img alt="Vue logo" src="/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
import HelloWorld from '/imports/ui/components/HelloWorld.vue';

export default {
  	name: 'home',
  	components: {
    	HelloWorld,
  	},
};
</script>
