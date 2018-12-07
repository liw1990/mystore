<template>
	<header>
		<div class="header_bg"></div>
		<div class="logo">
			<img :src="header.logo" />
		</div>
		<ul>
			<li>
				<i><img :src="header.pinpai_img" /></i>{{header.name}}
			</li>
			<li>
				{{header.yunsong_type}} / {{header.yunsong_time}}分钟送达
			</li>
			<li>
				<i><img :src="header.manjian_img" /></i><span>{{header.pay_type}}</span>
				<span v-for="item in header.manjian">{{item.title}}</span>
			</li>
		</ul>
		<div class="notice swiper-container">
			<div class="notice_bg"></div>
			<div class="notice_img"><img :src="header.notice_img" /></div>
			<dl class="swiper-wrapper">
				<dd v-for="item in header.notice" class="swiper-slide">
					{{item.title}}
					<span v-on:click="show = !show">详情 >></span>
					
				</dd>
				
			</dl>
		</div>
		<transition name="fade">
			<div v-if="!show" class="gg_tc">hello</div>
		</transition>		
	</header>
</template>

<script>
	export default {
		data(){
			return {
				show:true,
				header:{
					'name':'外卖之家','description':'这是一个外卖店','logo':'./static/img/logo.png','pinpai_img':'./static/img/brand@2x.png',
					'manjian_img':'./static/img/decrease_2@2x.png','notice_img':'./static/img/bulletin@2x.png','yunsong_type':"蜂鸟专送",'yunsong_time':'48','pay_type':'在线支付',
						"manjian":[
							{'title':'满28减5'},{'title':'满35减10'},{'title':'满50减15'}
						],
						notice:[
							{'title':'公告1','date':'20181212',nr:'内容内容内容内容内容内容'},
							{'title':'公告2','date':'20181212',nr:'内容内容内容内容内容内容'},
							{'title':'公告3','date':'20181212',nr:'内容内容内容内容内容内容'},
							{'title':'公告4','date':'20181212',nr:'内容内容内容内容内容内容'},
						]
				}
			}
		},
		methods: {
			gg_nr(){
				console.log("1")
			},
		}
	}
</script>

