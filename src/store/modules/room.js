import { getList } from "@/api/room"

const state = {
  list: [],
  count: 0
}

const actions = {
  async GetList({ commit }, params) {
    const res = await getList(params)
    if (res.data && res.data.code === 0) {
      const _data = res.data.data
      if (!_data.noUpdate) {
        commit("SetRoomList", _data.list)
      }
    } else {
      commit("ClearRoomList")
    }
  }
}

const getters = {
  list: state => state.list,
  count: state => state.count
}

const mutations = {
  SetRoomList(state, data) {
    state.list = data
    state.count = data.length
  },
  ClearRoomList(state) {
    state.list = []
    state.count = 0
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
