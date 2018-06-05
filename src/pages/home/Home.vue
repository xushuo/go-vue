<template>
  <div>
    <home-hearder></home-hearder>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>

</template>
<script>
  import homeHearder from './components/Header'
  import homeSwiper from './components/Swiper'
  import homeIcons from './components/Icons'
  export default {
    name : 'Home',
    components : {
      homeHearder,
      homeSwiper,
      homeIcons
    }
  }
</script>
<style>

</style>
