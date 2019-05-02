import { getList } from "@/api/room"

const state = {
  list: [],
  count: 0
}

const actions = {
  GetList({ commit }, params) {
    return new Promise((resolve, reject) => {
      getList(params)
        .then(res => {
          if (res.data && res.data.code === 0) {
            const _data = res.data.data
            if (!_data.noUpdate) {
              commit("SetRoomList", _data.list)
            }
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
