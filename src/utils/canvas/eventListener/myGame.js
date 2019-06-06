/* 我的游戏事件监听库 */
import { getEventPoint } from "../lib"
import { MyGameDraw } from "../index"
import MyGameConfig from "../config/myGame"

const eventListener = (t, evt) => {
  const ctx = t[evt.target.id]
  const ctxModal = t.ctxModal

  const point = getEventPoint(ctx, evt)

  const isPath = (point, areaName) => {
    let area
    switch (areaName) {
      case "endBtn":
        area = MyGameConfig.endBtn
        break
      default:
        area = { x: 0, y: 0, w: 0, h: 0 }
    }
    return (
      point.x >= area.x &&
      point.x <= area.x + area.w &&
      point.y >= area.y &&
      point.y <= area.y + area.h
    )
  }

  const getHandsIndex = (rects, point) => {
    let index = -1
    rects.forEach((rect, i) => {
      if (
        point.x >= rect.x &&
        point.x <= rect.x + rect.w &&
        point.y >= rect.y &&
        point.y <= rect.y + rect.h
      ) {
        index = i
      }
    })
    return index
  }
  const getHostHandsIndex = point => {
    const rects = MyGameConfig.host.hands.areas
    return getHandsIndex(rects, point)
  }

  const getGuestHandsIndex = point => {
    const rects = MyGameConfig.guest.hands.areas
    return getHandsIndex(rects, point)
  }

  const hostHandsIndex = getHostHandsIndex(point)
  const guestHandsIndex = getGuestHandsIndex(point)
  if (t.gameInfo.roundPlayerIsHost == t.isHost && hostHandsIndex > -1) {
    t.topOperation = true
    t.selectCardIndex = hostHandsIndex
    t.selectCardIsHost = true
    if (t.isHost) {
      MyGameDraw.topConfirmPlay(ctxModal)
    } else {
      MyGameDraw.topConfirmCue(ctxModal)
    }
  } else if (t.gameInfo.roundPlayerIsHost == t.isHost && guestHandsIndex > -1) {
    t.topOperation = true
    t.selectCardIndex = guestHandsIndex + 5
    t.selectCardIsHost = false
    if (t.isHost) {
      MyGameDraw.topConfirmCue(ctxModal)
    } else {
      MyGameDraw.topConfirmPlay(ctxModal)
    }
  } else if (isPath(point, "endBtn")) {
    t.$store.dispatch("myGame/End")
  }
}

const eventListenerTop = (t, evt) => {
  const ctx = t[evt.target.id]

  const point = getEventPoint(ctx, evt)

  const isPath = (point, areaName) => {
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
      point.x >= area.x &&
      point.x <= area.x + area.w &&
      point.y >= area.y &&
      point.y <= area.y + area.h
    )
  }

  if (t.isHost == t.selectCardIsHost) {
    //play
    if (isPath(point, "playOkBtn")) {
      t.$store.dispatch("myGame/DoPlay", t.selectCardIndex)
      t.topOperation = false
    } else if (isPath(point, "playCancelBtn")) {
      t.topOperation = false
    }
  } else {
    //cue
    if (isPath(point, "cueNumBtn")) {
      t.$store.dispatch("myGame/DoCue", [t.selectCardIndex, "num"])
      t.topOperation = false
    } else if (isPath(point, "cueColorBtn")) {
      t.$store.dispatch("myGame/DoCue", [t.selectCardIndex, "color"])
      t.topOperation = false
    } else if (isPath(point, "cueCancelBtn")) {
      t.topOperation = false
    }
  }
}

export { eventListener, eventListenerTop }
