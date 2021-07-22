<template>
	<div class="header" id="home" >
		<div class="container" style="width: 100%!important;padding: 0;height: 39.333333rem;">
			<!-- 导航 -->
			<div class="header-top" :style="style" style="width: 100%!important;">
				<!-- :style="style" 导航变色 -->
				<!-- 导航 logo-->
				<div class="logo  fadeInLeft" style="float: none;height: 64px;width: 170px;">
					<img src="../../public/images/logo_xl2.png" class="img-responsive" alt="logo" />
				</div>
				<!-- 导航 list-->
				<div class="top-menu" :class="defaultMenu==true? 'top-menu02':''"  style="float: none;height: 64px;padding: 20px 0 10px 0 ;width: 60%;">
					<div class="height-85"></div>
					<ul style="display: flex;justify-content:space-between;width: 100%;height: 29px;">
						<router-link class="router-link-active" tag="li" :to="{path:'/',hash:'#home'}">首页</router-link>
						<router-link class="router-link-active" tag="li" :to="{path:'/',hash:'#aboutwe'}">关于
						</router-link>
						<router-link class="router-link-active" tag="li" :to="{path:'/',hash:'#igredients'}">特色
						</router-link>
						<router-link class="router-link-active" tag="li" :to="{path:'/',hash:'#menu'}">菜单</router-link>
						<router-link class="router-link-active" tag="li" :to="{path:'/',hash:'#reviews'}">评论
						</router-link>
						<router-link class="router-link-active" tag="li" :to="{path:'/',hash:'#reservations'}">开始预约
						</router-link>
					</ul>
				</div>

				<div class="menuImg" @click="change()">
					<svg t="1625654466029" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="1311" width="32" height="21">
						<path
							d="M66.489 211.782H957.51c28.199 0 50.98-22.239 50.98-49.649 0-27.397-22.768-49.648-50.98-49.648H66.49c-28.147 0-50.98 22.238-50.98 49.648s22.833 49.649 50.98 49.649z m891.01 248.242H66.488c-28.212 0-50.98 22.239-50.98 49.649s22.768 49.648 50.98 49.648H957.51c28.199 0 50.98-22.238 50.98-49.648-0.013-27.41-22.923-49.649-50.993-49.649z m0 351.638H66.488c-28.134 0-50.98 22.239-50.98 49.649s22.833 49.648 50.98 49.648H957.51c28.199 0 50.98-22.238 50.98-49.648-0.013-27.397-22.781-49.649-50.993-49.649z m0 0"
							p-id="1312" fill="#ffffff"></path>
					</svg>
				</div>
			</div>



			<!-- banner -->
			<div class="baneer-center fadeInLeft">
				<h1>来自大自然的馈赠</h1>
				<img class="baneer-center-img" src="../assets/images/divider.png" alt="" />
			</div>
			<!-- 快捷键按钮 -->
			<div class="buttons">
				<router-link class="button" tag="button" :to="{hash:'#reservations'}">开始预约</router-link>
				<router-link class="button1" tag="button" :to="{hash:'#menu'}">浏览菜单</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HeaderAndBg',
		data() {
			return {
				// 导航变色 属性
				style: {},
				opacity: 0.2,
				defaultMenu:false

			}
		},

		mounted() {
			// 导航变色
			window.addEventListener("scroll", this.windowScroll) ;//监听页面滚动
		
		},
		methods: {
			change(){
				this.defaultMenu = !this.defaultMenu
			},
			// 导航变色
			windowScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				this.opacity = Math.abs(Math.round(scrollTop)) / 250;

				this.style = {
					background: `linear-gradient(45deg, rgba(0,0, 0,${this.opacity}) 0%, rgba(126,126,126, ${this.opacity}) 100%)`
				}
			},

		},
		destroyed() {
			// 导航变色
			window.removeEventListener("scroll", this.windowScroll); //销毁滚动事件
		}
	}
</script>

<style scoped="scoped">
	/* logo */
	.img-responsive {
		width: 100%;
		height: 100%;

	}

	/* router 样式 */
	.router-link-active {
		color: white;
		height: 100%;
		box-sizing: border-box;
		cursor: pointer;
		display: inline-block;
		font-family: "Gentium Book Basic", serif;
		font-size: 22px;
		font-weight: 800;
		list-style-type: none;
		text-align: center;


		padding: 0;
	}

	.router-link-active:hover {
		color: black;
	}

	/* 导航栏 */
	.header-top {

		position: fixed;
		height: 84px;
		width: 100%;
		right: 0;
		top: 0;
		background-clip: border-box;
		display: flex;
		justify-content: space-between;
		padding: 10px 25px 10px 20px;
	}

	.menuImg {
		width: 42px;
		height: 34px;
		border: 1px solid #fff;
		margin-right: 25px;
		margin-top: 12px;
		display: none;
		padding: 5px 2px;
		padding-left: 4px;
	}
	.height-85{
		height: 85px;
		width: 100%;
		display: none;
	}

	@media screen and (max-width:993px) {
		.menuImg {
			display: block;
		}
		.height-85{

			display: block;
		}

		.top-menu {
			background: linear-gradient(45deg, rgba(0,0, 0,0.6) 0%, rgba(126,126,126,0.6) 100%);
			width: 100%!important;
			height: 84px!important;
			padding:0 15px !important;
			margin: 0 !important;
			position: absolute;
			top: 0px;
			z-index: -1;
			overflow: hidden;
		}
		.top-menu02{
			height:  465px!important;
		}
		ul{
			display: flex;
			flex-direction: column;
			height: 100%!important;
			width: 100%!important;
		}

		 .header-top {
			padding: 10px 0px;
		}
		
		.router-link-active {
			width: 100%;
			height: 50px;
			line-height: 50px;
			color: #fff;
			font-family: "Open Sans", sans-serif;
			font-size: 22px;
			font-weight: 600;
			border: none;
			background-color: rgba(0, 0, 0, 0);
			cursor: pointer;
			transition-delay: 0s;
			transition-duration: 0.4s;
			transition-property: all;
			transition-timing-function: ease;
		
		
			padding: 0;
		}
		
		
		ul li:hover {
			width: 100%;
			height: 50px;
			background-color: #fff;
			cursor: pointer;
			border-bottom: none;
		}
		
		.baneer-center{
			margin: 15.333333rem auto;
		}
		.buttons{
			display: none;
		}


	}
</style>
