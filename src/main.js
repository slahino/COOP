import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import milligram from 'milligram'

window.api = axios.create({
  baseURL: 'https://tools.sopress.net/iut/coop/api/',
  headers: { Authorization: '49bea3c36de85c030350a521e8c56ff792a25695' }
});

Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
 	beforeCreate() {
 		api.interceptors.request.use(config => {
 			console.log(config.url);
 			if(this.$store.state.token) {
 				config.url+='?token='+this.$store.state.token
 			}
 			return config;
 		})
 	},
  router,
  store,
  render: h => h(App)
}).$mount('#app')


