/* 房间列表事件监听库 */
import { getEventPoint } from "../lib"
// import DrawLib from "../draw/lib"
import { RoomListDraw } from "@/utils/canvas/index"
import RoomListConfig from "../config/roomList"

export default function eventListener(t, evt) {
  const ctx = t[evt.target.id]

  const point = getEventPoint(ctx, evt)

  /*
   * 获取点击的项目序号
   * 参数 point: 点击/触摸的位置坐标
   * 参数 itemConfig: roomList的item绘制设置
   * 参数 listCount: list的总数
   */
  function getListItemIndex(point, itemConfig, listCount) {
    let index = -1 // 在区块范围内返回 [0-9]， 否则返回 -1

    const rect = { ...itemConfig.rect }

    // 判断point的x轴坐标在 x1 和 x2 范围之间
    const x1 = rect.x
    const x2 = rect.x + rect.w
    if (point.x >= x1 && point.x <= x2) {
      let y1, y2
      for (let i = 0; i < listCount; i++) {
        // y1和y2 根据序号i的变化而变化
        y1 = rect.y + parseInt(rect.h + itemConfig.margin) * i
        y2 = y1 + rect.h
        // 判断point的y轴坐标在 y1 和 y2 范围之间
        if (point.y >= y1 && point.y <= y2) {
          index = i
          break
        }
      }
    }
    return index
  }

  const itemIndex = getListItemIndex(point, RoomListConfig.item, t.list.length)

  if (evt.type == "touchstart") {
    if (itemIndex > -1 && itemIndex < t.list.length) {
      t.itemIndex = itemIndex
      RoomListDraw.item(ctx, t.itemIndex, t.list[t.itemIndex], true)
    }
  } else if (evt.type == "touchend") {
    if (
      itemIndex > -1 &&
      itemIndex == t.itemIndex &&
      itemIndex < t.list.length
    ) {
      if (t.list[itemIndex].isLocked) {
        alert("这个房间锁上了")
        RoomListDraw.item(ctx, t.itemIndex, t.list[t.itemIndex], false)
      } else {
        t.enter(itemIndex + 1)
      }
    } else {
      if (t.itemIndex > -1) {
        RoomListDraw.item(ctx, t.itemIndex, t.list[t.itemIndex], false)
        t.itemIndex = -1
      }
    }
  }
}
