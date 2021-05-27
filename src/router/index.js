
//导入 vue-router
import Router from 'vue-router'
import Vue from 'vue'
import Home from '../views/login'
import Home from '../views/register'
//懒加载导入
const Profile = () => import('../components/Profile')
//1.通过vue.use(插件),安装插件
Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: '/user/:username',
    component: User,
    meta:{
      title:'用户'
    }
  },
  {
    path : '/profile',
    component: Profile,
    meta:{
      title:'档案'
    }
  }
]

//2.创建vue-router对象
const router = new Router({
  routes,
  mode : 'history'
})
// router.beforeEach((to,from,next) =>{
//
//   document.title = to.matched[0].meta.title
//   console.log(to)
//   next()
// })
export default router
//3.讲vue-router对象传入到vue实例
//这一步在mian.js里面， Vue router，所以在new Router的时候要使用 export来导出
//在router里面配置 映射关系 url 对应 组件