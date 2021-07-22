<template>
	<div class="reservations" id="reservations">
		<div class="container">
			<!-- 展示区 -->
			<div class="grid-section bounceIn" >
				<!-- 图片1 -->
				<div class="reservation-leftgrid">
					<img src="../../public/images/zongzi-005.jpg" class="img-responsive" alt="" />
				</div>
				<!-- 图片2 -->
				<div class="reservation-leftgrid1">
					<img src="../../public/images/yuebin02.jpg" class="img-responsive" alt="" />
				</div>
				<div class=" clearfix"></div>
			</div>
			<!-- 预约通道 -->
			<div class="bounceIn reservation-rightgrid   " style="visibility: visible;padding: 0;" >
				<h4>预约通道</h4>
				<img src="images/img2.png" alt="" />
				<br><br>
				<!-- 列表 -->
				<div class="contact" >
					<div class="list01">
						<router-view></router-view>
					</div> 
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.container{
		display: flex!important;
		
	}
	.grid-section{
		width: 50%!important;
	}
	.reservation-rightgrid{
		width: 50%!important;
	}
	@media  screen and (max-width:993px) {
		.grid-section{
			display: none !important;
		}
		.reservation-rightgrid{
			width: 60rem!important;
			margin: 0 auto;
			
		}
		.reservations{
			padding: 20px 0;
		}
		.list01{
			margin: 0 auto!important;
width: 80%!important;
		}

	}
	
</style>
