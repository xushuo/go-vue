<template>
    <div class="gallary" @click="handleGallary()">
        <div class="warpper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(gallaryImg,index) of gallaryImgs" :key="index">
                    <img class="swiper-img" :src="gallaryImg" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name : 'Gallary',
        props : {
            gallaryImgs : {
                type : Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                swiperOption : {
                    pagination : '.swiper-pagination',
                    paginationType : 'fraction',
                    observer : true,
                    observeParents : true
                }
            }
        },
        methods:{
            handleGallary(){
                this.$emit('close')
            }
        },
        mounted(){
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    .gallary{
        display:flex;
        flex-direction:column;
        justify-content:center;
        z-index:99;
        position:fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background:#000;
        .warpper{
            height:0;
            width:100%;
            padding-bottom:100%;
            .swiper-img{
                width:100%;
            }
            .swiper-pagination{
                color:#fff;
                bottom:-1rem;
            }
        }
    }
</style>
<style>
    .gallary .swiper-container{
        overflow:inherit;
    }
</style>
