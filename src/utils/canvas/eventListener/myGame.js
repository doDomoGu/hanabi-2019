/* 我的游戏事件监听库 */
import CanvasLib from "../lib"
import { MyGameDraw } from "../index"
import MyGameConfig from "../config/myGame"

let _ = {}
_.eventListener = (t, evt) => {
  const mousePos = CanvasLib.getMousePos(t.canvas_m, evt)
  // console.log("鼠标指针坐标：" + mousePos.x + "," + mousePos.y)
  const isPath = (pos, areaName) => {
    let area
    switch (areaName) {
      case "endBtn":
        area = MyGameConfig.endBtn
        break
      default:
        area = { x: 0, y: 0, w: 0, h: 0 }
    }
    return (
      pos.x >= area.x &&
      pos.x <= area.x + area.w &&
      pos.y >= area.y &&
      pos.y <= area.y + area.h
    )
  }

  const getHandsIndex = (rects, pos) => {
    let index = -1
    rects.forEach((rect, i) => {
      if (
        pos.x >= rect.x &&
        pos.x <= rect.x + rect.w &&
        pos.y >= rect.y &&
        pos.y <= rect.y + rect.h
      ) {
        index = i
      }
    })
    return index
  }
  const getHostHandsIndex = pos => {
    const rects = MyGameConfig.host.hands.areas
    return getHandsIndex(rects, pos)
  }

  const getGuestHandsIndex = pos => {
    const rects = MyGameConfig.guest.hands.areas
    return getHandsIndex(rects, pos)
  }

  const hostHandsIndex = getHostHandsIndex(mousePos)
  const guestHandsIndex = getGuestHandsIndex(mousePos)
  if (t.gameInfo.roundPlayerIsHost == t.isHost && hostHandsIndex > -1) {
    t.topOperation = true
    t.selectCardIndex = hostHandsIndex
    t.selectCardIsHost = true
    if (t.isHost) {
      MyGameDraw.topConfirmPlay(t.ctx_t)
    } else {
      MyGameDraw.topConfirmCue(t.ctx_t)
    }
  } else if (t.gameInfo.roundPlayerIsHost == t.isHost && guestHandsIndex > -1) {
    t.topOperation = true
    t.selectCardIndex = guestHandsIndex + 5
    t.selectCardIsHost = false
    if (t.isHost) {
      MyGameDraw.topConfirmCue(t.ctx_t)
    } else {
      MyGameDraw.topConfirmPlay(t.ctx_t)
    }
  } else if (isPath(mousePos, "endBtn")) {
    t.$store.dispatch("myGame/End")
  }
}

_.eventListenerTop = (t, evt) => {
  const mousePos = CanvasLib.getMousePos(t.canvas_m, evt)
  // console.log("鼠标指针坐标：" + mousePos.x + "," + mousePos.y)
  const isPath = (pos, areaName) => {
    let area
    switch (areaName) {
      case "playOkBtn":
        area = MyGameConfig.top.play.ok.rect
        break
      case "playCancelBtn":
        area = MyGameConfig.top.play.cancel.rect
        break
      case "cueNumBtn":
        area = MyGameConfig.top.cue.num.rect
        break
      case "cueColorBtn":
        area = MyGameConfig.top.cue.color.rect
        break
      case "cueCancelBtn":
        area = MyGameConfig.top.cue.cancel.rect
        break
      default:
        area = { x: 0, y: 0, w: 0, h: 0 }
    }
    return (
      pos.x >= area.x &&
      pos.x <= area.x + area.w &&
      pos.y >= area.y &&
      pos.y <= area.y + area.h
    )
  }

  if (t.isHost == t.selectCardIsHost) {
    //play
    if (isPath(mousePos, "playOkBtn")) {
      t.$store.dispatch("myGame/DoPlay", t.selectCardIndex)
      t.topOperation = false
    } else if (isPath(mousePos, "playCancelBtn")) {
      t.topOperation = false
    }
  } else {
    //cue
    if (isPath(mousePos, "cueNumBtn")) {
      t.$store.dispatch("myGame/DoCue", [t.selectCardIndex, "num"])
      t.topOperation = false
    } else if (isPath(mousePos, "cueColorBtn")) {
      t.$store.dispatch("myGame/DoCue", [t.selectCardIndex, "color"])
      t.topOperation = false
    } else if (isPath(mousePos, "cueCancelBtn")) {
      t.topOperation = false
    }
  }
}

export default _
