<template>
	<div class="goods" ref="goods">
		<transition name="fade">
			<div v-if="total_cp_list_show" class="goods_bg"></div>
		</transition>
		<ul class="scroller">
			<li v-for="item in goods"><p>{{item.title}}</p></li>
		</ul>
		<div class="goods_list">
			<dl v-for="(item,index_) in goods">
				<dt>{{item.title}}</dt>
				<dd v-for="(cp,index) in item.cplist">
					<div class="cp_img">
						<img :src="cp.cp_img" />
					</div>
					<div class="cp_ms">
						<p>{{cp.title}}</p>
						<span>{{cp.description}}</span>
						<span>月售{{cp.num}}份    好评率{{cp.rate}}</span>
						<span><i>￥{{cp.price}}</i>   <i>￥{{cp.old_price}}</i></span>
						<div class="jiajian">
							<transition name="fade">
								<div v-if="cp.complete && cp.count>0" class="jiajian_">
									<label @click="count_jian(index_,index)" class="jiajian_jian">-</label>
									<input 
										v-model="cp.count" 
										onkeyup="if(this.value.length>=1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" 
										onafterpaste="if(this.value.length>=1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
										/>
								</div>
							</transition>
							<label @click="count_jia(index_,index)" class="jiajian_jia">+</label>
						</div>
					</div>					
				</dd>
			</dl>
		</div>
		<div class="goods_totle">
			<transition name="fade">
			<dl v-if="total_cp_list_show">
				<!--<dt>满20减5，满30减10</dt>-->
				<!--<dt>
					<blog-post v-for="manjian in header.manjian" v-bind:key="manjian.title"></blog-post>
				</dt>-->
				<dd v-for="(item,index) in goods_buy" v-if="item.count>0">
					<p>{{item.title}}</p>
					<p>￥{{item.count * item.price}}</p>
					<p><label @click="count_jian_(index)">-</label><span>{{item.count}}</span><label @click="count_jia_(index)">+</label></p>
				</dd>
			</dl>
			</transition>
			<div class="goods_totle_">
				<p @click="total_cp_list">
					<transition name="fade">
						<img v-if="!total_cp_list_dianji" src="../../../static/img/logo.png" />
					</transition>
					<transition name="fade">
						<img v-if="total_cp_list_dianji" src="../../../static/img/logo_.png" />
					</transition>
				</p>
				<p @click="total_cp_list">
					<span>共{{totalCount}}件商品 总价：</span>
					<span>{{totalPrice}}</span>
				</p>
				<p :class="{'goods_total_ys1':total_cp_list_dianji,'goods_total_ys1':!total_cp_list_dianji}" @click="Settlement()">结算</p>
				<transition name="fade">
					<div class="goods_totle_bg" v-if="total_cp_list_dianji"></div>
				</transition>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				goods:[
					{'title':'热销榜','cplist':[
						{'id':1,'title':'热销品一','price':1,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':2,'title':'热销品二','price':2,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':3,'title':'热销品二','price':3,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':4,'title':'热销品二','price':4,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':5,'title':'热销品二','price':5,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
					]},
					{'title':'特色菜品','cplist':[
						{'id':6,'title':'特色一','price':1,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':7,'title':'特色二','price':2,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':8,'title':'特色一','price':1,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':9,'title':'特色二','price':2,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':10,'title':'特色一','price':1,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
						{'id':11,'title':'特色二','price':2,'old_price':45,'cp_img':'./static/img/logo.png','description':'简述','num':699,'count':0,'rate':'100%','complete':false,'complete_':true},
					]},
				],
				prop:[],
				goods_buy:[],
				total_cp_list_show:false,
				total_cp_list_dianji:true,
				clientHeight:'',
			}	
		},
		computed:{
			totalCount(){
				var totalCount=0;
				for(let i=0;i<this.goods_buy.length;i++){
					totalCount += this.goods_buy[i].count;
				}
//				return totalCount;
				if(totalCount==0){
					console.log(this.total_cp_list_dianji)
					this.total_cp_list_dianji=true;
					this.total_cp_list_show=false;	
					
				}
			},
			totalPrice(){
				var totalPrice=0;
				for(let i=0;i<this.goods_buy.length;i++){
					totalPrice += this.goods_buy[i].price * this.goods_buy[i].count;
				}
				return totalPrice;
			}
		},
		methods: {
			changeFixed(clientHeight){                        //动态修改样式
		        console.log(clientHeight);0.
		        console.log(this.$refs.goods.clientHeight);//获取第一个div元素的高度
		        this.$refs.goods.style.height = (clientHeight-260)/58.5938 +'rem';
		
		    },
			count_jia(index_, index){
				this.goods[index_].cplist[index].complete=true;
				this.total_cp_list_dianji=false;
				this.goods[index_].cplist[index].count++;
			
				let length=this.goods_buy.length;
				var flag = 0;
				for(let i=0; i<length; i++){
					if(this.goods[index_].cplist[index].id===this.goods_buy[i].id){
						flag = 1;
						this.goods_buy[i].count=this.goods[index_].cplist[index].count;
					}					
				}
				
				if ( flag==0 ) {
					this.goods_buy.push(this.goods[index_].cplist[index]);
				}
				console.log(this.goods_buy)
				console.log(length)
			},
			count_jian(index_, index){
				this.goods[index_].cplist[index].count--;
				if(this.goods[index_].cplist[index].count===0){
					
					this.goods[index_].cplist[index].complete=false;
					this.goods[index_].cplist[index].count=0;
				}
			},
			count_jia_(index){
				this.goods_buy[index].count++;
			},
			count_jian_(index){
				if(this.goods_buy[index].count<=1){
					this.goods_buy[index].count=0;
					this.goods_buy.splice(index,1)
				}else{
					this.goods_buy[index].count--;
				}	
			},
			total_cp_list(){
				this.total_cp_list_show=!this.total_cp_list_show;
				console.log(this.total_cp_list_show)
			},
			Settlement(){
				alert("结算")
			}
			
			
		}
	}
</script>

<style>
</style>