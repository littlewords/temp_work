<template>
    <div class="wraper">
        <input class="input"
          :value="value" 
          :placeholder="placeholder" 
          :type="inputType"
          @input="onInput"
           />
        <i class="clear" v-show="showClear" @click="clearValue"></i>
    </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     value: '',
  //   }
  // },
  props: {
    clear: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    type: {
      type: String,
      default: 'text',
    }
  },
  methods: {
    clearValue() {
      // this.value = '';
      this.$emit('input', '');
    },
    onInput($event) {
      this.$emit('input', $event.target.value);
      return false;
    }
  },
  computed: {
    inputType() {
      switch(this.type) {
        case 'tel':
          return 'tel' ;
          break;
        case 'password':
          return 'password';
          break;
        default: 
          return 'text';
          break;
      }
    },
    showClear() {
      if(this.clear === false) {
        return false
      }

      if(this.value === '') {
        return false
      }

      return true;
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
