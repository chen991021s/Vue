import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

//安装插件
Vue.use(Vuex)

//创建实例
const store = new Vuex.Store({
    //状态
    state:{
        mag:1,
        catlist:[]

    },
    mutations,
    getters,
    actions
})

export default store