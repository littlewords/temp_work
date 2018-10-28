<template>
    <div class="wraper">
        <vHeader title="注册"></vHeader>
        <div class="container">
            <vInput placeholder="手机号：" 
                type="tel"
                v-model="tel"
            />
            <div class="line">
                <vInput placeholder="验证码：" 
                    :clear="false"
                    v-model="code"
                />
                <vCode v-show="!codeGot" @click="getCode"></vCode>
                <img class="code" @click="getCode" v-show="codeGot" :src="codeSrc" />
            </div>
            <div class="line">
                <vInput placeholder="设置密码"
                    v-model="password"
                />
            </div>
            <submitBtn text="注册" @click="register"></submitBtn>
            <vLink text="去登录" :clickHandler="goLogin"></vLink>
        </div>
    </div>
</template>

<script>
import vHeader from './header/header.vue';
import vInput from './input/input.vue';
import submitBtn from './submit/submit.vue';
import vLink from './linkBtn/link.vue';
import vCode from './codeBtn/code.vue';
import axios from 'axios';

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
            this.codeGot = false;
        }
    },
    methods: {
        goLogin: function() {
            window.location.href = './index.html';
        },
        getCode: function() {
            this.codeSrc = `http://platform-trade.dktai.cn/loginAndRegister/getImgCode.html?mobile=${this.tel}$token=${Date.now()}`;
            this.codeGot = true;
        },
        register() {
            const {
                tel: mobile,
                password,
                code,
            } = this;
            const telValid = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if(!telValid.test(mobile)) {
                this.$toast('请输入合法的手机号');
                return 
            }
            const codeValid = /^\d{0,6}$/;
            if(!codeValid.test(code)) {
                this.$toast('请输入合法验证码')
                return
            }
            axios.post('http://platform-trade.dktai.cn/loginAndRegister/register', {
                mobile,
                password,
                code,
                resource: '1111',
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
.code{
    width: 100px;
    height: 45px;
}
</style>