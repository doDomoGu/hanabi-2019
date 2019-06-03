import { login, logout, checkToken, getUserInfo } from "@/api/auth"
import { getToken, setToken, removeToken } from "@/utils/authToken"

const state = {
  isLogin: null,
  loginErrorMsg: null,
  userInfo: {}
}

const actions = {
  async Login({ commit }, [username, password]) {
    const res = await login(username, password)
    if (res.data) {
      const data = res.data
      if (data.code === 0) {
        // 登录验证成功
        const _data = data.data
        // localstorage添加Token
        setToken(_data.token)
        // 设置登录状态为True
        commit("setLoginState", true)
        // 如果有错误信息则移除
        commit("removeLoginErrorMsg")
      } else {
        // 登录验证失败
        // removeToken()
        // commit("setLoginState", false)
        // 显示错误信息
        commit("setLoginErrorMsg", data.msg)
      }
    }
  },
  async CheckToken({ commit }) {
    const res = await checkToken(getToken())
    if (res.data) {
      const data = res.data
      if (data.code === 0) {
        // Token验证成功
        // 设置登录状态为True
        commit("setLoginState", true)
      } else {
        // Token验证失败
        // 移除localstorage里储存的Token
        removeToken()
        // 设置登录状态为False
        commit("setLoginState", false)
      }
    }
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
  async Logout({ commit }) {
    const res = await logout()
    if (res.data && res.data.code === 0) {
      removeToken()
      commit("setLoginState", false)
    }
  }
}

const getters = {
  isLogin: state => state.isLogin,
  loginErrorMsg: state => state.loginErrorMsg,
  userInfo: state => state.userInfo
}

const mutations = {
  setLoginState: (state, data) => {
    state.isLogin = data
  },
  removeLoginState: state => {
    state.isLogin = null
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
