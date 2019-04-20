import axios from "@/utils/axios"

export function login(username, password) {
  const data = {
    username,
    password
  }
  return axios.post("/login", data)
}

export function checkToken(key) {
  const data = {
    key
  }
  return axios.post("/auth", data)
}

export function getUserInfo() {
  return axios.get("/auth")
}

export function logout() {
  return axios.delete("/logout")
}
