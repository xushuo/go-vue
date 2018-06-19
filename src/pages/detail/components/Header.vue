<template>
    <div class="header">
        <router-link tag="div" to="/" class="header-abs" v-show="showABS">
            <div class="iconfont icon-fanhui back-icon header-abs-back"></div>
        </router-link>
        <div class="header-fixed" v-show="!showABS" :style="opacityStyle">
            <router-link tag="div" to="/" class="header-abs">
                <div class="iconfont icon-fanhui back-icon header-fixed-back"></div>
            </router-link>
            景点详情
        </div>
    </div>

</template>
<script>
    import axios from 'axios'
    export default {
        name : 'Header',
        data(){
            return {
                showABS : true,
                opacityStyle : {
                    opacity : 0
                }
            }
        },
        activated(){
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated(){
            window.removeEventListener('scroll', this.handleScroll)
        },
        methods : {
            handleScroll(){
                const top = document.documentElement.scrollTop;
                if(top > 60){
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity
                    this.opacityStyle = {
                        opacity : opacity
                    }
                    this.showABS = false
                } else {
                    this.showABS = true
                }
            }
        },
        computed : {},
        mounted(){
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    .header{
        .header-abs{
            position:absolute;
            left:.2rem;
            top:.05rem;
            width:.8rem;
            height:.8rem;
            line-height:.8rem;
            text-align:center;
            border-radius:.4rem;
            .header-abs-back{
                color:#fff;
                font-size:.4rem;
            }
        }
        .header-fixed{
            position:fixed;
            z-index:2;
            top:0;
            left:0;
            right:0;
            line-height:.86rem;
            height:.86rem;
            font-size:.32rem;
            text-align:center;
            background:$bgColor;
            color:#fff;
            .header-fixed-back{
                position:absolute;
                top:0;
                left:0;
                width:.64rem;
                text-align:center;
                font-size:.4rem;
                color:#fff;
            }
        }
    }
</style>
