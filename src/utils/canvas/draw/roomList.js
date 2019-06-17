/* 房间列表绘制库 */

import { loadImg, fontFamily } from "../lib" // CanvasLib Canvas基础库
import { RoomListConfig } from "../config" //房间列表页面绘制参数

let _ = {}

/*
 * 函数 list: 绘制列表
 * 参数 ctx: canvasContext 对象
 * 参数 list: 列表数据
 */

_.list = (ctx, list) => {
  // 循环列表数据
  for (let i in list) {
    // 绘制单个非活动状态的房间
    _.item(ctx, i, list[i], false)
  }
}

/*
 * 函数 item: 绘制单个房间
 * 参数 ctx: canvasContext 对象
 * 参数 index: 列表下标索引 从0开始
 * 参数 item: 单条房间数据
 * 参数 actived: 是否活动状态，如从触摸开始到触摸中都为活动状态
 */
_.item = (ctx, index, item, actived) => {
  // 复制单个项目的 x y w h 属性
  let rect = { ...RoomListConfig.item.rect }

  // 根据 index 计算y偏移量
  rect.y += parseInt(index) * parseInt(rect.h + RoomListConfig.item.margin)

  // 根据 actived 赋予背景色和文字颜色
  // const bgColor = actived
  //   ? RoomListConfig.item.actived.bgColor
  //   : RoomListConfig.item.unactived.bgColor
  const textColor = actived
    ? RoomListConfig.item.actived.textColor
    : RoomListConfig.item.unactived.textColor

  loadImg(RoomListConfig.item.itemImgSrc).then(img => {
    // 填充背景
    ctx.drawImage(img, rect.x, rect.y, rect.w, rect.h)

    // 设置文字参数
    ctx.font = RoomListConfig.item.fontSize + "px " + fontFamily
    ctx.fillStyle = textColor
    ctx.textAlign = "left"
    ctx.textBaseline = "middle"

    // 绘制房间名称
    const _index = parseInt(index) + 1
    const text =
      (_index < 10 ? "00" + _index : "0" + _index) + "   " + item.title
    ctx.fillText(text, RoomListConfig.item.titleX, rect.y + rect.h / 2)

    // 绘制房间上锁符号
    ctx.fillText(
      item.isLocked ? "L" : "",
      RoomListConfig.item.lockX,
      rect.y + rect.h / 2
    )

    // 绘制房间人数信息
    ctx.fillText(
      item.playerCount + "/2",
      RoomListConfig.item.playerCountX,
      rect.y + rect.h / 2
    )
  })
}

//绘制背景图
_.background = ctx => {
  loadImg(RoomListConfig.bgImgSrc)
    .then(img => {
      // 先将image宽度拉伸到和设备一样 （等比例）
      const ctxTemp = document.createElement("canvas").getContext("2d") // ctxTemp 临时canvas
      ctxTemp.canvas.width = ctx.canvas.width // 目标宽度
      ctxTemp.canvas.height = parseInt(
        (ctx.canvas.width / img.width) * img.height
      ) // 目标高度
      ctxTemp.drawImage(img, 0, 0, ctxTemp.canvas.width, ctxTemp.canvas.height)
      //再将 ctxTemp内容 在ctx 上重复平铺
      ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = ctx.createPattern(ctxTemp.canvas, "repeat")
      ctx.fill()
    })
    .catch(err => {
      console.log(err)
    })
}

export default _
