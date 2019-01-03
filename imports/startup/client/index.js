import { Meteor } from 'meteor/meteor';
import VueMeteorTracker from 'vue-meteor-tracker';
import Vue from 'vue';
import App from '/imports/ui/App.vue';

import router from './router';
import './lib';

Vue.config.productionTip = false;

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
	new Vue({
		router,
		render: h => h(App),
	}).$mount('#app');
});
