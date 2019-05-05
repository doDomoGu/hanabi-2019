<template>
  <canvas id="room-list"></canvas>
</template>

<script>
import { RoomListDraw } from "@/utils/canvas/index"
// import RLCParam from "@/utils/canvas/config/roomList.js"
// import CommonDraw from "@/utils/canvas/draw/common.js"
// import RoomListDraw from "@/utils/canvas/draw/roomList.js"

export default {
  name: "room_list",
  data() {
    return {
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
      console.log(RoomListDraw)
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

    // this.canvas.addEventListener("touchstart", this.eventListener, false)
    // this.canvas.addEventListener("touchend", this.eventListener, false)
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
