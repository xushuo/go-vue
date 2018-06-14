<template>
    <div class="recommend">
        <div class="reconmend-title">热销推荐</div>
        <ul>
            <router-link :to="'/detail/'+item.id" tag="li" class="reconmend-item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" class="item-img" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        name : 'HomeRecommend',
        props : {
            recommendList : Array
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    @import "~css/mixins.scss";
    .recommend{
        .reconmend-title{
            margin-top:.2rem;
            line-height:.8rem;
            background:#eee;
            text-indent:.2rem;
        }
        .reconmend-item{
            overflow:hidden;
            display:flex;
            height:1.9rem;
            .item-img{
                width:1.7rem;
                width:1.7rem;
                padding:.1rem;
            }
            .item-info{
                flex:1;
                min-width:0;
                padding:.1rem;
                .item-title{
                    line-height:.54rem;
                    font-size:.32rem;
                }
                .item-desc{
                    line-height:.4rem;
                    color:#ccc;
                    @include ellipsis;
                }
                .item-button{
                    line-height:.44rem;
                    margin-top:.16rem;
                    background:#ff9300;
                    padding:0 .2rem;
                    border-radius:.06rem;
                    color:#fff;
                }
            }
        }
    }
</style>