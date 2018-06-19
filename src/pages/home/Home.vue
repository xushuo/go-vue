<template>
    <div>
        <home-hearder></home-hearder>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>

</template>
<script>
    import homeHearder from './components/Header'
    import homeSwiper from './components/Swiper'
    import homeIcons from './components/Icons'
    import homeRecommend from './components/Recommend'
    import homeWeekend from './components/Weekend'
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name : 'Home',
        components : {
            homeHearder,
            homeSwiper,
            homeIcons,
            homeRecommend,
            homeWeekend
        },
        data(){
            return {
                "lastCity" : '',
                "swiperList" : [],
                "iconList" : [],
                "recommendList" : [],
                "weekendList" : []
            }
        },
        methods : {
            getHomeInfo(){
                axios.get('/go-api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    console.log(data)
                    //this.city = data.city
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            }
        },
        computed : {
            ...mapState(['city'])
        },
        mounted(){
            this.lastCity = this.city;
            this.getHomeInfo()
        },
        activated(){
            if(this.lastCity != this.city){
                this.lastCity = this.city;
                this.getHomeInfo()
            }
        }
    }
</script>
<style>

</style>
