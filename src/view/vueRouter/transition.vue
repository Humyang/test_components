<template>
<div>
    <h1>transition</h1>
    <li><router-link to="/vueRouter/transition/first">first</router-link></li>
    <li><router-link to="/vueRouter/transition/second">second</router-link></li>
    <li><router-link to="/vueRouter/transition/third">thrid</router-link></li>
    <transition  name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</div>
</template>
<script>
export default {
  props:{
  },
  data () {
    return {
    }
  },
  watch:{
  },
  methods:{
  },
  mounted(){
  }
}
</script>
<style >
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>