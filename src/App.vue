<template>
  <div id="app" ref="app">
    <login v-if="isLogin === false" />
    <!-- <navbar v-if="navbarShow === true" /> -->
    <room-list v-if="isRoomList === true" />
    <my-room v-if="isInRoom === true" />
    <my-game v-if="isInGame === true" />
  </div>
</template>
<script>
import { getToken } from "@/utils/authToken"
import Login from "./components/Login"
// import Navbar from "./components/Navbar"
import RoomList from "./components/RoomList"
import MyRoom from "./components/MyRoom"
import MyGame from "./components/MyGame"
// import { setWidthAndHeight } from "@/utils/canvas/lib"
export default {
  name: "app",
  components: { Login, /* Navbar, */ RoomList, MyRoom, MyGame },
  created() {
    // console.log(window.innerWidth, window.innerHeight)

    // console.log(
    //   window.innerWidth * window.devicePixelRatio,
    //   window.innerHeight * window.devicePixelRatio
    // )
    if (getToken()) {
      //本地(localstorage)有token 验证token
      this.$store.dispatch("auth/CheckToken").then(() => {
        if (this.isLogin) {
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
  mounted() {
    // console.log(this.$refs.app.clientWidth, this.$refs.app.clientHeight)
    // console.log(
    //   this.$refs.app.clientWidth * window.devicePixelRatio,
    //   this.$refs.app.clientHeight * window.devicePixelRatio
    // )
    // setWidthAndHeight(this.$refs.app.clientWidth, this.$refs.app.clientHeight)
  },
  computed: {
    isLogin() {
      return this.$store.getters["auth/isLogin"]
    },
    /* navbarShow() {
      return false
      return this.$store.getters["auth/isLogin"]
    }, */
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
<style lang="scss">
body,
html {
  margin: 0;
  background: #000000;
}

@media (max-aspect-ratio: 16/9) {
  $width: 100vw;
  $height: 100vw / 16 * 9;
  #app {
    width: $width;
    height: $height;
    top: 50%;
    margin-top: -$height / 2;
    // left: 50%;
    // margin-left: -$width / 2;
    // background: #45ade9;
    position: absolute;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

@media (min-aspect-ratio: 16/9) {
  $width: 100vh / 9 * 16;
  $height: 100vh;
  #app {
    width: $width;
    height: $height;
    // top: 50%;
    // margin-top: -$height / 2;
    left: 50%;
    margin-left: -$width / 2;
    // background: #a2aa33;
    position: absolute;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

.canvasContainter {
  position: absolute;
  width: 100%;
  height: 100%;
}

canvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
