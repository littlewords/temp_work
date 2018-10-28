<template>
    <div class="wraper">
        <vHeader title="登录"></vHeader>
        <div class="container">
            <vInput placeholder="手机号：" 
                type="tel"
                v-model="tel"
            />
            <div class="line">
                <vInput placeholder="密码:"
                    v-model="password"
                    type="password"
                />
            </div>
            <submitBtn text="登录" @click="login"></submitBtn>
            <vLink text="注册账号" :clickHandler="goRegister"></vLink>
        </div>
    </div>
</template>

<script>
import vHeader from './header/header.vue';
import vInput from './input/input.vue';
import submitBtn from './submit/submit.vue';
import vLink from './linkBtn/link.vue';
import axios from 'axios';
import vCode from './codeBtn/code.vue';
const phoneReg = /^\d{0,11}$/;
export default {
    components: {
        vHeader,
        vInput,
        submitBtn,
        vLink,
        vCode,
    },
    data() {
        return {
            tel: '',
            code: '',
            password: '',
            codeSrc: '',
            codeGot: false,
        }
    },
    watch: {
        tel(newV, oldV) {
            window.regi = this;
            if(!newV.match(phoneReg)) {
                this.$toast('手机号只能为11位以内数字')
                this.$nextTick(() => {
                    this.tel = oldV;
                })
            }
        }
    },
    methods: {
        goRegister() {
            window.location.href='/register.html'
        },
        login() {
            const {
                tel: mobile,
                password,
            } = this;
            const telValid = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if(!telValid.test(mobile)) {
                this.$toast('请输入合法的手机号');
                return 
            }
            axios.post('http://platform-trade.dktai.cn/loginAndRegister/mobileLogin', {
                mobile,
                password,
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(res);
                this.$toast('服务器错误')
            })
        }
    }
}
</script>


<style lang="less" scoped>
.container{
    margin: 15px;
}
.line{
    display: flex;
    margin: 10px 0;

}
</style>