<template>
    <div class="list">
        <div class="item" v-for="(item,index) of categoryList" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon">
                    {{item.title}}
                </span>
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :categoryList="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'DetailList',
        props : {
            categoryList : Array
        },
        computed : {},
        mounted (){
        },
        methods : {}
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    .list{
        .item-title{
            line-height:.8rem;
            font-size:.32rem;
            padding:0 .2rem;
            .item-title-icon{
                position:relative;
                left:.06rem;
                top:.06rem;
                width:.36rem;
                padding-left:.4rem;
                height:.36rem;
                background:url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
                margin-right:.1rem;
                background-size:.4rem 3rem;
            }
        }
        .item-children{
            padding:0 .2rem;
        }
    }
</style>
