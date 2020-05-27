const actions = {
    addcart(context , playLoad){
        return new Promise( (reslove,reject) =>{
            let lodProduct = null
            //找到第一个id相同的，返回catlist中id相同的数组
            lodProduct = context.state.catlist.find(item =>{item.id == playLoad.id})
            
            //判断是否有相同的id,有就数量+1，没有就添加
            if (lodProduct) {//有相同的id数量+1
                const index = state.catlist.indexOf(lodProduct)//返回id相同数组的下标
                context.commit('counts', index)
                reslove('数量+1')
            } else {
                playLoad.count=1
                // state.catlist.push(playLoad)
                context.commit('addtocart',playLoad)
                // console.log(playLoad)
                reslove('成功添加到购物车')
            }
        })         
    }
}

export default actions
