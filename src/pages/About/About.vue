<template>
	<div class="About">
		<Header>
				<template slot="left">
						<span class="iconfont">&#xe60a;</span>
				</template>
				<template slot="center">
					<form>
					
							<input type="text" placeholder="输入商品名称/关键词">
					
					</form>
				</template>
				<template slot="right">
						<span class="iconfont">&#xe60a;</span>
				</template>
		</Header>
		<!-- 百度地图 -->
		<baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view"></baidu-map>
		
		<MenuBar></MenuBar>
	</div>
</template>
<script>
import Header from '@/components/Header'
	export default{
		name:"About",
		components:{
			Header
		},
		data(){
			return{
				center: {lng: 0, lat: 0},
				zoom: 3
			}
		},
		methods:{
				handler ({BMap, map}) {
					console.log(BMap, map)
					this.center.lng = 116.404
					this.center.lat = 39.915
					this.zoom = 15
			}
		}
	}
</script>
<style scoped>
.bm-view {
  width: 100%;
  height: 600px;
}
</style>