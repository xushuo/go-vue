<template>
    <div>
        <detail-banner :gallaryImgs="gallaryImgs" :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :categoryList="categoryList"></detail-list>
        </div>
    </div>
</template>
<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name : 'Detail',
        components : {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data(){
            return {
                sightName : '',
                bannerImg : '',
                gallaryImgs : [],
                categoryList : []
            }
        },
        methods : {
            getDetailInfo(){
                axios.get('/api/detail.json', {
                    params : {
                        id : this.$route.params.id
                    }
                }).then((res) =>{
                    res = res.data
                    if(res.ret && res.data){
                        const data = res.data
                        console.log(data)
                        this.sightName = data.sightName
                        this.bannerImg = data.bannerImg
                        this.gallaryImgs = data.gallaryImgs
                        this.categoryList = data.categoryList
                    }
                })
            }
        },
        computed : {},
        mounted(){
            this.getDetailInfo()
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    .content{
        height:50rem;
    }
</style>
