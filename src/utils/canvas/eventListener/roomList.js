/* 房间列表事件监听库 */
import { getEventPoint, isInRect } from "../lib"
// import DrawLib from "../draw/lib"
import { RoomListDraw } from "../draw"
import { RoomListConfig } from "../config"

import { MessageBox } from "mint-ui"

/*
 * 获取点击的项目序号
 * 参数 point: 点击/触摸的位置坐标
 * 参数 itemConfig: roomList的item绘制设置
 * 参数 listCount: list的总数
 */
function getListItemIndex(point, itemConfig, listCount) {
  let index = -1 // 在区块范围内返回 ( 0 - [listCount] )之间， 否则返回 -1
  let rect = { ...itemConfig.rect }

  for (let i = 0; i < listCount; i++) {
    if (isInRect(point, rect)) {
      index = i
      break
    }
    // rect.y 根据序号i的增加而增加
    rect.y += parseInt(rect.h + itemConfig.spacing)
  }

  return index
}
export default function eventListener(t, evt) {
  const ctx = t[evt.target.id]
  const point = getEventPoint(ctx, evt)
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
        MessageBox.alert("这个房间锁上了").then(() => {
          RoomListDraw.item(ctx, t.itemIndex, t.list[t.itemIndex], false)
        })
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
