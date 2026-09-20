import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import yonghuList from '@/views/pages/yonghu/list'
import yonghuDetail from '@/views/pages/yonghu/formModel'
import yonghuAdd from '@/views/pages/yonghu/formAdd'
import yonghuRegister from '@/views/pages/yonghu/register'
import yonghuCenter from '@/views/pages/yonghu/center'
import caipinfenleiList from '@/views/pages/caipinfenlei/list'
import caipinfenleiDetail from '@/views/pages/caipinfenlei/formModel'
import caipinfenleiAdd from '@/views/pages/caipinfenlei/formAdd'
import cantingxinxiList from '@/views/pages/cantingxinxi/list'
import cantingxinxiDetail from '@/views/pages/cantingxinxi/formModel'
import cantingxinxiAdd from '@/views/pages/cantingxinxi/formAdd'
import cartList from '@/views/pages/shop_order/cart'
import addressList from '@/views/pages/shop_address/list'
import order_confirm from '@/views/pages/shop_order/confirm'
import ordersList from '@/views/pages/shop_order/list'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'yonghuList',
			component: yonghuList
		}, {
			path: 'yonghuDetail',
			component: yonghuDetail
		}, {
			path: 'yonghuAdd',
			component: yonghuAdd
		}
		, {
			path: 'yonghuCenter',
			component: yonghuCenter
		}
		, {
			path: 'caipinfenleiList',
			component: caipinfenleiList
		}, {
			path: 'caipinfenleiDetail',
			component: caipinfenleiDetail
		}, {
			path: 'caipinfenleiAdd',
			component: caipinfenleiAdd
		}
		, {
			path: 'cantingxinxiList',
			component: cantingxinxiList
		}, {
			path: 'cantingxinxiDetail',
			component: cantingxinxiDetail
		}, {
			path: 'cantingxinxiAdd',
			component: cantingxinxiAdd
		}
		, {
			path: 'cartList',
			component: cartList
		}
		, {
			path: 'addressList',
			component: addressList
		}
		, {
			path: 'order_confirm',
			component: order_confirm
		}
		, {
			path: 'ordersList',
			component: ordersList
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/yonghuRegister',
		component: yonghuRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
