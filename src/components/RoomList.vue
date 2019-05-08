<template>
  <canvas id="room-list"></canvas>
</template>

<script>
import { DrawLib, RoomListDraw } from "@/utils/canvas/index"
import RoomListEventListener from "@/utils/canvas/eventListener/roomList"

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
    // 定义canvas
    this.canvas = document.querySelector("#room-list")
    this.ctx = this.canvas.getContext("2d")

    //清除画布
    DrawLib.clear(this.canvas)

    // 绑定触摸事件 touchstart 和 touchend
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

    // 执行一次获取房间列表（参数：强制更新）
    this.$store.dispatch("room/GetList", { force: true })

    // 设置定时器：获取房间列表数据
    this.intervalId = setInterval(() => {
      this.$store.dispatch("room/GetList")
    }, 3000)
  },
  methods: {
    enter(index) {
      this.$store.dispatch("myRoom/Enter", index).then(() => {
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
<style scoped>
#room-list {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
