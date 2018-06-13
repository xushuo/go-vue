<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-fanhui back-icon"></div>
        </div>
        <div class="header-input">
            <span class="iconfont icon-sousuo"></span> 输入城市/景点/游玩主题
        </div>
        <router-link to='/city'>
            <div class="header-right">{{this.doubleCity}} <span class="iconfont icon-arrow-down-copy icon-arrow"></span>
            </div>
        </router-link>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        name : 'HomeHeader',
        computed : {
            ...mapState(['city']),
            ...mapGetters(['doubleCity'])
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    .header{
        display:flex;
        line-height:.86rem;
        background:$bgColor;
        color:#fff;
        .header-left{
            width:.64rem;
            float:left;
            .back-icon{
                text-align:center;
                font-size:.4rem;
            }
        }
        .header-input{
            flex:1;
            line-height:.64rem;
            height:.64rem;
            margin-top:.12rem;
            margin-left:.2rem;
            padding-left:.2rem;
            border-radius:.1rem;
            background:#fff;
            color:#ccc
        }
        .header-right{
            min-width:1.04rem;
            padding:0 .1rem;
            float:right;
            text-align:center;
            color:#fff;
            .icon-arrow{
                margin-left:-.04rem;
                font-size:.24rem;
            }
        }
    }
</style>
