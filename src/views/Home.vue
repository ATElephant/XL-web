<template>
	<div class="home">
		<!-- 导航和baner -->
		<HeaderAndBg />
		<!-- 内容区 -->
		<div class="content">
			<!-- 关于我们 -->
			<aboutWe />
			<!-- 特色 -->
			<feature />
			<!-- 菜单 -->
			<Menu />
			<!-- 评论 -->
			<reviews />
			<!-- 开始预约 -->
			<reservations />

		</div>
		<!-- footer -->
		<Footer />
	</div>
</template>

<script>
	// @ is an alias to /src
	import HeaderAndBg from '../components/HeaderAndBg.vue'
	import aboutWe from '../components/aboutWe.vue'
	import feature from '../components/feature.vue'
	import Menu from '../components/menu.vue'
	import reviews from '../components/reviews.vue'
	import reservations from '../components/reservations.vue'
	import Footer from '../components/footer.vue'

	export default {
		name: 'Home',
		components: {
			HeaderAndBg,
			aboutWe,
			feature,
			Menu,
			reviews,
			reservations,
			Footer
		}
	}
</script>
