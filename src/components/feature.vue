<template>
	<div class="igredients" id="igredients">
		<div class="container">
			<div class="fine-igredients" style="visibility: visible;">
				<div class="fine-igredient">
					<!-- 标题 -->
					<h3>特色</h3>
					<!-- 图片分割线 -->
					<img src="images/divider.png" alt="" />
					<!-- 内容 -->
					<p style="text-align: left;">精选原材料和合作方，确保每一个环节没有任何化学成分添加破坏食物原本的美味。结合传承的手艺
						匠心制作，让食材的美味淋漓尽致的刺激味蕾。</p>
				</div>
				<!-- 特色图片展示 -->
				<div class="igredients-imgs">
					<div class="igredients-img img-responsive-father">
						<img src="../../public/images/egg.jpg" class="img-responsive" alt="" />
					</div>
					<div class="igredients-img img-responsive-father">
						<img src="../../public/images/milk.jpg" class="img-responsive img-full" alt="" />
					</div>
					<div class="igredients-img img-responsive-father">
						<img src="../../public/images/damai.jpg" class="img-responsive img-full" alt="" />
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.img-responsive-father {
		border-radius: 50%;
		width: 110px;
		height: 110px;
		overflow: hidden;
	}

	.img-full {
		width: 100%;
		height: 100%;
	}
	@media screen and (max-width:993px) {
		.fine-igredients{
			width: 96%!important;
			margin: 42px auto !important;
		}
		.igredients-imgs{
			display: flex;
			justify-content:space-between;
		}
		.clearfix{
			display: none;
		}
	}
		@media screen and (max-width:500px) 
		{
			.igredients-imgs{
				display: none;
			}
		}
</style>
