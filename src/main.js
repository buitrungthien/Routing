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

router.

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
