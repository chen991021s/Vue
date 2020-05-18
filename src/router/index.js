import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载
const Home = ()=>import('./views/home/Home.vue')
const Car = ()=>import('./views/car/Car.vue')
const Fen = ()=>import('./views/fen/Fen.vue')
const My = ()=>import('./views/my/My.vue')

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:Home
    },
    {
      path:'/Home',
      component:Home
    },
    {
      path:'/fen',
      component:Fen
    },
    {
      path:'/car',
      component:Car
    },
    {
      path:'/my',
      component:My
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
