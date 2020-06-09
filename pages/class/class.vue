<template>
	<view class="content" v-if="list.length != 0" >
		<scroll-view :scroll-y="true" style="height: auto; width: 100%;" @scrolltolower="toMuch">
			<view v-for="(item,index) in list.subjects" :key="index" style="display: flex; padding: 8upx;">
				<view style="width: 280upx; height: 320upx;">
					<image :src="item.images.small" style="width: 100%; height: 100%;"></image>
				</view>
					<view style="flex: 1; display: flex; flex-direction: column; padding: 8upx;">
						<view style="flex: 1; font-size: 32upx; text-align: center; line-height: 80upx;">
							<text>电影名:{{item.title}}</text>
						</view>
						<view style="flex: 1;">
							<view class="mydate">出版日期：{{item.pubdates}}</view>
							<view class="mytype">
								<text v-for="(item,index) in item.genres" :key="index">
									<text class="types">{{item}} </text>
								</text>
							</view>
						</view>
					</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { getInTheaters,  getNewMovie, getTop250 } from '../../apis/index.js'
	export default {
		data() {
			return {
				start: 0,
				count: 8,
			    typelist: ["即将上映电影","豆瓣电影新片榜","豆瓣电影Top250"],
				num: -1,
				list: [],
				flag: false
			}
		},
		async onLoad(option){
			 this.num = this.typelist.indexOf(option.title)
			 let res;
			 uni.showLoading({
			 	"title": "加载中......"
			 })
			if(this.num == 0){
				 res = await getInTheaters({
					start: this.start,
					count: this.count,
					city: this.$store.state.city
				})
				console.log(this.$store.state.city)
			}else if(this.num == 1){
				 res = await getNewMovie({
					start: this.start,
					count: this.count,
					city: this.$store.state.city
				})
			}else if(this.num == 2){
				 res = await getTop250({
					start: this.start,
					count: this.count,
					city: this.$store.state.city
				})
			}
			this.list = res
			if(this.list.length != 0){
				uni.hideLoading()
			}
			 console.log(this.list, res, 5)
		},
		methods:{
			async toMuch(){
				this.start += 10;
				console.log(this.start)
				let res;
				let ress =  await uni.showLoading({
				 	"title": "加载中......",
					mask: true
				 })
				 console.log(ress)
				if(!this.flag){
					if(this.num == 0){
						 res = await getInTheaters({
							start: this.start,
							count: this.count,
							city: this.$store.state.city
						})
						this.flag = !this.flag
					}else if(this.num == 1){
						 res = await getNewMovie({
							start: this.start,
							count: this.count,
							city: this.$store.state.city
						})
						this.flag = !this.flag
					}else if(this.num == 2){
						 res = await getTop250({
							start: this.start,
							count: this.count,
							city: this.$store.state.city
						})
						this.flag = !this.flag
					}
					if(this.flag){
						uni.hideLoading()
						this.flag = !this.flag
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.content{
		.mydate{
			text-align: center;
			font-size: 24upx;
			font-weight: 800;
			text-align: left;
		}
		.mytype{
			margin: 8upx 0;
			.types {
				margin: 0 36upx;
				font-size: 32upx;
			}
		}
		
	}
</style>
