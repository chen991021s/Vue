import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建实例
const store = new Vuex.Store({
    //状态
    state:{
        mag:1
    },
    mutations:{
        add(state){
            state.mag+1
        }
    }
})

export default store