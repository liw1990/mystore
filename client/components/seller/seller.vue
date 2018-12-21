<template>
	<div class="seller scroll_by">
		<div class="zz_show" name="fade" v-if="zz_show">
			<div class="zz_show_" >
				<div class="zz_show_bg" @click="zz_close()"></div>
				<dl class="scroll_by">
					<dt @click="zz_close()">卖家资质</dt>
					<dd></dd>
					<dd></dd>
					<dd></dd>
					<dd></dd>
					<dd></dd>
					<dd></dd>
				</dl>
			</div>
		</div>
		<ul>
			<li>
				<i><img src="/static/img/address.png" /></i><p>合肥市港汇广场</p><a tel="18305514849"><img src="/static/img/tel.png" /></a>
			</li>
			<li @click="change()">
				<i><img src="/static/img/zz.png" /></i><p>卖家资质</p>
			</li>
			<li>
				<i><img src="/static/img/fw.png" /></i><p>配送服务  : {{deliveryService}}</p>
			</li>
			<li>
				<i><img src="/static/img/time.png" /></i><p>配送时间  : {{deliveryTime}}分钟内送达</p>
			</li>
			<li>
				<i><img src="/static/img/fw.png" /></i><p>商家服务</p>
			</li>
			<li>
				<i><img src="/static/img/fw.png" /></i><p>商家服务</p>
			</li>
			<li>
				<i><img src="/static/img/fw.png" /></i><p>商家服务</p>
			</li>
			<li>
				<i><img src="/static/img/fw.png" /></i><p>商家服务</p>
			</li>
			<li>
				<i><img src="/static/img/fw.png" /></i><p>商家服务</p>
			</li>
		</ul>
		<dl>
			<dd></dd>
		</dl>
	</div>
</template>

<script>
	export default {
		name: 'seller',
		data(){
			return{
				show:true,
				zz_show:false,
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
				notice_:{					
				}
			}
		},
		methods:{
			change(){
				this.zz_show = true
			},
			zz_close(){
				this.zz_show = false
			}
		}
		
		
	}
</script>

<style>
</style>