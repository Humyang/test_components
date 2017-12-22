<template>
  <div class="vueRouter">
      <h1>Route Matching</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/params/foo/bar">/params/foo/bar</router-link></li>
        <li><router-link to="/optional-params">/optional-params</router-link></li>
        <li><router-link to="/optional-params/foo">/optional-params/foo</router-link></li>
        <li><router-link to="/params-with-regex/123">/params-with-regex/123</router-link></li>
        <li><router-link to="/params-with-regex/abc">/params-with-regex/abc</router-link></li>
        <li><router-link to="/asterisk/foo">/asterisk/foo</router-link></li>
        <li><router-link to="/asterisk/foo/bar">/asterisk/foo/bar</router-link></li>
        <li><router-link to="/optional-group/bar">/optional-group/bar</router-link></li>
        <li><router-link to="/optional-group/foo/bar">/optional-group/foo/bar</router-link></li>
      </ul>
      <h1>编程方式的导航</h1>
      <p @click="$router.push('home')">// 字符串 router.push('home')</p>
      <p @click="$router.push({ path: 'home' })">// 对象 router.push({ path: 'home' })</p>
      <p @click="$router.push({ name: 'usename', params: { userId: 123 }})">// 命名的路由 router.push({ name: 'usename', params: { userId: 123 }})</p>
      <p >// 带查询参数，变成 /register?plan=private</p>
      <p @click="$router.push({ path: 'register', query: { plan: 'private' }})">router.push({ path: 'register', query: { plan: 'private' }})</p>
      
      <h1>onComplete 和 onAbort</h1>
      <p @click="onComplete">onComplete</p>
      <p @click="onAbort">onAbort</p>

      <h1>beforeRouteUpdate</h1>
      <p @click="beforeRouteUpdate">beforeRouteUpdate</p>
      <!-- <pre>{{ JSON.stringify($route, null, 2) }}</pre> -->
      <h1>元信息</h1>
      <p @click="$router.push('meta')">meta</p>
      <h1>Transition</h1>
      <p @click="$router.push('transition')">meta</p>

      <h1>数据获取</h1>
      <p @click="$router.push('dataGet')">数据获取</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio1:"",
      id:0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    onComplete(){
      this.$router.push({ path: 'home' },()=>{
        console.log('on complete')
      },()=>{
        console.log('on abort')
      })
    },
    onAbort(){
      this.$router.push({ path: 'home' },()=>{
        this.$router.push({ path: 'home' },()=>{
          console.log('on complete')
        },()=>{
          // 导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由
          console.log('on abort')
        })
      })
    },
    beforeRouteUpdate(){
      this.id++
      this.$router.push('/beforeRouteUpdate/'+this.id)
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('to',to,'from',from)
    // 注意调用next路由才会真正跳转
    next()
    // react to route changes...
    // don't forget to call next()
  }
}
</script>
<style scoped>

</style>
