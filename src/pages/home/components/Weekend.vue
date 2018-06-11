<template>
    <div class="weekend">
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="weekend-item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.url" class="item-img" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name : 'HomeRecommend',
        data () {
            return {
                recommendList : [{
                    id : '1',
                    url : 'http://img1.qunarzz.com/sight/source/1505/e3/e9761259adfc1d.jpg_r_640x214_21b96532.jpg',
                    title : '哈尔滨必游TOP10',
                    desc : '冰雪之冠，富有异国情调的美丽都市'
                },{
                    id : '2',
                    url : 'http://img1.qunarzz.com/sight/source/1505/e3/e9761259adfc1d.jpg_r_640x214_21b96532.jpg',
                    title : '哈尔滨必游TOP10',
                    desc : '冰雪之冠，富有异国情调的美丽都市'
                },{
                    id : '3',
                    url : 'http://img1.qunarzz.com/sight/source/1505/e3/e9761259adfc1d.jpg_r_640x214_21b96532.jpg',
                    title : '哈尔滨必游TOP10',
                    desc : '冰雪之冠，富有异国情调的美丽都市'
                }]
            }
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    @import "~css/mixins.scss";
    .weekend{
        .weekend-title{
            margin-top:.2rem;
            line-height:.8rem;
            background:#eee;
            text-indent:.2rem;
        }
        .item-img-wrapper{
            overflow:hidden;
            height:0;
            padding-bottom:33.9%;
            .item-img{
                width:100%;
                padding:.1rem;
            }
        }
        .item-info{
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
        }
    }
</style>