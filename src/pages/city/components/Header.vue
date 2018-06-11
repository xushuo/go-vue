<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont icon-fanhui back-icon"></div>
        </router-link>
    </div>
</template>
<script>
    export default {
        name : 'CityHeader'
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    .header{
        position:relative;
        overflow:hidden;
        line-height:.86rem;
        height:.86rem;
        font-size:.32rem;
        text-align:center;
        background:$bgColor;
        color:#fff;
        .back-icon{
            position:absolute;
            top:0;
            left:0;
            width:.64rem;
            text-align:center;
            font-size:.4rem;
            color:#fff;
        }
    }
</style>
