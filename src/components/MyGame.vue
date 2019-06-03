<template>
  <div id="my-game">
    <canvas id="ctxMain"></canvas>
    <canvas id="ctxBg"></canvas>
    <canvas id="ctxModal" v-show="modalShow"></canvas>
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
      ctxMain: null,
      ctxBg: null,
      ctxModal: null,
      intervalId: 0,
      modalShow: false,
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
      MyGameDraw.hostPlayer(this.ctxMain, this.isHost, val)
    },
    guestPlayer(val) {
      MyGameDraw.guestPlayer(this.ctxMain, this.isHost, val)
    },
    cardInfo(val) {
      //手牌
      MyGameDraw.hostHands(this.ctxMain, this.isHost, val.hostHands)
      MyGameDraw.guestHands(this.ctxMain, this.isHost, val.guestHands)
      //牌库 弃牌堆
      MyGameDraw.libraryCards(this.ctxMain, val.libraryCardsNum)
      MyGameDraw.discardCards(this.ctxMain, val.discardCardsNum)
      //数字:提示数/机会数/分数  cueNum/chanceNum/score
      MyGameDraw.cueNum(this.ctxMain, val.cueNum)
      MyGameDraw.chanceNum(this.ctxMain, val.chanceNum)
      MyGameDraw.score(this.ctxMain, val.score)
      //成功打出的卡牌
      MyGameDraw.successCards(this.ctxMain, val.successCards)
    },
    gameInfo(val) {
      MyGameDraw.nowPlaying(this.ctxMain, val.roundPlayerIsHost)
    }
  },
  mounted() {
    this.ctxMain = document.querySelector("#ctxMain").getContext("2d")
    this.ctxBg = document.querySelector("#ctxBg").getContext("2d")
    this.ctxModal = document.querySelector("#ctxModal").getContext("2d")

    DrawLib.clear(this.ctxMain)
    DrawLib.clear(this.ctxBg)
    DrawLib.clear(this.ctxModal)

    MyGameDraw.bottomRect(this.ctxBg)
    MyGameDraw.endBtn(this.ctxMain)
    MyGameDraw.topRect(this.ctxModal)

    this.$store.dispatch("myRoom/GetInfo", { force: true })

    this.$store.dispatch("myGame/GetInfo", { force: true })

    this.intervalId = setInterval(() => {
      this.$store.dispatch("myGame/GetInfo", { force: true })
    }, 5000)

    this.ctxMain.canvas.addEventListener(
      "click",
      e => {
        MyGameEventListener(this, e)
      },
      false
    )
    this.ctxModal.canvas.addEventListener(
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
#ctxBg,
#ctxMain,
#ctxModal {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#ctxMain {
  z-index: 5;
}
#ctxBg {
  z-index: 1;
}
#ctxModal {
  z-index: 10;
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

#my-game {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
