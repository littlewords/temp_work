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
      default: '获取验证码'
    }
  }
};
</script>


<style lang="less" scoped>
@background: #3180ff;
.wraper {
  background: @background;
  height: 45px;
  width: 100px;
  color: #fff;
  margin-left: 20px;
  text-align: center;
  line-height: 45px;
  font-size: 12px;
  border-radius: 5px;
}
</style>
