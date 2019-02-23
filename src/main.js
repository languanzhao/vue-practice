import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store/index.js'  	 //vuex

import 'lib-flexible/flexible.js'        //自适应

import axios from 'axios'                
Vue.prototype.$http = axios              // 全局写法 就直接使用 $http 即可 如：this.$router 

import './style/iconfont.css'            //引用图标

import global_MenuBar from './plugins/global_MenuBar.js' //底部菜单全局插件引入
Vue.use(global_MenuBar)                                  //底部菜单全局插件使用

import BaiduMap from 'vue-baidu-map'       //百度地图
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'z3Yg7hTgCxMZwCoumzu0boNwFqdEQeEb'
})

import Vant from 'vant'                  //ui
import 'vant/lib/index.css'
Vue.use(Vant)

//vant-ui 轮播
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
	store,
  render: h => h(App)
}).$mount('#app')
