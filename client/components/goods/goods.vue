<template>
	<div class="goods" ref="goods">
		<transition name="fade">
			<div v-if="total_cpList_show" class="goodsBg" @click="total_cpList_hide()"></div>
		</transition>
		<ul class="scroller scrollBy">
			<li v-for="item in goods"><p>{{item.title}}</p></li>
		</ul>
		<div class="goodsList scrollBy">
			<dl v-for="(item,index_) in goods">
				<dt>{{item.title}}</dt>
				<dd v-for="(cp,index) in item.cplist" @click="cp_show_detail(index_,index)">
					<div class="cp_img">
						<img :src="cp.cp_img" />
					</div>
					<div class="cp_ms">
						<p>{{cp.title}}</p>
						<span>{{cp.description}}</span>
						<span>月售{{cp.num}}份    好评率{{cp.rate}}</span>
						<span><i>￥{{cp.price}}</i>   <i>￥{{cp.old_price}}</i></span>
						<div class="jiajian" @click.stop="">
							<transition name="fade">
								<div v-if="cp.complete && cp.count>0" class="jiajian_">
									<label @click.stop="count_jian(index_,index)" class="jiajian_jian">-</label>
									<p class="cp_count">{{cp.count}}</p>
								</div>
							</transition>
							<label @click.stop="count_jia(index_,index)" class="jiajian_jia">+</label>
						</div>
					</div>					
				</dd>
			</dl>
		</div>
		<transition name="fade">
			<div class="goods_cp_show" v-if="goods_cp_detail">
				<div class="goods_cp_show_">
					<div class="goods_cp_showBg"></div>
					<div class="goods_cp_show_nr">
						<div @click="goods_cp_hide(index_,index)" class="goods_cp_hide"><p>〈</p></div>
						<div class="goods_cp_detail scrollBy">
							<div class="goods_cp_detail_img"><img :src="goods_.cp_img" /></div>
							<div class="goods_cp_detailBt">{{goods_.title}}</div>
							<div class="goods_cp_detail_num"><span>月销量{{goods_.num}}</span><span>好评率{{goods_.rate}}</span></div>
							<div class="goods_cp_detail_price">￥{{goods_.price}}</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<div class="goods_total">
			<dl>
				<dt :class="{'goods_total_dl_dt_ys1':!total_cpList_show,'goods_total_dl_dt_ys2':total_cpList_show}"><span v-for="item in manjian">满{{item.price}}减{{item.discount}}</span></dt>
				<transition name="fade">
					<div v-if="total_cpList_show">
						<dd v-for="(item,index) in goodsBuy" v-if="item.count>0">
							<p>{{item.title}}</p>
							<p>￥{{item.count * item.price}}</p>
							<p><label @click.stop="count_jian_(index)">-</label><span>{{item.count}}</span><label @click.stop="count_jia_(index)">+</label></p>
						</dd>
					</div>
				</transition>
			</dl>
			<div class="goods_total_">
				<p @click="total_cpList">
					<transition name="fade">
						<img v-if="!total_cpList_dianji" :src="goodsLogo" />
					</transition>
					<transition name="fade">
						<img v-if="total_cpList_dianji" :src="goodsLogo_" />
					</transition>
				</p>
				<p @click="total_cpList">
					<span>共{{totalCount}}件商品 总价：</span>
					<span>{{totalPrice}}</span>
				</p>
				<input type="button" :value="settlementBtn"
					:class="{'goods_total_ys1':total_cpList_dianji_,'goods_total_ys1':!total_cpList_dianji_}" 
					@click="Settlement()"
				/>
				<div class="goods_total_bg_l" name="fade" v-if="total_cpList_dianji"></div>
				<div class="goods_total_bg_r" name="fade" v-if="total_cpList_dianji_"></div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				manjian:[
					{'price':20,'discount':5},{'price':30,'discount':10},{'price':45,'discount':15}
				],
				mini:"最低",
				delivery:"起送",
				miniDeliveryPrice:20,
				mimiDelivery:"还差",
				yuan:"元",
				settlementBtn:"",
				settlement:"去结算",
				jiesuan_price:0,
				jiesuan_zhehou_price:0,
				goodsLogo:'./static/img/logo.png',
				goodsLogo_:'./static/img/logo_.png',
				goodsBuy:[],
				total_cpList_show:false,
				total_cpList_dianji:true,
				total_cpList_dianji_:true,
				goods_cp_detail:false,
				clientHeight:'',
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
			}	
		},
		computed:{
			totalCount(){
				var totalCount=0;
				for(let i=0;i<this.goodsBuy.length;i++){
					totalCount += this.goodsBuy[i].count;
				}
				if(totalCount==0){
					//console.log(this.total_cpList_dianji)
					this.total_cpList_dianji=true;
					this.total_cpList_show=false;	
					
				}
				return totalCount;
			},
			totalPrice(){
				var totalPrice=0;
				for(let i=0;i<this.goodsBuy.length;i++){
					totalPrice += this.goodsBuy[i].price * this.goodsBuy[i].count;
				}
				if(totalPrice<this.miniDeliveryPrice){
					//this.total_cpList_dianji=true;
					this.total_cpList_dianji_=true
					if(totalPrice==0){
						this.settlementBtn=this.mini+this.miniDeliveryPrice+this.yuan+this.delivery;
						//console.log(this.settlementBtn)
					}else{
						this.settlementBtn=this.mimiDelivery+(this.miniDeliveryPrice-totalPrice)+this.yuan+this.delivery;
					}			
				}else{
					this.settlementBtn=this.settlement;
					this.total_cpList_dianji_=false
				}
				this.jiesuan_price=totalPrice
				return totalPrice;
			}
		},
		methods: {
			count_jia(index_, index){
				this.goods[index_].cplist[index].complete=true;
				this.total_cpList_dianji=false;
				this.goods[index_].cplist[index].count++;
			
				let length=this.goodsBuy.length;
				var flag = 0;
				for(let i=0; i<length; i++){
					if(this.goods[index_].cplist[index].id===this.goodsBuy[i].id){
						flag = 1;
						this.goodsBuy[i].count=this.goods[index_].cplist[index].count;
					}					
				}
				if ( flag==0 ) {
					this.goodsBuy.push(this.goods[index_].cplist[index]);
				}
				//console.log(this.goodsBuy)
				//console.log(length)
			},
			count_jian(index_, index){
				this.goods[index_].cplist[index].count--;
				if(this.goods[index_].cplist[index].count===0){
					this.goods[index_].cplist[index].complete=false;
					this.goods[index_].cplist[index].count=0;
				}
			},
			count_jia_(index){
				this.goodsBuy[index].count++;
			},
			count_jian_(index){
				if(this.goodsBuy[index].count<=1){
					this.goodsBuy[index].count=0;
					this.goodsBuy.splice(index,1)
				}else{
					this.goodsBuy[index].count--;
				}	
			},
			total_cpList(){
				this.total_cpList_show=!this.total_cpList_show;
				//console.log(this.total_cpList_show)
			},
			total_cpList_hide(){
				this.total_cpList_show=false
			},
			Settlement(){
				console.log("jiesuan")
				console.log(this.jiesuan_price)
				
				for(let i=this.manjian.length-1; i>=0; i--){
					console.log("manjian")
					console.log(this.manjian[i].price)
					if(this.jiesuan_price>=this.manjian[i].price){
						this.jiesuan_zhehou_price=this.jiesuan_price-this.manjian[i].discount;
						console.log(this.jiesuan_zhehou_price)
						alert("需付"+this.jiesuan_zhehou_price+this.yuan)
						return this.jiesuan_zhehou_price;
					}					
				}
			},
			cp_show_detail(index_,index){
				//alert("详情")
				this.goods_=this.goods[index_].cplist[index];
				this.goods_cp_detail=true;
				//console.log(this.goods_)
				
			},
			goods_cp_hide(){
				this.goods_cp_detail=false;
			}
			
			
		}
	}
</script>

<style>
</style>