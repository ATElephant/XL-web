<template>
	<div class="list01">
		<form action="">
			<div v-if="list01">
				<div class="contact-text">
					<h5>姓名：</h5>
					<input type="text" class="text" value="你的名字" onFocus="this.value = '';"
						onBlur="if (this.value == '') {this.value = '你的名字';}">
				</div>
				<div class="contact-text">
					<h5>电话：</h5>
					<input type="text" class="text" value="你的手机号" onFocus="this.value = '';"
						onBlur="if (this.value == '') {this.value = '你的手机号';}">
				</div>
				<div class="contact-text">
					<h5>收货地址：</h5>
					<input class="text" type="text" value="你的地址" onFocus="this.value = '';"
						onBlur="if (this.value == '') {this.value = '你的地址';}">
				</div>
				<button class='router-link-active' value="下一步" @click="toggle">下一步</button>

			</div>

			<!-- 第二页 -->
<!-- 
			<div v-if="list02">
				<div class="contact-text">
					<h5>月饼：</h5>
					<input type="number" class="text">盒 -->
					<!-- onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = '你的名字';}" -->
				<!-- </div>
				<div class="contact-text">
					<h5>粽子：</h5>
					<input type="number" class="text">个
				</div>
				<div class="contact-text">
					<h5>酥脆饼：</h5>
					<input class="text" type="number">盒
				</div>
				<div class="contact-text">
					<h5>定制点心：</h5>
					<input class="text" type="number">份
				</div>
				<input type="submit" class='router-link-active-2' value="提交" /> -->
				<!-- <router-link id="next" tag="submit"  to="path:'/finish'">提交</router-link> -->
		<!-- 	</div> -->
		</form>
	</div>
</template>

<script>
	export default {
		name: "list01",
		data() {
			return {
				list01: true,
				list02: false

			};
		},
		methods: {
			toggle() {
				this.list01 = !this.list01;
				this.list02 = !this.list02;
			}
		}

	}
</script>

<style scoped="scoped">
	input{
		width:100%;
		margin: 0!important;
		padding: 0!important;
	}

	.contact-text {}

	.router-link-active-2 {
		caret-color: transparent;
		width: 20%;
		margin: 0px 5em;
		background: #cc9900;
		font-size: 1em;
		color: #fff;
		border: none;
		outline: none;
		padding: 10px 10px;
		border-radius: 0.5rem;
		margin-left: 10%;
	}

	.router-link-active {

		caret-color: transparent;
		width: 45%;
		height: 45px;
		margin: 15px 5em;
		background: #cc9900;
		font-size: 1.2em;
		color: #fff;
		border: none;
		outline: none;
		
		border-radius: 0.5rem;
	}

	@media screen and (max-width:993px) {
		.contact-text{
			width:100%!important;
		}
		.contact-text h5{
			font-size :1.8rem!important;
			font-style :italic!important;
			font-weight: 600!important;
		}
		.list01{
			width: 100%!important;
		}
		.router-link-active{
			
		}
	}
</style>
