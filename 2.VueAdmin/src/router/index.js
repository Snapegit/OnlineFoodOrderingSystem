	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import address from '@/views/address/list'
	import discusscantingxinxi from '@/views/discusscantingxinxi/list'
	import cantingxinxi from '@/views/cantingxinxi/list'
	import yonghu from '@/views/yonghu/list'
	import orders from '@/views/orders/list'
	import config from '@/views/config/list'
	import users from '@/views/users/list'
	import caipinfenlei from '@/views/caipinfenlei/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/address',
			name: '地址',
			component: address
		}
		,{
			path: '/discusscantingxinxi',
			name: '餐厅信息评论',
			component: discusscantingxinxi
		}
		,{
			path: '/cantingxinxi',
			name: '餐厅信息',
			component: cantingxinxi
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/orders',
			name: '订单管理',
			component: orders
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		,{
			path: '/caipinfenlei',
			name: '菜品分类',
			component: caipinfenlei
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
