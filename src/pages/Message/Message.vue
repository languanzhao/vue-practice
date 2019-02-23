<template>
	<div class="Message">
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
		这是消息页
		
		<MenuBar></MenuBar>
		
	</div>
</template>
<script>
	import Header from '../../components/Header.vue'
	export default{
		name:"Message",
		components:{
			Header
		}
	}
</script>
<style scoped>
	
</style>