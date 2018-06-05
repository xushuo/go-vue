<template>
  <div>
    <home-hearder></home-hearder>
    <home-swiper></home-swiper>
  </div>

</template>
<script>
  import homeHearder from './components/Header'
  import homeSwiper from './components/Swiper'
  export default {
    name : 'Home',
    components : {
      homeHearder,
      homeSwiper
    }
  }
</script>
<style>

</style>
