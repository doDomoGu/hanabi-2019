import axios from "@/utils/axios"

export function start() {
  return axios.post("/my-game/start")
}

export function end() {
  return axios.post("/my-game/end")
}

export function doDiscard(ord) {
  return axios.post("/my-game/do-discard", {
    cardSelectOrd: ord
  })
}

export function doPlay(ord) {
  return axios.post("/my-game/do-play", {
    cardSelectOrd: ord
  })
}

export function doCue(ord, type) {
  return axios.post("/my-game/do-cue", {
    cardSelectOrd: ord,
    cueType: type
  })
}
export function autoPlay() {
  return axios.post("/my-game/auto-play")
}

export function getInfo(params) {
  return axios.get("/my-game/info", { params: params })
}
