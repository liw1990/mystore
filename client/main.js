// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VueRouter from 'vue-router'

import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'
import seller from '@/components/seller/seller.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller },
//{ path:'*',redirect:'/goods' }
]

const router = new VueRouter({
	mode:"hash",
	linkExactActiveClass:"",
  routes // (缩写) 相当于 routes: routes
  
})


new Vue({
el: '#app',
router,
components: { App },
template: '<App/>'
})
