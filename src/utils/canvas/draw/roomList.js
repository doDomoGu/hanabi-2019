/* 房间列表绘制库 */

import { loadImg } from "../lib" // CanvasLib Canvas基础库
import { RoomListConfig } from "../config" //房间列表页面绘制参数
import DrawLib from "./lib" // DrawLib

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
  // let rect = { ...RoomListConfig.item.rect }
  // // 根据 index 计算y偏移量
  // rect.y += parseInt(index) * parseInt(rect.h + RoomListConfig.item.margin)
  /* loadImg(RoomListConfig.item.itemImgSrc).then(img => {
    // 填充背景
    ctx.drawImage(img, rect.x, rect.y, rect.w, rect.h)
  }) */
  // console.log(ctx.canvas.id, index, actived)

  drawItemBackground(ctx, index, actived)

  drawItemText(ctx, index, item, actived)
}

const drawItemBackground = (ctx, index, actived) => {
  // item区域属性
  const rect = getItemRect(index)
  // console.log(rect)
  // 根据 actived 赋予背景色和文字颜色
  const bgColor = actived
    ? RoomListConfig.item.actived.bgColor
    : RoomListConfig.item.unactived.bgColor

  ctx.fillStyle = bgColor
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
}

const drawItemText = (ctx, index, item, actived) => {
  // item区域属性
  const rect = getItemRect(index)

  // 设置文字参数
  const textColor = actived
    ? RoomListConfig.item.actived.textColor
    : RoomListConfig.item.unactived.textColor
  ctx.font = RoomListConfig.item.font // 文字大小字体
  ctx.fillStyle = textColor // 文字颜色
  ctx.textAlign = "left"
  ctx.textBaseline = "middle"

  // 绘制房间名称
  const _index = parseInt(index) + 1
  const text = (_index < 10 ? "00" + _index : "0" + _index) + "   " + item.title
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
}

// 根据index获取item的区域 x y w h 的属性
const getItemRect = index => {
  let rect = { ...RoomListConfig.item.rect }
  // 根据 index 计算y偏移量
  rect.y += parseInt(index) * parseInt(rect.h + RoomListConfig.item.margin)
  return rect
}

//绘制背景图
_.background = ctx => {
  DrawLib.background(ctx, RoomListConfig.bgImgSrc, "tile")
}

export default _
