<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgURL" alt="">
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
    data(){
      return {
        swiperOption : {},
        iconList : [
          {
            id : '1',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc : '热门景点热门景点热门景点热门景点热门景点热门景点'
          }, {
            id : '2',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc : '必游榜单'
          }, {
            id : '3',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            desc : '踏青赏花'
          }, {
            id : '4',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc : '一日游'
          }, {
            id : '5',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            desc : '动植物园'
          }, {
            id : '6',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
            desc : '故宫'
          }, {
            id : '7',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            desc : '主题乐园'
          }, {
            id : '8',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
            desc : 'Q+精选'
          }, {
            id : '9',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
            desc : '演出'
          }, {
            id : '10',
            imgURL : 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
            desc : '自然风光'
          }
        ]
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
<style scoped lang="scss">
  @import "~css/theme.scss";
  @import "~css/mixins.scss";
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
</style>
<style>
  .icons > .swiper-container{
    height:0;
    padding-bottom:50%;
  }
</style>
