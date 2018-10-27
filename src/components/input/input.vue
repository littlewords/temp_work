<template>
    <div class="wraper">
        <input class="input" :placeholder="placeholder" :type="type" />
        <i class="clear" v-show="clear"></i>
    </div>
</template>

<script>
export default {
  props: {
    clear: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    type: {
      type: String,
      default: 'text',
    }
  }
};
</script>


<style lang="less" scoped>
@background: #373a41;
.wraper {
  background: @background;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
}
.input {
  background: none;
  flex: 1;
  font-size: 15px;
  color: #b8b9ba;
  margin-left: 15px;
  &::placeholder {
    // color: #a2a3a5;
    color: #b8b9ba;
    font-size: 15px;
  }
}
.clear {
  background: url("./clear.png");
  background-size: 35px 33.5px;
  width: 21px;
  height: 20px;
  margin-right: 15px;
  align-self: center;
  background-position: -5px -6px;
  display: block;
}
</style>
