import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载
const Home = ()=>import('../views/home/Home.vue')
const Car = ()=>import('../views/car/Car.vue')
const Fen = ()=>import('../views/fen/Fen.vue')
const My = ()=>import('../views/my/My.vue')
const Detail = () =>import('../views/xiangqin/Detail.vue')

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
      beforeEnter:(to,from,next) =>{
        document.title ='淘淘街'
        next()
      }
    },
    {
      path:'/fen',
      name:'fen',
      component:Fen,
      beforeEnter:(to,from,next) =>{
        document.title ='分类'
        next()
      }
    },
    {
      path:'/car',
      name:'car',
      component:Car,
      beforeEnter:(to,from,next) =>{
        document.title ='购物车'
        next()
      }
    },
    {
      path:'/my',
      name:'my',
      component:My,
      beforeEnter:(to,from,next) =>{
        document.title ='个人中心'
        next()
      }
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail,
      beforeEnter:(to,from,next) =>{
        document.title ='详情页'
        next()
      }
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next) =>{
//   //从from跳到to (从离开的路由跳转到去的路由)
//   // document.title = to.matched[0].meta.title
//   next()
// })
// //后置钩子
// //跳转后回调
// router.afterEach((to,from) =>{})


export default router
