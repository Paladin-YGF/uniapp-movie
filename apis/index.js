//接口根地址
const baseUrl = "https://douban-api.uieee.com"

//正在上映的电影
export  async function getInTheaters(parmas){
	// return new Promise((resolve, reject) => {
	// 	uni.request({
	// 		url: `${baseUrl}/v2/movie/in_theaters`,
	// 		data: parmas,
	// 		header:{
	// 			'Content-Type': "json"
	// 		},
	// 		success(res){
	// 			resolve(res)
	// 		},
	// 		fail(err){
	// 			reject(err)
	// 		}
	// 	})
	// })
	
	try{
		let  [error, res] = await uni.request({
			url: `${baseUrl}/v2/movie/in_theaters`,
			data: parmas,
			header:{
						'Content-Type': "json"
					}
		})
		return res.data
	}catch(e){
		//TODO handle the exception
	}
}


export  async function getNewMovie(parmas){
	try{
		let  [error, res] = await uni.request({
			url: `${baseUrl}/v2/movie/new_movies`,
			data: parmas,
			header:{
						'Content-Type': "json"
					}
		})
		return res.data
	}catch(e){
		//TODO handle the exception
	}
}

export  async function getTop250(parmas){
	try{
		let  [error, res] = await uni.request({
			url: `${baseUrl}/v2/movie/top250`,
			data: parmas,
			header:{
						'Content-Type': "json"
					}
		})
		return res.data
	}catch(e){
		//TODO handle the exception
	}
}

export async function getDetail(id) {
	try{
		let [error, res] = await uni.request({
			url: `${baseUrl}/v2/movie/subject/${id}`,
			header:{
				'content-type': "json"
			}
		})
		return res.data
	}catch(e){
		//TODO handle the exception
	}
}


