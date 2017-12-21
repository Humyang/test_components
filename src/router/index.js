import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueRouter from '@/components/vueRouter'
import Transition from '@/components/transition'
Vue.use(Router)

 const nRouter = new Router({
  routes: [
    
    {
      path: '/',
      name: 'vueRouter',
      component: vueRouter,
    },
    {
      path: '/beforeRouteUpdate/:id',
      component: vueRouter,
    },
    {
      // 路由独享的守卫
      path: '/beforeEnter',
      component: vueRouter,
      beforeEnter: (to, from, next) => {
        // ...
      }
    },
    // mete
    {
      // 路由独享的守卫
      path: '/meta',
      component: vueRouter,
      meta: { requiresAuth: true }
    },
    {
      path: '/usename/:userId',
      name: 'usename'
    },
    // params are denoted with a colon ":"
    // 传递参数
    { path: '/params/:foo/:bar' },
    // a param can be made optional by adding "?"
    // 用？表示参数可选
    { path: '/optional-params/:foo?' },
    // a param can be followed by a regex pattern in parens
    // this route will only be matched if :id is all numbers
    // 可以使用正则表达式匹配参数，例如只匹配参数id为数字的路径
    { path: '/params-with-regex/:id(\\d+)' },
    // asterisk can match anything
    // 匹配任何路径
    { path: '/asterisk/*' },
    // make part of th path optional by wrapping with parens and add "?"
    // 使用？使父路径的一部分变为可选的
    { path: '/optional-group/(foo/)?bar' },
    {path:'/transition',component:Transition,
      children:[
      {path:'/transition/first',component:resolve=>require(['../components/chidlren/first.vue'], resolve)},
      {path:'/transition/second',component:resolve=>require(['../components/chidlren/second.vue'], resolve)},
      {path:'/transition/third',component:resolve=>require(['../components/chidlren/third.vue'], resolve)}
    ]}
  ]
})

// 全局前置守卫
nRouter.beforeEach((to, from, next) => {
  // ...
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  
  // next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
  
  // next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
  
  // next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
  
  // next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
  
  // 确保要调用 next 方法，否则钩子就不会被 resolved。
  next()
})
// 全局后置钩子
// 你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
nRouter.afterEach((to, from) => {
  // ...
})
export default nRouter