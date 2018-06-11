<template>
    <div>
        <home-hearder></home-hearder>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>

</template>
<script>
    import homeHearder from './components/Header'
    import homeSwiper from './components/Swiper'
    import homeIcons from './components/Icons'
    import homeRecommend from './components/Recommend'
    import homeWeekend from './components/Weekend'
    export default {
        name : 'Home',
        components : {
            homeHearder,
            homeSwiper,
            homeIcons,
            homeRecommend,
            homeWeekend
        }
    }
</script>
<style>

</style>
