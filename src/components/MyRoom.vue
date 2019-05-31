<template>
  <div>
    <canvas id="my-room"></canvas>
    <canvas id="bg"></canvas>
  </div>
</template>

<script>
import { DrawLib, MyRoomDraw } from "@/utils/canvas/index"
import MyRoomEventListener from "@/utils/canvas/eventListener/myRoom"
import bgImg from "@/assets/background.jpg"

export default {
  name: "my-room",
  data() {
    return {
      ctx: null,
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
      MyRoomDraw.hostPlayer(this.ctx, this.isHost, this.isReady, newVal)
    },
    guestPlayer(newVal) {
      if (newVal) {
        MyRoomDraw.guestPlayer(this.ctx, this.isHost, this.isReady, newVal)
      }
    }
  },
  mounted() {
    // 定义canvas
    this.ctx = document.querySelector("#my-room").getContext("2d")
    this.ctxBg = document.querySelector("#bg").getContext("2d")

    // 清除画布
    DrawLib.clear(this.ctx.canvas)
    DrawLib.clear(this.ctxBg.canvas)

    // 绘制背景
    DrawLib.background(this.ctxBg, bgImg)

    // 绘制退出按钮
    MyRoomDraw.exitBtn(this.ctx)

    this.$store.dispatch("myRoom/GetInfo", { force: true })

    this.intervalId = setInterval(() => {
      this.$store.dispatch("myRoom/GetInfo")
      //this.$store.dispatch("myGame/GetInfo", { mode: "simple" })
    }, 3000)

    this.ctx.canvas.addEventListener(
      "click",
      e => {
        MyRoomEventListener(this, e)
      },
      false
    )
  }
}
</script>

<style scoped>
#my-room {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
