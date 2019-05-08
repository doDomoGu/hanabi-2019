/* 房间列表绘制库 */
import DrawLib from "./lib"
import RoomListConfig from "../config/roomList"

let _ = {}

_.list = (ctx, list) => {
  DrawLib.clear(ctx.canvas)

  for (let i in list) {
    //drawItem(ctx, _idx, list[index].title, this.itemIndex === _idx)
    _.drawItem(ctx, i, list[i], false)
  }
}

_.drawItem = (ctx, index, item, actived) => {
  let rect = JSON.parse(JSON.stringify(RoomListConfig.item.rect))

  rect.y += parseInt(index) * parseInt(rect.h + RoomListConfig.item.margin)

  let bgColor, textColor
  if (actived) {
    bgColor = RoomListConfig.item.actived.bgColor
    textColor = RoomListConfig.item.actived.textColor
  } else {
    bgColor = RoomListConfig.item.unactived.bgColor
    textColor = RoomListConfig.item.unactived.textColor
  }

  ctx.fillStyle = bgColor
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h)

  ctx.font = RoomListConfig.item.fontSize + "px Arial"
  ctx.fillStyle = textColor
  ctx.textAlign = "left"
  ctx.textBaseline = "middle"
  const _index = parseInt(index) + 1
  const text = (_index < 10 ? "00" + _index : "0" + _index) + "   " + item.title
  ctx.fillText(text, RoomListConfig.item.titleX, rect.y + rect.h / 2)

  ctx.fillText(
    item.isLocked ? "L" : "",
    RoomListConfig.item.lockX,
    rect.y + rect.h / 2
  )

  ctx.fillText(
    item.playerCount + "/2",
    RoomListConfig.item.playerCountX,
    rect.y + rect.h / 2
  )
}

export default _
