<template>
  <div id="app">
    <login v-if="loginState === false" />
    <template v-else-if="loginState === true">
      <room-list v-if="!isInRoom" />
      <my-room v-else-if="isInRoom" />
    </template>
  </div>
</template>

<script>
import { getToken } from "@/utils/authToken"
import Login from "./components/Login.vue"
import RoomList from "./components/RoomList.vue"
export default {
  name: "app",
  components: {
    Login,
    RoomList
  },
  created() {
    if (getToken()) {
      //本地(localstorage)有token 验证token
      this.$store.dispatch("auth/CheckToken").then(() => {
        if (this.loginState) {
          //验证成功 获取用户信息
          this.$store.dispatch("auth/GetInfo")
          this.$store.dispatch("myRoom/GetInfo", { force: true })
        }
      })
    } else {
      //没有token 将loginState置为false
      this.$store.commit("auth/setLoginState", false)
    }
  },
  computed: {
    loginState() {
      return this.$store.getters["auth/loginState"]
    },
    isInRoom() {
      return this.$store.getters["myRoom/roomId"] > 0
    }
  },
  methods: {}
}
</script>
<style>
body,
html {
  margin: 0;
}
</style>
