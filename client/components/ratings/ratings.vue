<template>
	<div class="ratings scroll_by">
		<div class="ratings_top">
			<ul>
				<li>
					<p>{{sellerScore}}</p>
					<span>商家评分</span>
				</li>
				<li>
					<p><i>口味评分：</i><i><div class="ratings_top_star" v-html="goodsScoreStar">{{goodsScoreStar}}</div><img src="/static/img/star.png" ></i><span>{{goodsScore}}分</span></p>
					<p><i>包装评分：</i><i><div class="ratings_top_star" v-html="packingScoreStar">{{packingScoreStar}}</div><img src="/static/img/star.png" ></i><span>{{packingScore}}分</span></p>
				</li>
				<li>
					<p>{{Satisfaction}}%</p>
					<span>商品满意度</span>
				</li>
			</ul>
		</div>
		<div class="ratings_nr">
			<ul>
				<li v-for="(item,index) in ratings">
					<div class="ratings_l">
						<img :src="item.img" />
					</div>
					<div class="ratings_r">
						<span>{{item.date}}</span>
						<p>{{item.title}}</p>
						<p v-html="item.stars">{{star}}{{item.stars}}</p>
						<div class="ratings_nr_nr">{{item.rating}}</div>
					</div>					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default {
		name: 'ratings',
		data(){
			return{
				star_img_on:"./static/img/star36_on@2x.png",
				star_img_off:"./static/img/star36_off@2x.png",
				Satisfaction:88,
				sellerScore:4.8,
				goodsScore:4.2,
				goodsScoreStar:0,
				packingScore:4.8,
				packingScoreStar:0,
				ratings:[
					{"title":"标题","img":"./static/img/logo.png","rating":"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容","date":20181201,"star":3,"stars":""},
					{"title":"标题","img":"./static/img/logo.png","rating":"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容","date":20181201,"star":4,"stars":""},
					{"title":"标题","img":"./static/img/logo.png","rating":"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容","date":20181201,"star":3,"stars":""},
					{"title":"标题","img":"./static/img/logo.png","rating":"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容","date":20181201,"star":2,"stars":""},
					{"title":"标题","img":"./static/img/logo.png","rating":"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容","date":20181201,"star":0,"stars":""},
					{"title":"标题","img":"./static/img/logo.png","rating":"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容","date":20181201,"star":5,"stars":""}
				]
			}
		},
		computed:{
			star(){
				let	star ='';
				console.log(this.ratings[0].stars)
				for( var i=0;i<this.ratings.length;i++){
					star=''
					for(var j=0;j<this.ratings[i].star;j++){
						star +='<i'+'>'+'<img'+' '+'src="'+this.star_img_on+'"'+ '/></'+'i>'
					}
					for(var j=0;j<(5-this.ratings[i].star);j++){
						star +='<i'+'>'+'<img'+' '+'src="'+this.star_img_off+'"'+ '/></'+'i>'
					}
					this.ratings[i].stars = star;
				}
				this.goodsScoreStar='<div'+' style='+'"'+'width'+': '+this.goodsScore / 5 * 100 +'% ;'+'">'+'<'+'/'+'div>'
				this.packingScoreStar='<div'+' style='+'"'+'width'+': '+this.packingScore / 5 * 100 +'% ;'+'">'+'<'+'/'+'div>'
				return star;				
			}
			
		},
		mounted () {
          this.getGoodsList()
        },
        methods: {
          getGoodsList () {
            axios.get('/goods').then((res) => {
              var result = res.data
              console.log(result)
            })
          }
        }
	}
</script>

<style>
</style>