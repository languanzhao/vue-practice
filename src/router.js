import Vue from 'vue'
import Router from 'vue-router'
//三种写法
import Home from './pages/Home/Home'            //形式一
																								//形式二 About
// const User = () => import('./pages/User/User')  //形式三
import User from './pages/User/User'
import About from './pages/About/About'
import Message from './pages/Message/Message'
import Shop from './pages/Shop/Shop'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
			path: '/Shop',
			name: 'Shop',
			component: Shop
		},
		{
			path: '/Message',
			name: 'Message',
			component: Message
		},
    {
      path: '/About',
      name: 'about',
      // component: () => import('./pages/About/About')
			component:About
    },
		{
			path:'/User',
			name:'User',
			component:User
		}
  ]
})
