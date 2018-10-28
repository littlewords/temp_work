<template>
    <div class="wraper" @click="$emit('click')">
        {{text}}
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '登录'
    }
  }
};
</script>


<style lang="less" scoped>
@background: #01ffea;
.wraper {
  background: @background;
  height: 50px;
  width: 100%;
  display: flex;
  color: #303238;
  box-sizing: border-box;
  line-height: 40px;
  border: 5px solid #4c5059;
  justify-content: center;
  align-content: center;
  border-radius: 50px;
}
</style>
