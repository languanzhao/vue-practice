<template>
	<div class="Home">
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
		
		<van-swipe :autoplay="1000" indicator-color="#000">
			  <van-swipe-item v-for="item of list" :key="item.id" :width="750" :height="400">
				  <router-link to=""> 
					  <img :src="item.url" class="img"/>
				  </router-link>
			  </van-swipe-item>
		</van-swipe>
		
		<div class="collect" @click="add()">
			收藏此物品
		</div>
		
		<baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view">
			  <!-- 缩放控件 -->
				<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
				<!-- 比例尺控件 -->
				<bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
				<!-- 全景 -->
				<bm-panorama></bm-panorama>
				<!-- 定位 -->
				<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
		</baidu-map>
		
		<MenuBar></MenuBar>
		
	</div>
</template>
<script>
import Header from '@/components/Header.vue'
import { mapMutations } from "vuex"; //vuex中的一个对象
	export default{
		name:"Home",
		components:{
			Header
		},
		data(){
			return{
				list:[],
				center: {lng: 0, lat: 0},
				zoom: 3
			}
		},
		methods:{
		    ...mapMutations({                         //简写     mapMutations 头部调用 用import
					add:"ADD"
				}),
// 			add(){
// 				this.$store.commit("ADD")
// 			}
			handler ({BMap, map}) {
				console.log(BMap, map)
				this.center.lng = 116.404
				this.center.lat = 39.915
				this.zoom = 15
    }
		},
		//easy-mock 数据后台 1736626696
		//一般creadted钩子函数主要是用来初始化数据。
		//mounted钩子函数一般是用来向后端发起请求拿到数据以后做一些业务处理。
		mounted(){
			var that = this
			this.$http.get('https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/vue').then(function(res) {
					that.list = res.data.prodetails_banner
						console.log(res.data.prodetails_banner)
				})
		}
	}
</script>
<style scoped>
.Home{
	padding-bottom: 100px;
}
.Home >>> .van-swipe-item{
	width: 750px;
	height: 400px;
	text-align: center;
}
.Home >>> .van-swipe-item img{
	width: 750px;
	height: 400px;
}
.collect{
	font-size: 40px;
	border: 1px solid #20A0FF;
	width: 200px;
	height: 80px;
	margin: 30px auto;
}
.bm-view {
  width: 100%;
  height: 500px;
	margin-bottom: 30px;
}
</style>