import Vue from 'vue'
import App from './App'
import Utils from "./utils/until.js"
Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$Utils = Utils

const app = new Vue({
	...App
})
app.$mount()
