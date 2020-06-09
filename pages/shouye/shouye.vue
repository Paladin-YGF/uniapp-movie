<template>
	<view class="content">
		<view class="top">
			<swiper :indicator-dots="true" :autoplay="true" :interval="1500" :duration="1500" :circular="true">
				<swiper-item v-for="(item, index) in nowPlayingList.subjects" :key="index">
					<image :src="item.images.small" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="center">
			<view class="centerTop">
				即将上映电影({{citys}})
				<text class="text" @click="toMuch('即将上映电影')">更多<text style="font-size: 40upx;">></text></text>
			</view>
			<scroll-view style="white-space: nowrap; width: 100%;" :scroll-x="true">
				<view v-for="(item, index) in nowPlayingList.subjects" :key="index" style="width: 48%;  display: inline-block;" @click="topDetail(item.id)">
					<image :src="item.images.small" style="width: 100%; height: 480upx"></image>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="center">
			<view class="centerTop">
				{{newMovie.title}}
				<text class="text" @click="toMuch(newMovie.title)">更多<text style="font-size: 40upx;">></text></text>
			</view>
			<scroll-view style="white-space: nowrap; width: 100%;" :scroll-x="true">
				<view v-for="(item, index) in newMovie.subjects" 
				 @click="topDetail(item.id)"
				:key="index" style="width: 48%;  display: inline-block;">
					<image :src="item.images.small" style="width: 100%; height: 480upx"></image>
					<view class="title">
						{{item.title}}
					
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="center">
			<view class="centerTop">
				{{top250Movie.title}}
				<text class="text" @click="toMuch(top250Movie.title)">更多<text style="font-size: 40upx;">></text></text>
			</view>
			<scroll-view style="white-space: nowrap; width: 100%;" :scroll-x="true">
				<view v-for="(item, index) in top250Movie.subjects" :key="index"   @click="topDetail(item.id)"
				style="width: 48%;  display: inline-block;">
					<image :src="item.images.small" style="width: 100%; height: 480upx"></image>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nowPlayingList: this.$store.state.nowPlayingList,
				newMovie: this.$store.state.newMovie,
				top250Movie: this.$store.state.top250Movie
			};
		},
		onReady() {
			console.log(this.$store.state)
		},
		computed: {
			citys() {
				return this.$store.state.city
			}
		},
		methods: {
			topDetail(id){
				console.log(id)
				uni.navigateTo({
					url: '../detail/detail?id=' + id 
				})
			},
			toMuch(title){
				uni.navigateTo({
					url: '../class/class?title=' + title
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;

		.top {
			width: 100%;
			height: 400upx;

			swiper {
				height: 400upx;
			}

			image {
				height: 100%;
				vertical-align: middle;
				width: 100%;
			}
		}

		.center {
			width: 100%;
			image{
				vertical-align: middle;
			}
			.centerTop {
				color: white;
				background: rgba(0,0,0,0.8);
				width: 100%;
				height: 48upx;
				line-height: 48upx;
				font-size: 30upx;
				letter-spacing: 4upx;
				padding: 16upx;
				.text {
					font-size: 36upx;
					float: right;
					margin-right: 24upx;
				}
			}
			.title {
				color: white;
				background: rgba(0,0,0,0.8);
				width: 100%;
				line-height: 80upx;
				font-size: 30upx;
				letter-spacing: 4upx;
				text-align: center;
				text-indent: 30upx;
			}
		}
	}
</style>
