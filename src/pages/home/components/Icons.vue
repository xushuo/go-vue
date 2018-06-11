<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        name : 'HomeIcons',
        props : {
            iconList : Array
        },
        data(){
            return {
                swiperOption : {
                    autoplay : false
                }
            }
        },
        computed : {
            pages (){
                const pages = [];
                this.iconList.forEach((item, index) =>{
                    const page = Math.floor(index / 8);
                    if(!pages[page]){
                        pages[page] = [];
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    @import "~css/mixins.scss";
    .icons{
        margin-top:.1rem;

        .icon{
            position:relative;
            float:left;
            width:25%;
            height:0;
            padding-bottom:25%;
            overflow:hidden;
            .icon-img{
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:.44rem;
                box-sizing:border-box;
                padding:.1rem;
                .icon-img-content{
                    height:100%;
                    display:block;
                    margin:0 auto;
                }
            }
            .icon-desc{
                position:absolute;
                left:0;
                right:0;
                bottom:0;
                height:.44rem;
                line-height:.44rem;
                text-align:center;
                color:$darkTexrColor;
                @include ellipsis;
            }
        }
    }
</style>
<style>
    .icons > .swiper-container{
        height:0;
        padding-bottom:50%;
    }
</style>
