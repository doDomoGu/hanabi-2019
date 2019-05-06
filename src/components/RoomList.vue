<template>
  <canvas id="room-list"></canvas>
</template>

<script>
import { RoomListDraw } from "@/utils/canvas/index"
import CanvasLib from "@/utils/canvas/lib"
import RoomListEventListener from "@/utils/canvas/eventListener/roomList"
// import RLCParam from "@/utils/canvas/config/roomList.js"
// import CommonDraw from "@/utils/canvas/draw/common.js"
// import RoomListDraw from "@/utils/canvas/draw/roomList.js"

export default {
  name: "room_list",
  data() {
    return {
      canvas: null,
      ctx: null,
      intervalId: 0,
      itemIndex: -1
    }
  },
  computed: {
    list() {
      return this.$store.getters["room/list"]
    }
  },
  watch: {
    list(newVal) {
      RoomListDraw.list(this.ctx, newVal)
    }
  },
  mounted() {
    this.canvas = document.querySelector("#room-list")
    this.ctx = this.canvas.getContext("2d")

    this.$store.dispatch("room/GetList", { params: { force: true } })

    this.intervalId = setInterval(() => {
      this.$store.dispatch("room/GetList")
    }, 3000)

    this.canvas.addEventListener(
      "touchstart",
      e => {
        RoomListEventListener(this, e)
      },
      false
    )
    this.canvas.addEventListener(
      "touchend",
      e => {
        RoomListEventListener(this, e)
      },
      false
    )
  },
  methods: {
    async enter(index) {
      await this.$store.dispatch("myRoom/Enter", index)
      await this.$store.dispatch("myRoom/GetInfo", { force: true })
    }
  },
  destroyed() {
    clearInterval(this.intervalId)
  }
}
</script>
<style scoped>
#room-list {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
