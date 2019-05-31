<template>
  <div id="app">
    <template v-if="loginState === false">
      <login />
    </template>
    <template v-else-if="loginState === true">
      <template v-if="isInRoom === false">
        <logout />
        <room-list />
      </template>
      <template v-else-if="isInRoom === true">
        <template v-if="isInGame === false">
          <my-room />
        </template>
        <template v-if="isInGame === true">
          <my-game />
        </template>
      </template>
    </template>
  </div>
</template>

<script>
import { getToken } from "@/utils/authToken"
import LoginCom from "./components/Login"
import LogoutCom from "./components/Logout"
import RoomListCom from "./components/RoomList"
import MyRoomCom from "./components/MyRoom"
import MyGameCom from "./components/MyGame"
export default {
  name: "app",
  components: {
    login: LoginCom,
    logout: LogoutCom,
    roomList: RoomListCom,
    myRoom: MyRoomCom,
    myGame: MyGameCom
  },
  created() {
    if (getToken()) {
      //本地(localstorage)有token 验证token
      this.$store.dispatch("auth/CheckToken").then(() => {
        if (this.loginState) {
          //验证成功 获取用户信息/房间信息/游戏信息
          this.$store.dispatch("auth/GetInfo")
          this.$store.dispatch("myRoom/GetInfo", { force: true })
          this.$store.dispatch("myGame/GetInfo", { force: true })
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
      return this.$store.getters["myRoom/isIn"]
    },
    isInGame() {
      return this.$store.getters["myGame/isPlaying"]
    }
  },
  methods: {}
}
</script>
<style>
body,
html {
  margin: 0;
  background: #99c9db;
}
</style>
