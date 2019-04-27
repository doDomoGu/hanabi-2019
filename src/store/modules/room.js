import { getList } from "@/api/room"

const state = {
  list: [],
  count: 0
}

const actions = {
  GetList({ commit }) {
    return new Promise((resolve, reject) => {
      getList()
        .then(res => {
          if (res.data) {
            commit("SetRoomList", res.data)
          } else {
            commit("ClearRoomList")
          }
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const getters = {
  list: state => state.list,
  count: state => state.count
}

const mutations = {
  SetRoomList(state, data) {
    state.list = data
  },
  ClearRoomList(state) {
    state.list = []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
