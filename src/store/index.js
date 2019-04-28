import Vue from "vue"
import Vuex from "vuex"

// import common from "./common"

import auth from "./modules/auth"
import room from "./modules/room"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // common,
    auth,
    room
  },
  state: {},
  mutations: {},
  actions: {}
})
