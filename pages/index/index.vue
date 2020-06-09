<template>
	<view class="content" v-if="nowPlayingList.length != undefined">
		<image :src="nowPlayingList[0].images.large"></image>
		<view class="btn" @click="toShouye">立即体验</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onReady() {
			this.$store.dispatch("getCity")
		},
		methods: {
			toShouye(){
				uni.navigateTo({
					url: '../shouye/shouye'
				})
			}
		},
		computed:{
			nowPlayingList(){
				console.log(this.$store.state.nowPlayingList.subjects)
				return this.$store.state.nowPlayingList.subjects
			}
		}
	}
</script>

<style lang="scss">
	.content {
		position: relative;
		width: 100vw;
		height: 100vh;
		// background: #007AFF;
		image{
			width: 100%;
			height: 100%;
		}
		.btn{
			position: absolute;
			left: 50%;
			bottom: 110upx;
			width: 180upx;
			height: 50upx;
			line-height: 50upx;
			padding: 20upx;
			text-align: center;
			border: 2upx solid #999999;
			border-radius: 10upx;
			letter-spacing: 4upx;
			color: white;
			transform: translateX(-50%);
		}
		.btn:active {
			background: rgba(0,0,0,0.5);
		}
	}

</style>
