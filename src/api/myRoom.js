import axios from "@/utils/axios"

export function enter(roomId) {
  return axios.post("/my-room/enter", {
    roomId: roomId
  })
}

export function exit() {
  return axios.post("/my-room/exit")
}

export function getInfo(params) {
  return axios.get("/my-room/info", { params: params })
}

export function doReady() {
  return axios.post("/my-room/do-ready")
}
