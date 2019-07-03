/* 我的房间事件监听库 */
import { getEventPoint } from "../lib"
import { MyRoomConfig } from "../config"

export default function eventListener(t, evt) {
  const ctx = t[evt.target.id]

  const point = getEventPoint(ctx, evt)

  function isPath(point, rectName) {
    let rect
    switch (rectName) {
      case "exitBtn":
        rect = MyRoomConfig.exitBtn.rect
        break
      case "startBtn":
        rect = MyRoomConfig.host.button.rect
        break
      case "readyBtn":
        rect = MyRoomConfig.guest.button.rect
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

  if (isPath(point, "exitBtn")) {
    t.doExit()
  } else if (isPath(point, "readyBtn")) {
    if (!t.isHost) {
      t.doReady()
    }
  } else if (isPath(point, "startBtn")) {
    if (t.isHost && t.isReady) {
      t.doStart()
    }
  }
}
