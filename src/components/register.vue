<template>
    <div class="wraper">
        <vHeader></vHeader>
        <div class="container">
            <vInput></vInput>
            <div class="line">
                <vInput></vInput>
                <vCode></vCode>
            </div>
            <div class="line">
                <vInput></vInput>
            </div>
            <submitBtn></submitBtn>
            <vLink></vLink>
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