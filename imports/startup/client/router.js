import Vue from 'vue';
import Router from 'vue-router';
import Home from '/imports/ui/views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/artists',
			name: 'artists',
			component: () => import('/imports/ui/views/Artists.vue')
		},
		{
			path: '/albums',
			name: 'albums',
			component: () => import('/imports/ui/views/Albums.vue')
		},
		{
			path: '/songs',
			name: 'songs',
			component: () => import('/imports/ui/views/Songs.vue')
		}
	]
});
