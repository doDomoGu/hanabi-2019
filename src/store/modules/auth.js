import { login, logout, checkToken, getUserInfo } from "@/api/auth"
import { getToken, setToken, removeToken } from "@/utils/authToken"

const state = {
  loginState: null,
  loginErrorMsg: null,
  userInfo: {}
}

const actions = {
  async Login({ commit }, [username, password]) {
    const res = await login(username, password)
    if (res.data) {
      const data = res.data
      if (data.code === 0) {
        const _data = data.data
        setToken(_data.token)
        commit("setLoginState", true)
        commit("removeLoginErrorMsg")
      } else {
        removeToken()
        commit("setLoginState", false)
        commit("setLoginErrorMsg", data.msg)
      }
    }
  },
  async CheckToken({ commit }) {
    const res = await checkToken(getToken())
    if (res.data) {
      const data = res.data
      if (data.code === 0) {
        commit("setLoginState", true)
      } else {
        // 提交的token 错误
        removeToken()
        commit("setLoginState", false)
      }
    }
    return 1
  },
  async GetInfo({ commit }) {
    const res = await getUserInfo(getToken())
    if (res.data) {
      const _data = res.data
      if (_data.code === 0) {
        commit("setUserInfo", _data.data)
      } else {
        commit("removeUserInfo")
      }
    }
  },
  Logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(res => {
          if (res.data && res.data.code === 0) {
            removeToken()
            commit("removeLoginState")
          }
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const getters = {
  loginState: state => state.loginState,
  loginErrorMsg: state => state.loginErrorMsg,
  userInfo: state => state.userInfo
}

const mutations = {
  setLoginState: (state, data) => {
    state.loginState = data
  },
  removeLoginState: state => {
    state.loginState = null
  },
  setLoginErrorMsg: (state, msg) => {
    state.loginErrorMsg = msg
  },
  removeLoginErrorMsg: state => {
    state.loginErrorMsg = null
  },
  setUserInfo: (state, data) => {
    state.userInfo = data
  },
  removeUserInfo: state => {
    state.userInfo = {}
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
