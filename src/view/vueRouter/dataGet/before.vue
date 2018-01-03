<template>
  <div class="post">

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
<script>
    
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    // getPost(to.params.id, (err, post) => {
    //   next(vm => vm.setData(err, post))
    // })
    setTimeout(() => {
        next(vm => vm.setData(null, {title:11111,body:22222}))
        // this.setData(null, {title:11111,body:22222})
    }, 1000);
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    // getPost(to.params.id, (err, post) => {
    //   this.setData(err, post)
    //   next()
    // })
    setTimeout(() => {
        this.setData(null, {title:11111,body:22222})
    }, 1000);
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
</script>