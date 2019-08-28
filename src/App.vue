<template>
  <div id="app" ref="app">
    <!-- <audio autoplay loop ref="bgm"><source :src="bgm" /></audio> -->
    <div v-if="isLoading" id="loading">
      Loading...
    </div>
    <!-- <button v-on:click="isLoading = !show"> -->
    <!-- Toggle -->
    <!-- </button> -->
    <transition name="fade">
      <login v-if="!isLoading && isLogin === false" />
    </transition>
    <transition name="fade">
      <room-list v-if="!isLoading && isRoomList === true" />
    </transition>
    <transition name="fade">
      <my-room v-if="!isLoading && isInRoom === true" />
    </transition>
    <transition name="fade">
      <my-game v-if="!isLoading && isInGame === true" />
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
      isLoading: true
      // bgm: bgm
    }
  },
  created() {
    if (getToken()) {
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
        } else {
          this.isLoading = false
        }
      })
    } else {
      //没有token 将loginState置为false
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
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
