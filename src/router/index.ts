import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{ path: '/', name: 'home', component: () => import('../views/Home.vue') },
	{ path: '/packets', name: 'packets', component: () => import('../views/Packets.vue') },
	{ path: '/records', name: 'records', component: () => import('../views/Records.vue') },
	{ path: '/admin', name: 'admin', component: () => import('../views/Admin.vue') },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router


