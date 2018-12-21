<template>
	<header>
		<div class="header_bg"></div>
		<div class="logo">
			<img :src="logo" />
		</div>
		<ul>
			<li>
				<i><img :src="pinpai_img" /></i>{{name}}
			</li>
			<li>
				{{deliveryService}} / {{deliveryTime}}分钟送达
			</li>
			<li>
				<i><img :src="manjian_img" /></i><span>{{payType}}</span>
				<span v-for="item in manjian">满{{item.price}}减{{item.discount}}</span>
			</li>
		</ul>
		<div class="notice swiper-container">
			<div class="notice_bg"></div>
			<div class="notice_img"><img :src="notice_img" /></div>
			<dl class="swiper-wrapper">
				<dd v-for="(item,index) in notice" class="swiper-slide"  @click="notice_show(index)">
					{{item.title}}
					<span>详情 >></span>
				</dd>
				
			</dl>
		</div>
		<transition name="fade">
			<div v-if="!show" class="gg_tc">
				<div class="gg_tc_" :style="{ height: clientHeight + 'px' }">
					<div class="gg_tc_bg"></div>
					<div @click="notice_hide(index)" class="gg_tc_hide"><p>×</p></div>
					<div class="gg_tc_nr">
						<p>{{notice_.title}}</p>
						<span>{{notice_.date}}</span>
						<div :style="{ height: (clientHeight-320) + 'px' }" class="scroll_by">{{notice_.nr}}</div>
					</div>
				</div>
				
			</div>
		</transition>		
	</header>
</template>

<script>
	export default {
		data(){
			return {
				show:true,
				clientHeight:'',
				name:'外卖之家',
				description:'这是一个外卖店',
				logo:'./static/img/logo.png',
				pinpai_img:'./static/img/brand@2x.png',
				manjian_img:'./static/img/decrease_2@2x.png',
				notice_img:'./static/img/bulletin@2x.png',
				deliveryService:"蜂鸟专送",
				deliveryTime:48,
				payType:'在线支付',
				"manjian":[
					{'price':20,'discount':5},{'price':30,'discount':10},{'price':45,'discount':15}
					],
				notice:[
					{'title':'公告1','date':'20181212',nr:'内容内容内容内容内容内容内容内容内容内容内容,,内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容,,,容内容内容内容内内容内容,,,,,容内容内容内内容内容,,,,,容内容内容内内容内容,,,,,,,,容内容内容内内容内容,,,,,容内容内容内内容内容,,,,,容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容,内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'},
					{'title':'公告2','date':'20181212',nr:'内容内容内容内容内容内容'},
					{'title':'公告3','date':'20181212',nr:'内容内容内容内容内容内容'},
					{'title':'公告4','date':'20181212',nr:'内容内容内容内容内容内容'},
					],
				notice_:{}
			}
		},
		mounted(){
	    	// 获取浏览器可视区域高度
	    	this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
	    	//console.log(self.clientHeight);
	    	window.onresize = function temp() {
	    		this.clientHeight = `${document.documentElement.clientHeight}`;
	   		};
	    },
	    watch: {
	    	// 如果 `clientHeight` 发生改变，这个函数就会运行
	    	clientHeight: function () {
	    		this.changeFixed(this.clientHeight)
	    	}
	    },
		methods: {
			notice_show(index){
				this.show=false;
				//console.log(this.notice[index])
				this.notice_=this.notice[index]
				//console.log(this.notice_)
			},
			notice_hide(index){
				this.show=true
			},
			changeFixed(clientHeight){
				this.clientHeight=clientHeight
			}
		}
	}
</script>

