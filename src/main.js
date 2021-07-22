import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const tore= new  Vuex.Store({
 State:{
	 count:0,
 },
 mutations:{
	 countQ(State){
		 State.count++
	 }
 }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
