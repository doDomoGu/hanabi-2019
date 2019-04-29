import axios from "@/utils/axios"

export function login(username, password) {
  const data = {
    username,
    password
  }
  return axios.post("/login", data)
}

export function checkToken(key) {
  const params = {
    params: {
      accessToken: key
    }
  }
  return axios.get("/auth", params)
}

export function getUserInfo(key) {
  const params = {
    params: {
      accessToken: key
    }
  }
  return axios.get("/auth", params)
}

export function logout() {
  return axios.delete("/logout")
}
