import axios from "@/utils/axios"

export function getList(params) {
  return axios.get("/room/list", params)
}
