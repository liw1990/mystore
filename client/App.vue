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
    	<router-view></router-view>   	
    <v-footer></v-footer>
  </div>
</template>

<script>
	import header from "@/components/comment/header"
	import footer from "@/components/comment/footer"
	
	
	export default {
		data(){
			return{
				seller:[],
			}
	},
	components:{
			"v-header": header,
			"v-footer": footer
		} 
	}
</script>
