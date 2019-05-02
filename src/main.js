import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

let app = '';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyBOaL_IbOSwBtmzASERVkBfzCL2qJmZnUY",
	authDomain: "vuejs-routing-1627e.firebaseapp.com",
	databaseURL: "https://vuejs-routing-1627e.firebaseio.com",
	projectId: "vuejs-routing-1627e",
	storageBucket: "vuejs-routing-1627e.appspot.com",
	messagingSenderId: "707988998115"
};
firebase.initializeApp(config);

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!firebase.auth().currentUser) {
			next('log-in');
		} else {
			next();
		}
	} else if (to.matched.some(record => record.meta.requiresGuest)) {
		if (firebase.auth().currentUser) {
			next('/');
		} else {
			next();
		}
	} else {
		next();
	}
});

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			render: h => h(App),
		}).$mount('#app')
	}
});


