<template>
    <div class="wraper">
        <vHeader></vHeader>
        <div class="container">
            <vInput placeholder="手机号："></vInput>
            <div class="line">
                <vInput placeholder="密码：" type="password"></vInput>
            </div>
            <submitBtn text="登录"></submitBtn>
            <vLink text="注册账号" :clickHandler="goRegister"></vLink>
        </div>
    </div>
</template>

<script>
import vHeader from './header/header.vue';
import vInput from './input/input.vue';
import submitBtn from './submit/submit.vue';
import vLink from './linkBtn/link.vue';
import vCode from './codeBtn/code.vue';

export default {
    components: {
        vHeader,
        vInput,
        submitBtn,
        vLink,
        vCode,
    },
    methods: {
        goRegister() {
            window.location.href='/register.html'
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