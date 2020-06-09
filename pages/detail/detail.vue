<template>
	<view class="content" v-if="list != undefined">
		<view class="top">
			<view class="title">电影名: {{list.aka[0]}}</view>
			<view class="rating">评分: {{list.rating.average}}</view>
		</view>
		<view v-for="(item,index) in list.photos" :key="index" style="width: 100%;">
			<image :src="item.image" style="width: 100%;vertical-align: middle;"></image>
		</view>
	</view>
</template>

<script>
	import {getDetail} from '../../apis/index.js'
	export default {
		data() {
			return {
				list: undefined
			}
		},
		methods: {
			
		},
		async onLoad(option){
			if(this.list == undefined){
				uni.showLoading({
					title: "加载中......"
				})
			}
			try{
				let res = await getDetail(option.id)
				this.list = res
				uni.hideLoading()
			}catch(e){
				//TODO handle the exception
			}
		}
	}
</script>

<style lang="scss">
	.top {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.title,
		.rating {
			flex: 1;
			height: 60upx;
			line-height: 60upx;
			padding: 6upx;
			background: skyblue;
			text-align: center;
		}
		.title {
			flex: 2;
		}
		
	}
</style>
