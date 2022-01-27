import Vue from "vue";
import Vuex from "vuex";
import tests from "@/store/modules/tests";
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        tests
    }
})

export default store
