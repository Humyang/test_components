<template>
  <div class="radio_wrap" @click="checkedM" :class="{checked:isChecked}">
    <input type="radio" name="abc"
        @change="updateValue"
        :value="value"
        ref="radio"
        v-show="false"
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: ["value", "checked"],
  data() {
    return {
      isChecked: false
    };
  },
  watch:{
      checked:function(){
          console.log('watch')
          if (this.checked == this.value) {
                this.isChecked = true;
            } else {
                this.isChecked = false;
            }
      }
  },
  methods: {
    checkedM() {
      this.$refs.radio.checked = true;
      this.updateValue();
    },
    updateValue: function() {
      //   console.log('updateValue')
      //   this.$emit('value', value)
      // var formattedValue = value
      //     // 删除两侧的空格符
      //     .trim()
      //     // 保留 2 位小数
      //     .slice(
      //     0,
      //     value.indexOf('.') === -1
      //         ? value.length
      //         : value.indexOf('.') + 3
      //     )
      // // 如果值尚不合规，则手动覆盖为合规的值
      // if (formattedValue !== value) {
      //     this.$refs.input.value = formattedValue
      // }
      // // 通过 input 事件带出数值
    //   console.log(this.$refs.radio.checked);
      // if(!this.$refs.radio.checked){
      

      // }else{

      // }
      this.$emit("change", this.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radio_wrap {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ddd;
}
.checked {
  background-color: #42b983;
}
h1,
h2 {
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
