import Vue from "vue"
import { KEYS } from "@/config/constant"

const key = KEYS.auth_token

export function getToken() {
  return Vue.ls.get(key)
}

export function setToken(token) {
  return Vue.ls.set(key, token)
}

export function removeToken() {
  return Vue.ls.remove(key)
}
