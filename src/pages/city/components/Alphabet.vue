<template>
    <ul class="list">
        <li class="item" v-for="city of letters" :key="city" :ref="city" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleClick">{{city}}</li>
    </ul>
</template>
<script>
    export default {
        name : 'CityAlphabet',
        props : {
            cities : Object
        },
        computed : {
            letters(){
                const letters = []
                for(let i in this.cities){
                    letters.push(i)
                }
                return letters
            }
        },
        data(){
            return {
                touchStatus : false
            }
        },
        methods : {
            handleClick(e){
                this.$emit('change', e.target.innerText)
            },
            handleTouchStart(e){
                this.touchStatus = true
            },
            handleTouchMove(e){
                if(this.touchStatus){
                    const startY = this.$refs[e.target.innerText][0].offsetTop
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - startY) / 20)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change', this.letters[index])
                    }
                }
            },
            handleTouchEnd(e){
                this.touchStatus = false
            }
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    .list{
        display:flex;
        flex-direction:column;
        justify-content:center;
        position:absolute;
        top:1.58rem;
        right:0;
        bottom:0;
        width:.4rem;
        .item{
            line-height:.4rem;
            text-align:center;
            color:$bgColor;
        }
    }
</style>
