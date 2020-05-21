import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载
const Home = ()=>import('../views/home/Home.vue')
const Car = ()=>import('../views/car/Car.vue')
const Fen = ()=>import('../views/fen/Fen.vue')
const My = ()=>import('../views/my/My.vue')

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/Home'
    },
    {
      path:'/Home',
      name:'home',
      component:Home,
      meta:{
        title:'淘淘街'
      }
    },
    {
      path:'/fen',
      name:'fen',
      component:Fen,
      meta:{
        title:'分类'
      },
    },
    {
      path:'/car',
      name:'car',
      component:Car,
      meta:{
        title:'购物车'
      }
    },
    {
      path:'/my',
      name:'my',
      component:My,
      meta:{
        title:'个人中心'
      }
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
  //从from跳到to (从离开的路由跳转到去的路由)
  document.title = to.matched[0].meta.title
  next()
})
//后置钩子
//跳转后回调
router.afterEach((to,from) =>{})


export default router
