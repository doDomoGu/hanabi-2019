<template>
  <div id="my-room">
    <canvas id="ctxMain" ref="ctxMain"></canvas>
    <canvas id="ctxBg" ref="ctxBg"></canvas>
  </div>
</template>

<script>
import { DrawLib, MyRoomDraw } from "@/utils/canvas/index"
import { getCtx } from "@/utils/canvas/lib"
import MyRoomEventListener from "@/utils/canvas/eventListener/myRoom"
import bgImg from "@/assets/hanabi_bg.jpg"

export default {
  name: "my-room",
  data() {
    return {
      ctxMain: null,
      ctxBg: null,
      intervalId: 0
    }
  },
  computed: {
    isHost() {
      return this.$store.getters["myRoom/isHost"]
    },
    hostPlayer() {
      return this.$store.getters["myRoom/hostPlayer"]
    },
    guestPlayer() {
      return this.$store.getters["myRoom/guestPlayer"]
    },
    isReady() {
      return this.$store.getters["myRoom/isReady"]
    }
  },
  watch: {
    hostPlayer(newVal) {
      MyRoomDraw.hostPlayer(this.ctxMain, this.isHost, this.isReady, newVal)
    },
    guestPlayer(newVal) {
      if (newVal) {
        MyRoomDraw.guestPlayer(this.ctxMain, this.isHost, this.isReady, newVal)
      }
    }
  },
  mounted() {
    // 初始化定义canvasContext
    this.ctxMain = getCtx(this.$refs.ctxMain)
    this.ctxBg = getCtx(this.$refs.ctxBg)

    //绘制背景
    DrawLib.background(this.ctxBg, bgImg)

    // 绘制退出按钮
    MyRoomDraw.exitBtn(this.ctxMain)

    this.$store.dispatch("myRoom/GetInfo", { force: true })

    this.intervalId = setInterval(() => {
      this.$store.dispatch("myRoom/GetInfo")
      this.$store.dispatch("myGame/GetInfo")
    }, 3000)

    this.ctxMain.canvas.addEventListener(
      "click",
      e => {
        MyRoomEventListener(this, e)
      },
      false
    )
  },
  destroyed() {
    // 离开页面 清除定时器
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
#ctxMain {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
#ctxBg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
