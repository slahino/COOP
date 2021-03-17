import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import milligram from 'milligram'

window.api = axios.create({
  baseURL: 'https://allweb.fun/coop/api/',
  headers: { Authorization: '2b46aab36c9478efd8e854b9806dac4cadd6c249' }
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


