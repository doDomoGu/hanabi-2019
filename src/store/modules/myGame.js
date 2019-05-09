import {
  start,
  end,
  doDiscard,
  doPlay,
  doCue,
  autoPlay,
  getInfo
} from "@/api/myGame"

const state = {
  isPlaying: null,
  logList: [],
  gameInfo: {
    roundNum: -1,
    roundPlayerIsHost: -1,
    lastUpdated: null
  },
  cardInfo: {
    hostHands: [],
    guestHands: [],
    libraryCardsNum: -1,
    discardCardsNum: -1,
    cueNum: -1,
    chanceNum: -1,
    score: -1,
    successCards: []
  }
}

const actions = {
  async Start() {
    await start()
  },
  async End() {
    await end()
  },
  async GetInfo({ commit }, params = {}) {
    if (!params.hasOwnProperty("mode")) {
      params.mode = "all"
    }
    const res = await getInfo(params)
    if (res.data && res.data.code === 0) {
      const _res = res.data.data
      if (!_res.noUpdate) {
        if (_res.isPlaying) {
          commit("SetGameIsPlaying")
          if (params.mode === "all") {
            commit("SetGameInfo", _res.game)
            commit("SetCardInfo", _res.card)
            commit("SetLogInfo", _res.log)
          }
        } else {
          commit("ClearInfo")
        }
      }
    } else {
      commit("ClearInfo")
    }
  },
  async DoDiscard({}, cardSelectOrd) {
    await doDiscard(cardSelectOrd)
  },
  async DoPlay({}, cardSelectOrd) {
    await doPlay(cardSelectOrd)
  },
  async DoCue({}, [cardSelectOrd, cueType]) {
    await doCue(cardSelectOrd, cueType)
  },
  async AutoPlay() {
    await autoPlay()
  }
}

const getters = {
  isPlaying: state => state.isPlaying,
  logList: state => state.logList,
  logList2: state => {
    const tmp = []
    for (const i in state.logList) {
      tmp.unshift(state.logList[i])
    }
    return tmp
  },
  gameInfo: state => state.gameInfo,
  cardInfo: state => state.cardInfo
}

const mutations = {
  SetGameIsPlaying(state) {
    state.isPlaying = true
  },
  SetLogInfo(state, data) {
    state.logList = data
  },
  SetCardInfo(state, data) {
    state.cardInfo = data
  },
  SetGameInfo(state, data) {
    state.gameInfo = data
  },
  ClearInfo(state) {
    state.isPlaying = null
    state.logList = []
    state.gameInfo = {
      roundNum: -1,
      roundPlayerIsHost: -1,
      lastUpdated: null
    }
    state.cardInfo = {
      hostHands: [],
      guestHands: [],
      libraryCardsNum: -1,
      discardCardsNum: -1,
      cueNum: -1,
      chanceNum: -1,
      score: -1,
      successCards: []
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
