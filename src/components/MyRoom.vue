<template>
  <canvas id="my-room"></canvas>
</template>

<script>
import { DrawLib, MyRoomDraw } from "@/utils/canvas/index"
import MyRoomEventListener from "@/utils/canvas/eventListener/myRoom"
export default {
  name: "my-room",
  data() {
    return {
      canvas: null,
      ctx: null,
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
    this.canvas = document.querySelector("#my-room")
    this.ctx = this.canvas.getContext("2d")

    // 初始化清除画布
    DrawLib.clear(this.canvas)

    MyRoomDraw.exitBtn(this.ctx)

    this.$store.dispatch("myRoom/GetInfo", { force: true })

    this.intervalId = setInterval(() => {
      this.$store.dispatch("myRoom/GetInfo")
      //this.$store.dispatch("myGame/GetInfo", { mode: "simple" })
    }, 1000)

    this.canvas.addEventListener(
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
