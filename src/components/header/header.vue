<template>
    <div class="wraper">
        <i class="back"></i>
        <div class="title">{{title}}</div>
        <i class="menu"></i>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: '登录'
        }
    }
}
</script>

<style scoped lang="less">
    .wraper{
        height: 50px;
        background: #303238;
        line-height: 50px;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .title{
        color: white;
        display: block;
        text-align: center;
        flex: 1;
    }
    .back{
        background: url('./back.png');
        display: block;
        width: 50px;
        height: 50px;;
        background-size: 28px 34px;
        background-repeat: no-repeat;
        background-position: 13px 10px;
    }
    .menu{
        display: block;
        width: 50px;
        height: 50px;;
    }
</style>

