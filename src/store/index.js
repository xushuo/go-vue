import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state : state,
    /*   actions : {
     changeCity(ctx, data){
     ctx.commit('changeCity', data)
     }
     },*/
    mutations : mutations,
    getters : {
        doubleCity(state){
            return state.city + ' ' + state.city
        }
    }
})