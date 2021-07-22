<template>
	<div class="reviews" id="reviews">
		<div id="myCarousel" class="carousel slide">
			<!-- 轮播（Carousel）指标 -->
			<ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
			</ol>
			<!-- 轮播（Carousel）项目 -->
			<div class="carousel-inner">
				<div class="item active">
					<div class="review-info bounceInLeft "  >
						<h3>评论区</h3>
						<img src="images/divider.png" alt="First slide" />
						<p style="text-align: left;">点个赞，食材新鲜！虽然没有化学添加导致保质期较短，不过平时买来当天给孩子放学吃，还是不错的。</p>
						<p style="text-align: right;">- 匿名0021</p>
					</div>
				</div>
				
				<div class="item">
					<div class="review-info  bounceInLeft " >
						<h3>评论区</h3>
						<img src="images/divider.png" alt="Second slide" />
						<p style="text-align: left;">很好吃，第二次买了，味道很满意，考虑到需要重新预约排队等，特意错开时间买。</p>
						<p style="text-align: right;">- 匿名0998</p>
					</div>
				</div>

			</div>
			<!-- 轮播（Carousel）导航 -->
			<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">上</span>
			</a>
			<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">下</span>
			</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.carousel-inner{
			margin:auto;
			width:100%;
			height:100%;
			
			}


</style>
