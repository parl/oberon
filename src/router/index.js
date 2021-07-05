import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Home from '../views/home.vue'
import Video from '../views/video.vue'
import Akun from '../views/akun.vue'
import Myaccount from '../views/myaccount.vue'
import Test from '../views/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if(!token) return next('/login')
        return next()
      }
    },
    {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if(!token) return next('/login')
        return next()
      }
    },
    {
      path: '/video',
      component: Video,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if(!token) return next('/login')
        return next()
      }
    },
    {
      path: '/test',
      component: Test,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if(!token) return next('/login')
        return next()
      }
    },
    {
      path: '/akun',
      component: Akun,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if(!token) return next('/login')
        return next()
      }
    },
    {
      path: '/myaccount',
      component: Myaccount,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if(!token) return next('/login')
        return next()
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if(!token) return next()
        return next('/home')
      }
    }
  ]
})
