<template>
  <div id="app" ref="app">
    <!-- <audio autoplay loop ref="bgm"><source :src="bgm" /></audio> -->
    <div v-if="isLoading" id="loading">
      Loading...
    </div>
    <transition name="fade">
      <template v-if="!isLoading">
        <login v-if="isLogin === false" />
        <room-list v-if="isRoomList === true" />
        <my-room v-if="isInRoom === true" />
        <my-game v-if="isInGame === true" />
      </template>
    </transition>
  </div>
</template>
<script>
import { getToken } from "@/utils/authToken"
import Login from "./components/Login"
import RoomList from "./components/RoomList"
import MyRoom from "./components/MyRoom"
import MyGame from "./components/MyGame"
// import bgm from "@/assets/Falcom.mp3"

export default {
  name: "app",
  components: { Login, RoomList, MyRoom, MyGame },
  data() {
    return {
      isLoading: true // 加载资源标志
      // bgm: bgm
    }
  },
  created() {
    if (getToken()) {
      //本地(localstorage)有token 验证token
      this.$store.dispatch("auth/CheckToken").then(() => {
        if (this.isLogin) {
          // 用户Token验证成功 获取用户信息/房间信息/游戏信息
          ;(async () => {
            // 并发异步请求
            await Promise.all([
              this.$store.dispatch("auth/GetInfo"),
              this.$store.dispatch("myRoom/GetInfo", { force: true }),
              this.$store.dispatch("myGame/GetInfo", { force: true })
            ])
          })().then(() => {
            this.isLoading = false
          })
        } else {
          this.isLoading = false
        }
      })
    } else {
      // 没有token 将loginState置为false
      this.$store.commit("auth/setLoginState", false)
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
      // this.isLoading = false
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
