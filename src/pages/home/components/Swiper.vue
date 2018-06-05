<template>
  <div class="wraper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgURL" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>
<script>
  export default {
    name : 'HomeSwiper',
    data() {
      return {
        swiperOption : {
          pagination : '.swiper-pagination',
          loop:true
        },
        swiperList : [
          {
            id : '1',
            imgURL : 'https://img1.qunarzz.com/vc/56/c2/bc/94cd92692289c78770403648b5.jpg'
          },
          {
            id : '2',
            imgURL : 'https://img1.qunarzz.com/vc/f4/c6/76/050213a01e4da3696f91a9fca5.jpg'
          }, {
            id : '3',
            imgURL : 'https://img1.qunarzz.com/vc/19/70/66/8c54d8f3830e0f09cd3f060809.jpg'
          }
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
  .wraper{
    width:100%;
    height:0;
    overflow:hidden;
    padding-bottom:30.5%;
  .swiper-img{
    width:100%;
  }
  }
</style>
<style>
  .swiper-pagination-bullet-active{
    background:#fff;
  }
</style>
