import axios from "axios"
import qs from "qs"
import { getToken } from "@/utils/authToken"
import { STORAGE_KEYS } from "@/utils/constant"

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

//api接口地址前缀
axios.defaults.baseURL = process.env.VUE_APP_API_PREFIX
  ? process.env.VUE_APP_API_PREFIX
  : "http://" + document.domain + ":8889/v1"

axios.interceptors.request.use(
  config => {
    // console.log(config)
    //鉴权 Token传参
    config.headers[STORAGE_KEYS.auth_token] = getToken()
    // POST传参序列化
    if (
      config.method === "post" &&
      config.headers["Content-Type"] !== "multipart/form-data"
    ) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
