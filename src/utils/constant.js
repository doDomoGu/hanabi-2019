/* localstorage 所使用的参数 */
export const STORAGE_OPTIONS = {
  namespace: "vuejs__", // 前缀
  name: "ls", // 属性调用别名 Vue.[ls] or this.[$ls],
  storage: "local" // 存储模式 (session, local, memory)
}

export const STORAGE_KEYS = {
  auth_token: "X-Token" //token-Key 用于api调用 鉴权
}
