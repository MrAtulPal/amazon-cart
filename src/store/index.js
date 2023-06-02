import Vue from 'vue'
import Vuex from 'vuex'
import productlist from './modules/productlist'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        productlist
    }
})