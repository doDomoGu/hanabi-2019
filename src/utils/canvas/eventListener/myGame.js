/* 我的游戏事件监听库 */
import { getEventPoint } from "../lib"
import { MyGameDraw } from "../draw"
import { MyGameConfig } from "../config"

const main = (t, evt) => {
  const ctx = t[evt.target.id]
  const ctxModal = t.ctxModal

  const point = getEventPoint(ctx, evt)

  const isPath = (point, rectName) => {
    let rect
    switch (rectName) {
      case "endBtn":
        rect = MyGameConfig.endBtn.rect
        break
      default:
        rect = { x: 0, y: 0, w: 0, h: 0 }
    }
    return (
      point.x >= rect.x &&
      point.x <= rect.x + rect.w &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.h
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
    const rects = MyGameConfig.host.hands.rects
    return getHandsIndex(rects, point)
  }

  const getGuestHandsIndex = point => {
    const rects = MyGameConfig.guest.hands.rects
    return getHandsIndex(rects, point)
  }

  const hostHandsIndex = getHostHandsIndex(point)
  const guestHandsIndex = getGuestHandsIndex(point)
  if (t.gameInfo.roundPlayerIsHost == t.isHost && hostHandsIndex > -1) {
    t.modalShow = true
    t.selectCardIndex = hostHandsIndex
    t.selectCardIsHost = true
    if (t.isHost) {
      MyGameDraw.topConfirmPlay(ctxModal)
    } else {
      MyGameDraw.topConfirmCue(ctxModal)
    }
  } else if (t.gameInfo.roundPlayerIsHost == t.isHost && guestHandsIndex > -1) {
    t.modalShow = true
    t.selectCardIndex = guestHandsIndex
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

const modal = (t, evt) => {
  const ctx = t[evt.target.id]

  const point = getEventPoint(ctx, evt)

  const isPath = (point, rectName) => {
    let rect
    switch (rectName) {
      case "playOkBtn":
        rect = MyGameConfig.modal.play.ok.rect
        break
      case "playCancelBtn":
        rect = MyGameConfig.modal.play.cancel.rect
        break
      case "cueNumBtn":
        rect = MyGameConfig.modal.cue.num.rect
        break
      case "cueColorBtn":
        rect = MyGameConfig.modal.cue.color.rect
        break
      case "cueCancelBtn":
        rect = MyGameConfig.modal.cue.cancel.rect
        break
      default:
        rect = { x: 0, y: 0, w: 0, h: 0 }
    }
    return (
      point.x >= rect.x &&
      point.x <= rect.x + rect.w &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.h
    )
  }

  if (t.isHost == t.selectCardIsHost) {
    //play
    if (isPath(point, "playOkBtn")) {
      t.$store.dispatch("myGame/DoPlay", t.selectCardIndex)
      t.modalShow = false
    } else if (isPath(point, "playCancelBtn")) {
      t.modalShow = false
    }
  } else {
    //cue
    if (isPath(point, "cueNumBtn")) {
      t.$store.dispatch("myGame/DoCue", [t.selectCardIndex, "num"])
      t.modalShow = false
    } else if (isPath(point, "cueColorBtn")) {
      t.$store.dispatch("myGame/DoCue", [t.selectCardIndex, "color"])
      t.modalShow = false
    } else if (isPath(point, "cueCancelBtn")) {
      t.modalShow = false
    }
  }
}

export default { main, modal }
