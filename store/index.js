import Vue from 'vue'
import Vuex from 'vuex'

import QQMapWX from '../static/qqmap-wx-jssdk.min.js'
import { getInTheaters, getNewMovie, getTop250 } from '../apis/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '',
		nowPlayingList: [],
		newMovie: [],
		top250Movie: []
	},
	mutations: {

	},
	getters: {

	},
	actions: {
		getCity(context) {
			uni.showLoading({
				title: '加载中'
			})
			//检测用户是否授权
			uni.authorize({
				scope: 'scope.userLocation',
				success(res) {
					//引入腾讯地图api
					let qqmapsdk = new QQMapWX({
						key: 'QFQBZ-IZ63S-WTXOG-6AQHG-JWFXQ-NDFHQ'
					});
					uni.getLocation({
						type: 'gcj02',
						success(ret) {
							qqmapsdk.reverseGeocoder({
								location:{
									latitude: ret.latitude,
									longitude: ret.longitude
								},
								 async success(rest){
									context.state.city = rest.result.address_component.city;
									try{
										let ress1 = await getInTheaters({
											city: context.state.city,
											count: 8,
											start: 0
										})
										
										let ress2 = await getNewMovie({
											city: context.state.city,
											count: 8,
											start: 0
										})
										
										let ress3 = await getTop250({
											city: context.state.city,
											count: 8,
											start: 0
										})
										console.log(context.state.city)
										context.state.nowPlayingList = ress1
										context.state.newMovie = ress2
										context.state.top250Movie = ress3
										if(ress1.subjects.length != 0 && ress2.subjects.length != 0 && ress3.subjects.length != 0 ){
											uni.hideLoading()
										}
									}catch(e){
				
									}
								}
							})
						}
					})
				},
				fail() {
					uni.showToast({
						title: '请用户先授权，后使用',
						duration: 2000,
						icon: 'none'
					})
				}
			})
		}
	}
})
