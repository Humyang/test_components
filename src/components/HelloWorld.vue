<template>
  <div class="hello">
    <radio-plus v-model="radio1" value="1" style="margin-right:20px;"/>
    <radio-plus v-model="radio1" value="2"/>
  </div>
</template>

<script>
import radioPlus from './radioPlus'
export default {
  components:{
      radioPlus
    },
  data () {
    return {
      radio1:"",
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
