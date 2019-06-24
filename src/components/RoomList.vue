<template>
  <div id="room-list" class="canvasContainter">
    <canvas id="ctxMain" class="ctx" ref="ctxMain"></canvas>
    <canvas id="ctxBg" class="ctx" ref="ctxBg"></canvas>
  </div>
</template>

<script>
import { getCtx } from "@/utils/canvas/lib"
import { DrawLib, RoomListDraw } from "@/utils/canvas/draw"
import { RoomListEventListener } from "@/utils/canvas/eventListener"

export default {
  name: "room_list",
  data() {
    return {
      ctxMain: null,
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
    // list更新则重绘
    list(newVal) {
      // DrawLib.clear(this.ctxMain)
      RoomListDraw.list(this.ctxMain, newVal)
    }
  },
  mounted() {
    // 初始化定义canvasContext
    this.ctxMain = getCtx(this.$refs.ctxMain)
    this.ctxBg = getCtx(this.$refs.ctxBg)

    // 绘制图片背景
    RoomListDraw.background(this.ctxBg)

    // 绘制顶部导航栏
    RoomListDraw.navbar(this.ctxMain)

    // 绑定触摸事件 touchstart 和 touchend
    this.ctxMain.canvas.addEventListener(
      "touchstart",
      e => {
        RoomListEventListener(this, e, this.ctxMain)
      },
      false
    )
    this.ctxMain.canvas.addEventListener(
      "touchend",
      e => {
        RoomListEventListener(this, e, this.ctxMain)
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
<style lang="scss" scoped>
#ctxMain {
  z-index: 2;
}
#ctxBg {
  z-index: 1;
}
</style>
