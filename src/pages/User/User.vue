<template>
	<div class="User">
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
		
		<div class="collect">
			收藏（<span>{{count}}</span>）
		</div>
		
	<MenuBar></MenuBar>
	</div>
</template>
<script>
import Header from '@/components/Header'
import { mapState } from 'vuex'
	export default{
		name:"User",
		components:{
			Header
		},
		data(){
			return{
				
			}
		},
		computed:{
			...mapState(['count'])             //简写     mapState头部调用 用import
// 			count(){
// 				return this.$store.state.count
// 			}
		}
	}
</script>
<style scoped>
.collect{
	font-size: 40px;
}
</style>