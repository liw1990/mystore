<template>
  <div id="app">
    <v-header></v-header>
    <ul class="tab">
    		<li>
    			<router-link to="/goods">商品</router-link>
				</li>
    		<li>
    			<router-link to="/ratings">评论</router-link>
    		</li>
    		<li>
    			<router-link to="/seller">卖家</router-link>
    		</li>
    </ul>
    <div class="content" :style="{ height: clientHeight + 'px' }">
    	<router-view></router-view> 
    </div>
      	
    <v-footer></v-footer>
  </div>
</template>

<script>
	import header from "@/components/comment/header"
	import footer from "@/components/comment/footer"
	
	
	export default {
		data(){
			return{
				clientHeight:'',
				seller:[],
			}
		},
		components:{
			"v-header": header,
			"v-footer": footer
		},
		mounted(){
			// 获取浏览器可视区域高度
			this.clientHeight =   `${document.documentElement.clientHeight}` - 380         //document.body.clientWidth;
			//console.log(self.clientHeight);
			window.onresize = function temp() {
				this.clientHeight = `${document.documentElement.clientHeight}` - 380;
			};
		},
		watch: {
			// 如果 `clientHeight` 发生改变，这个函数就会运行
			clientHeight: function () {
				this.changeFixed(this.clientHeight)
			}
		},
		methods: {
			changeFixed(clientHeight){
				this.clientHeight=clientHeight
			}
		}
	}
	
</script>
