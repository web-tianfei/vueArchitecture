<template>
	<div>
		<router-view></router-view>
		<!-- <router-view name="theme"></router-view> -->
	</div>
</template>
<script>
	// export default{
	// 	watch:{
	// 		'$route'(to,from){
	// 			//监听路由 进入home页的时候就加载地图
	// 			// if(to.path == '/home'){
	// 			// 	alert("h")
	// 			// 	setTimeout(function(){
	// 			// 		var map = new AMap.Map('map-container',{
	// 			// 			zoom: 8,
	// 			//     		// center: [116.39,39.9],//new AMap.LngLat(116.39,39.9)
	// 			//     		 mapStyle: 'amap://styles/darkblue',//样式URL
	// 			//     		 Features: ['road','point']
	// 			// 		});
	// 			// 	},1000)
	// 			// }
	// 			alert('oo');
	// 			if(to.path == '/denglu'){
	// 				alert("a");
	// 				import('../../../build/vueLanJiaZai.js');
	// 			}
	// 		}
	// 	}
	// }
</script>