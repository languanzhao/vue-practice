<template>
	<div class="Header">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</div>
</template>
<script>
	export default{
		name:"Header"
	}
</script>
<style scoped>
.Header{width: 100%;height: 90px;background: #b0afaf;display: flex;justify-content: space-between;align-items: center;padding:0px 20px;box-sizing: border-box;}
.Header span{font-size: 35px;}
.Header form{width: 400px;height: 60px;border-radius: 12px;background: #fff;}
.Header form input{width: 400px;height: 60px;}
</style>