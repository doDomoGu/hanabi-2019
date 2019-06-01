<template>
  <div id="app">
    <canvas id="bg"></canvas>
    <canvas ref="main"></canvas>
    <canvas id="top"></canvas>
    <room-list :ctxMain="$refs" />
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
  data() {
    return {
      ctxMain: null,
      ctxBg: null
    }
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

    /* this.ctxMain = document.querySelector("#main").getContext("2d")
    this.ctxBg = document.querySelector("#bg").getContext("2d") */
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
  mounted() {
    console.log(this.$refs["main"])
    console.log(this.$refs)
    // console.log(this.$refs["main"])
    // 定义canvas
    // this.$store.commit("canvas/Set", {
    //   name: "ctxMain",
    //   data: document.querySelector("#main").getContext("2d")
    // })
    // // this.ctxBg = document.querySelector("#bg").getContext("2d")
    // console.log("app")
    // console.log(this.$store.getters["canvas/ctxMain"])
    // // console.log(this.ctxBg)
    // console.log(" ")
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
