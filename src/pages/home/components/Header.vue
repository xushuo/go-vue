<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span> 输入城市/景点/游玩主题
    </div>
    <div class="header-right">城市 <span class="iconfont icon-arrow-down-copy icon-arrow"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name : 'HomeHeader'
  }
</script>
<style scoped lang="scss">
  @import "~css/theme.scss";
  .header{
    display:flex;
    line-height:.86rem;
    background: $bgColor;
    color:#fff;
  .header-left{
    width:.64rem;
    float:left;
  .back-icon{
    text-align:center;
    font-size:.4rem;
  }
  }
  .header-input{
    flex:1;
    line-height:.64rem;
    height:.64rem;
    margin-top:.12rem;
    margin-left:.2rem;
    padding-left:.2rem;
    border-radius:.1rem;
    background:#fff;
    color:#ccc
  }
  .header-right{
    width:1.24rem;
    float:right;
    text-align:center;
  .icon-arrow{
    margin-left:-.04rem;
    font-size:.24rem;
  }
  }
  }
</style>
