import MenuBar from '.././components/MenuBar.vue'

var Myplugin = {}

Myplugin.install = function(Vue){
	Vue.component('MenuBar',MenuBar)
}

export default Myplugin