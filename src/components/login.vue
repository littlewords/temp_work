<template>
    <div class="wraper">
        <vHeader></vHeader>
        <div class="container">
            <vInput></vInput>
        </div>
    </div>
</template>

<script>
import header from './header/header.vue';
import input from './input/input.vue';
export default {
    components: {
        vHeader: header,
        vInput: input,
    }
}
</script>


<style lang="less" scoped>
.container{
    margin: 15px;
}
</style>