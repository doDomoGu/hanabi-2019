<template>
  <div>
    <canvas id="canvas_my_game_bottom"></canvas>
    <canvas id="canvas_my_game_middle"></canvas>
    <canvas id="canvas_my_game_top" v-show="topOperation"></canvas>
    <ul
      id="log"
      :style="
        'left:' +
          logRect.x +
          'px;top:' +
          logRect.y +
          'px;width:' +
          logRect.w +
          'px;height:' +
          logRect.h +
          'px;overflow-y:scroll;'
      "
    >
      <li v-for="l in logList" :key="l">
        {{ l }}
      </li>
    </ul>
  </div>
</template>

<script>
import { DrawLib, MyGameDraw } from "@/utils/canvas/index"
import MyGameConfig from "@/utils/canvas/config/myGame"
import CanvasLib from "@/utils/canvas/lib"
import {
  eventListener as MyGameEventListener,
  eventListenerTop as MyGameEventListenerTop
} from "@/utils/canvas/eventListener/myGame"
export default {
  name: "my-game",
  data() {
    return {
      canvas: null,
      ctx: null,
      intervalId: 0,
      topOperation: false,
      selectCardIsHost: false,
      selectCardIndex: -1,
      logRect: {
        x: MyGameConfig.history.area.x / CanvasLib.getDevicePixelRatio(),
        y: MyGameConfig.history.area.y / CanvasLib.getDevicePixelRatio(),
        w: MyGameConfig.history.area.w / CanvasLib.getDevicePixelRatio(),
        h: MyGameConfig.history.area.h / CanvasLib.getDevicePixelRatio()
      }
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
    isPlaying() {
      return this.$store.getters["myGame/isPlaying"]
    },
    cardInfo() {
      return this.$store.getters["myGame/cardInfo"]
    },
    gameInfo() {
      return this.$store.getters["myGame/gameInfo"]
    },
    logList() {
      return this.$store.getters["myGame/logList2"]
    }
  },
  watch: {
    hostPlayer(val) {
      MyGameDraw.hostPlayer(this.ctx_m, this.isHost, val)
    },
    guestPlayer(val) {
      MyGameDraw.guestPlayer(this.ctx_m, this.isHost, val)
    },
    cardInfo(val) {
      //手牌
      MyGameDraw.hostHands(this.ctx_m, this.isHost, val.hostHands)
      MyGameDraw.guestHands(this.ctx_m, this.isHost, val.guestHands)
      //牌库 弃牌堆
      MyGameDraw.libraryCards(this.ctx_m, val.libraryCardsNum)
      MyGameDraw.discardCards(this.ctx_m, val.discardCardsNum)
      //数字:提示数/机会数/分数  cueNum/chanceNum/score
      MyGameDraw.cueNum(this.ctx_m, val.cueNum)
      MyGameDraw.chanceNum(this.ctx_m, val.chanceNum)
      MyGameDraw.score(this.ctx_m, val.score)
      //成功打出的卡牌
      MyGameDraw.successCards(this.ctx_m, val.successCards)
    },
    gameInfo(val) {
      MyGameDraw.nowPlaying(this.ctx_m, val.roundPlayerIsHost)
    }
  },
  mounted() {
    this.canvas_b = document.querySelector("#canvas_my_game_bottom")
    this.ctx_b = this.canvas_b.getContext("2d")

    this.canvas_m = document.querySelector("#canvas_my_game_middle")
    this.ctx_m = this.canvas_m.getContext("2d")

    this.canvas_t = document.querySelector("#canvas_my_game_top")
    this.ctx_t = this.canvas_t.getContext("2d")

    DrawLib.clear(this.canvas_b)
    DrawLib.clear(this.canvas_m)
    DrawLib.clear(this.canvas_t)

    MyGameDraw.bottomRect(this.ctx_b)
    MyGameDraw.endBtn(this.ctx_m)
    MyGameDraw.topRect(this.ctx_t)

    this.$store.dispatch("myRoom/GetInfo", { force: true })

    this.$store.dispatch("myGame/GetInfo", { force: true })

    this.intervalId = setInterval(() => {
      this.$store.dispatch("myGame/GetInfo", { force: true })
    }, 5000)

    this.canvas_m.addEventListener(
      "click",
      e => {
        MyGameEventListener(this, e)
      },
      false
    )
    this.canvas_t.addEventListener(
      "click",
      e => {
        MyGameEventListenerTop(this, e)
      },
      false
    )
    // this.canvas.addEventListener('touchstart',this.eventListener,false)
    // this.canvas.addEventListener('touchend',this.eventListener,false)
  }
}
</script>
<style scoped>
#canvas_my_game_bottom,
#canvas_my_game_middle,
#canvas_my_game_top {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#canvas_my_game_top {
  z-index: 100;
}

#log {
  position: absolute;
  font-size: 16px;
  line-height: 20px;
  z-index: 2;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
}
#log li {
  padding: 4px;
}
#log li:nth-child(2n) {
  background: rgb(155, 228, 72);
}
#log li:nth-child(2n + 1) {
  background: rgb(243, 130, 130);
}

#my_game {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
