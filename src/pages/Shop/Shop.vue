<template>
	<div class="Shop">
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
		这是Shop页面
		
		<MenuBar></MenuBar>
		
	</div>
</template>
<script>
	import Header from '@/components/Header'
	export default{
		name:"Shop",
		components:{
			Header
		},
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
	
</style>