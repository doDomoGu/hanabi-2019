<template>
  <div id="my-room" class="canvasContainter">
    <canvas id="ctxMain" class="ctx" ref="ctxMain"></canvas>
    <canvas id="ctxBg" class="ctx" ref="ctxBg"></canvas>
  </div>
</template>

<script>
import { getCtx } from "@/utils/canvas/lib"
import { MyRoomDraw } from "@/utils/canvas/draw"
import { MyRoomEventListener } from "@/utils/canvas/eventListener"

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

    // 绘制图片背景
    MyRoomDraw.background(this.ctxBg)

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
  methods: {
    doExit() {
      this.$store.dispatch("myRoom/Exit").then(() => {
        this.$store.dispatch("myRoom/GetInfo", { force: true })
      })
    },
    doReady() {
      this.$store.dispatch("myRoom/DoReady").then(() => {
        this.$store.dispatch("myRoom/GetInfo", { force: true })
      })
    },
    doStart() {
      this.$store.dispatch("myGame/Start").then(() => {
        this.$store.dispatch("myRoom/GetInfo", { force: true })
      })
    }
  },
  destroyed() {
    // 离开页面 清除定时器
    clearInterval(this.intervalId)
  }
}
</script>
