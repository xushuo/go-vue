<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont icon-sousuo banner-icon"></span>{{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <fade>
            <gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="closeGallary"></gallary>
        </fade>
    </div>

</template>
<script>
    import axios from 'axios'
    import {mapState} from 'vuex'
    import Gallary from 'common/gallary/Gallary'
    import Fade from 'common/fade/Fade'
    export default {
        name : 'Banner',
        components : {
            Gallary,
            Fade
        },
        props : {
            sightName : String,
            bannerImg : String,
            gallaryImgs : Array
        },
        data(){
            return {
                showGallary : false
            }
        },
        methods : {
            handleBannerClick(){
                this.showGallary = true
            },
            closeGallary(){
                this.showGallary = false
            }
        },
        computed : {}
    }
</script>
<style scoped lang="scss" type="text/scss">
    .banner{
        position:relative;
        overflow:hidden;
        height:0;
        padding-bottom:55%;
        .banner-img{
            width:100%;
        }
        .banner-info{
            display:flex;
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            line-height:.6rem;
            color:#fff;
            background-image:linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            .banner-title{
                flex:1;
                font-size:.32rem;
                padding:0 .2rem;
            }
            .banner-number{
                margin-top:.14rem;
                padding:0 .4rem;
                line-height:.32rem;
                height:.32rem;
                border-radius:.2rem;
                font-size:.24rem;
                background:rgba(0, 0, 0, .8);
            }
            .banner-icon{
                font-size:.24rem;
            }
        }
    }
</style>
