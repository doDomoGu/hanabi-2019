<template>
  <div>
    <canvas id="room-list"></canvas>
    <canvas id="bg"></canvas>
  </div>
</template>

<script>
import { DrawLib, RoomListDraw } from "@/utils/canvas/index"
import RoomListEventListener from "@/utils/canvas/eventListener/roomList"
import bgImg from "@/assets/background.jpg"

export default {
  name: "room_list",
  data() {
    return {
      ctx: null,
      ctxBg: null,
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
    this.ctx = document.querySelector("#room-list").getContext("2d")
    this.ctxBg = document.querySelector("#bg").getContext("2d")

    //清除画布
    DrawLib.clear(this.ctx.canvas)
    DrawLib.clear(this.ctxBg.canvas)

    //绘制背景
    DrawLib.background(this.ctxBg, bgImg)

    // 绑定触摸事件 touchstart 和 touchend
    this.ctx.canvas.addEventListener(
      "touchstart",
      e => {
        RoomListEventListener(this, e)
      },
      false
    )
    this.ctx.canvas.addEventListener(
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
