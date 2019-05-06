/* 房间列表事件监听库 */
import CanvasLib from "../lib"
// import DrawLib from "../draw/lib"
import { RoomListDraw } from "@/utils/canvas/index"
import RoomListConfig from "../config/roomList"

export default function eventListener(t, evt) {
  const mousePos = CanvasLib.getMousePos(t.canvas, evt)

  function getListItemIndex(pos, listCount) {
    let index = -1 // [0-9]

    const rect = JSON.parse(JSON.stringify(RoomListConfig.item.rect))

    if (pos.x >= rect.x && pos.x <= rect.x + rect.w) {
      let y1, y2
      for (let i = 0; i < listCount; i++) {
        y1 = rect.y + parseInt(rect.h + RoomListConfig.item.margin) * i
        y2 = y1 + rect.h
        if (pos.y >= y1 && pos.y <= y2) {
          index = i
          break
        }
      }
    }
    return index
  }

  const itemIndex = getListItemIndex(mousePos, t.list.length)

  if (evt.type == "touchstart") {
    if (itemIndex > -1) {
      t.itemIndex = itemIndex
      RoomListDraw.drawItem(t.ctx, t.itemIndex, t.list[t.itemIndex], true)
    }
  } else if (evt.type == "touchend") {
    if (
      itemIndex > -1 &&
      itemIndex == t.itemIndex &&
      itemIndex < t.list.length
    ) {
      if (t.list[itemIndex].isLocked) {
        alert("这个房间锁上了")
        RoomListDraw.drawItem(t.ctx, t.itemIndex, t.list[t.itemIndex], false)
      } else {
        t.enter(itemIndex + 1)
      }
    } else {
      RoomListDraw.drawItem(t.ctx, t.itemIndex, t.list[t.itemIndex], false)

      t.itemIndex = 0
    }
  }
}