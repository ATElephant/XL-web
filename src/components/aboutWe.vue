<template>
	<div class="about" id="aboutwe">
		<div class="container">
			<!-- 内容介绍 -->
			<div class="about-leftgrid" style="visibility: visible; ">
				<h2>匠心态度对待食物</h2>
				<img src="images/img2.png" alt="" />
				<p>我们的材料源于大自然，尊重大自然是我们的态度，匠心烹饪食材，发挥食材原本的香味!</p>
				<img src="../../public/images/shiFu.png" class="cook" alt="" />
			</div>
			<!-- 工作图片 -->
			<div class="about-rightgrid" style="visibility: visible;">
				<img style="width: 99%;height: 99%;" src="../../public/images/bisket.png" alt="" />
			</div>
			<div class="clearfix"></div>
		</div>

	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.cook {
		margin-top: 30px;
	}

	.container {
		display: flex;

	}

	@media screen and (max-width:993px) {
		.container {
			display: flex !important;
		}

	}

	@media screen and (max-width:583px) {
		.about-rightgrid {
			display: none !important;
		}
		.about-leftgrid{
			width: 98%!important;
		}

	}
</style>
