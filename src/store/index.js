import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建实例
const store = new Vuex.Store({
    //状态
    state:{
        mag:1,
        catlist:[]

    },
    mutations:{
        add(state){
            state.mag+1
        },
        addcart(state,playLoad){
            let lodProduct = null
            lodProduct = state.catlist.find(item =>{item.id == playLoad.id})
            
            if (lodProduct) {
                lodProduct.count +=1
            } else {
                playLoad.count=1
                state.catlist.push(playLoad)
                // console.log(playLoad)
            }
        }
    }
})

export default store