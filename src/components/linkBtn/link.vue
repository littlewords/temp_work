<template>
    <div class="wraper" @click="clickHandler">
        {{text}}
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '去注册'
    },
    clickHandler: {
      type: Function,
      default: function() {}
    }
  }
};
</script>


<style lang="less" scoped>
@background: #01ffea;
.wraper {
  height: 50px;
  width: 100%;
  display: flex;
  color: #01ffea;
  line-height: 50px;
  justify-content: center;
  align-content: center;
}
</style>
