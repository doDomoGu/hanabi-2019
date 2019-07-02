<template>
  <div id="app" ref="app">
    <login v-if="!isLoading && isLogin === false" />
    <room-list v-if="!isLoading && isRoomList === true" />
    <my-room v-if="!isLoading && isInRoom === true" />
    <my-game v-if="!isLoading && isInGame === true" />
  </div>
</template>
<script>
import { getToken } from "@/utils/authToken"
import Login from "./components/Login"
import RoomList from "./components/RoomList"
import MyRoom from "./components/MyRoom"
import MyGame from "./components/MyGame"

export default {
  name: "app",
  components: { Login, RoomList, MyRoom, MyGame },
  data() {
    return {
      isLoading: true
    }
  },
  created() {
    if (getToken()) {
      console.log(" ")
      console.log(" checktoken 1")
      //本地(localstorage)有token 验证token
      this.$store.dispatch("auth/CheckToken").then(() => {
        if (this.isLogin) {
          //验证成功 获取用户信息/房间信息/游戏信息
          this.$store
            .dispatch("auth/GetInfo")
            .then(() => {
              return this.$store.dispatch("myRoom/GetInfo", { force: true })
            })
            .then(() => {
              return this.$store.dispatch("myGame/GetInfo", { force: true })
            })
            .then(() => {
              this.isLoading = false
            })
        }
      })
    } else {
      //没有token 将loginState置为false
      this.$store.commit("auth/setLoginState", false)
      this.isLoading = false
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters["auth/isLogin"]
    },
    isRoomList() {
      return (
        this.$store.getters["auth/isLogin"] &&
        !this.$store.getters["myRoom/isIn"]
      )
    },
    isInRoom() {
      return (
        this.$store.getters["auth/isLogin"] &&
        this.$store.getters["myRoom/isIn"] &&
        !this.$store.getters["myGame/isPlaying"]
      )
    },
    isInGame() {
      return (
        this.$store.getters["auth/isLogin"] &&
        this.$store.getters["myRoom/isIn"] &&
        this.$store.getters["myGame/isPlaying"]
      )
    }
  }
}
</script>
