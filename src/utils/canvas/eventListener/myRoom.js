/* 我的房间事件监听库 */
import { getEventPoint } from "../lib"
import MyRoomConfig from "../config/myRoom"

export default function eventListener(t, evt) {
  const ctx = t[evt.target.id]

  const point = getEventPoint(ctx, evt)

  function isPath(point, areaName) {
    let area
    switch (areaName) {
      case "exitBtn":
        area = MyRoomConfig.exitBtn
        break
      case "startBtn":
        area = MyRoomConfig.host.button
        break
      case "readyBtn":
        area = MyRoomConfig.guest.button
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

  if (isPath(point, "exitBtn")) {
    t.$store.dispatch("myRoom/Exit").then(() => {
      t.$store.dispatch("myRoom/GetInfo", { force: true })
    })
  } else if (isPath(point, "readyBtn")) {
    if (!t.isHost) {
      t.$store.dispatch("myRoom/DoReady").then(() => {
        t.$store.dispatch("myRoom/GetInfo", { force: true })
      })
    }
  } else if (isPath(point, "startBtn")) {
    if (t.isHost && t.isReady) {
      t.$store.dispatch("myGame/Start").then(() => {
        t.$store.dispatch("myRoom/GetInfo", { force: true })
      })
    }
  }
}
