<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x330_0dcecae1.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">北京海洋馆(AAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont icon-sousuo banner-icon"></span>30
                </div>
            </div>
        </div>
        <gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="closeGallary"></gallary>
    </div>

</template>
<script>
    import axios from 'axios'
    import {mapState} from 'vuex'
    import Gallary from 'common/gallary/Gallary'
    export default {
        name : 'Banner',
        components : {
            Gallary
        },
        data(){
            return {
                showGallary : false,
                gallaryImgs : []
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
        computed : {},
        mounted(){
            axios.get('/api/detail.json').then((res) =>{
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    console.log(data)
                    //this.city = data.city
                    this.gallaryImgs = data.gallaryImgs
                }
            })
        }
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
