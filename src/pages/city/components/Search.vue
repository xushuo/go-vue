<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyWord" placeholder="输入城市或拼音" class="search-input"/>
        </div>
        <div class="search-content" ref="wrapper" v-show="keyWord">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        name : 'CitySearch',
        props : {
            cities : Object
        },
        data(){
            return {
                keyWord : '',
                list : [],
                timer : null
            }
        },
        computed : {
            hasNoData(){
                return !this.list.length
            }
        },
        methods : {
            handleCityClick(name){
                //    this.$store.dispatch('changeCity', name)
                this.$store.commit('changeCity', name)
                this.$router.push('/')
            }
        },
        watch : {
            keyWord(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyWord){
                    this.list = []
                    return
                }
                this.timer = setTimeout(() =>{
                    const result = [];
                    for(let i in this.cities){
                        this.cities[i].forEach((val) =>{
                            if(val.spell.indexOf(this.keyWord) > -1 || val.name.indexOf(this.keyWord) > -1){
                                result.push(val)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper)
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    .search{
        height:.72rem;
        padding:0 .1rem;
        background:$bgColor;
        .search-input{
            box-sizing:border-box;
            width:100%;
            height:.62rem;
            padding:0 .1rem;
            line-height:.62rem;
            text-align:center;
            border-radius:.06rem;
            color:#666;
        }
    }
    .search-content{
        z-index:1;
        overflow:hidden;
        position:absolute;
        top:1.58rem;
        left:0;
        right:0;
        bottom:0;
        background:#eee;
        .search-item{
            line-height:.62rem;
            padding-left:.2rem;
            color:#666;
            background:#fff;
        }
    }
</style>
