<template>
  <canvas id="my-room"></canvas>
</template>

<script>
export default {
  name: "my-room",
  data() {
    return {
      canvas: null,
      ctx: null,
      intervalId: 0
    }
  },
  mounted() {
    // 定义canvas
    this.canvas = document.querySelector("#my-room")
    this.ctx = this.canvas.getContext("2d")

    // 初始化清除画布
    CommonDraw.clear(this.canvas)

    MyRoomDraw.exitBtn(this.ctx)

    this.$store.dispatch("myRoom/GetInfo", { force: true })

    this.intervalId = setInterval(() => {
      this.$store.dispatch("myRoom/GetInfo")
      this.$store.dispatch("myGame/GetInfo", { mode: "simple" })
    }, 1000)

    this.canvas.addEventListener("click", this.eventListener, false)
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
