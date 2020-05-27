const mutations = {
	add(state){
		state.mag+1
	},

	addtocart(state, goods) {
		 state.catlist.push(goods)
	},
	counts(state, index) {
		//对应index的数组count+1
		state.catlist[index].count += 1
	}
}

export default mutations
