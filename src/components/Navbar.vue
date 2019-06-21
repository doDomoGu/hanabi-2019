<template>
  <div id="navbar">
    <canvas id="ctxMain" class="ctx" ref="ctxMain"></canvas>
    <canvas id="ctxBg" class="ctx" ref="ctxBg"></canvas>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui"
import { getCtx } from "@/utils/canvas/lib"
import { /* DrawLib,*/ NavbarDraw } from "@/utils/canvas/draw"
// import { NavbarEventListener } from "@/utils/canvas/eventListener"

export default {
  name: "room_list",
  data() {
    return {
      ctxMain: null,
      ctxBg: null,
      intervalId: 0
    }
  },
  computed: {
    /* list() {
      return this.$store.getters["room/list"]
    } */
  },
  watch: {
    // list更新则重绘
    /* list(newVal) {
      DrawLib.clear(this.ctxMain)
      RoomListDraw.list(this.ctxMain, newVal)
    } */
  },
  mounted() {
    // 初始化定义canvasContext
    this.ctxMain = getCtx(this.$refs.ctxMain)
    this.ctxBg = getCtx(this.$refs.ctxBg)

    // 绘制导航背景
    // NavbarDraw.background(this.ctxBg)

    // 绘制登出按钮
    // NavbarDraw.logoutBtn(this.ctxMain)

    // 绑定触摸事件 touchstart 和 touchend
    // this.ctxMain.canvas.addEventListener(
    //   "touchstart",
    //   e => {
    //     RoomListEventListener(this, e, this.ctxMain)
    //   },
    //   false
    // )
    // this.ctxMain.canvas.addEventListener(
    //   "touchend",
    //   e => {
    //     RoomListEventListener(this, e, this.ctxMain)
    //   },
    //   false
    // )

    // 执行一次获取房间列表（参数：强制更新）
    // this.$store.dispatch("room/GetList", { force: true })

    // // 设置定时器：获取房间列表数据
    // this.intervalId = setInterval(() => {
    //   this.$store.dispatch("room/GetList")
    // }, 3000)
  },
  methods: {
    logout() {
      MessageBox.confirm("确定要退出登录吗?")
        .then(action => {
          if (action == "confirm") {
            this.$store.dispatch("auth/Logout")
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
            // console.log(2)
          }
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
  // height: ($height / 10);
  z-index: 202;
}
#ctxBg {
  // height: ($height / 10);
  z-index: 201;
}
</style>
