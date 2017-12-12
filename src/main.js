import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import '../static/reset.css'
import allComponents from './components/components.js'

const router = new VueRouter({
	routes :  [
		{ path: '/', component: allComponents.Home },
		{ path: '/chinaGF', component: allComponents.ChinaGF },
	 	{ path: '/latestNews', component: allComponents.LatestNews},
	 	{ path: '/dataSource', component: allComponents.DataSource},
	 	{ path: '/commonSupport', component: allComponents.CommonSupport},
	]
})

new Vue({
	el : '#app',
	router,
	render : h => h(allComponents.Empty)
})