import Vue from "vue";
import Vuex from 'vuex'
import state from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const vuex = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules:{

    }
})

export default vuex