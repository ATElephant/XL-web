import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import list01 from '../components/list01.vue'
import finish from '../components/list02.vue'

Vue.use(VueRouter)

const routes = [
	{
	path: '/',
	name: 'Home',
	component: Home,
	redirect:"/list01",
	children: [
		{
		path: "list01",
		component: list01,
	}
	]
},
{
	path: '/finish',
	name: 'finish',
	components: finish,
}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		console.log(to.hash)
		const position = {};
		position.selector = to.hash;
		return position;
	}
})

export default router
