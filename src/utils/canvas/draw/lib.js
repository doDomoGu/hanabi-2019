/* 基础绘制方法库 */
import CanvasLib from "../lib"

// dpr：设备像素比
const dpr = CanvasLib.getDevicePixelRatio()

let _ = {}

// 清空画布方法
_.clear = canvas => {
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
}

//绘制背景图
_.background = (ctx, imgSrc) => {
  let image = new Image()
  image.src = imgSrc
  image.onload = () => {
    ctx.drawImage(
      image,
      0,
      0,
      ctx.canvas.clientWidth * dpr,
      ctx.canvas.clientHeight * dpr
    )
  }
}

//font-size
// _.fontSize = window.innerWidth / 6.4

// 单位转换像素转为rem
/* _.px2Rem = px => {
  return (px / 375) * window.innerWidth
} */

// 函数：绘制圆角矩形
// export function fillRoundedRect(ctx, rect, radius) {
_.fillRoundedRect = (ctx, rect, radius) => {
  const point = (x, y) => {
    return { x: x, y: y }
  }

  const ptA = point(rect.x + radius, rect.y)
  const ptB = point(rect.x + rect.w, rect.y)
  const ptC = point(rect.x + rect.w, rect.y + rect.h)
  const ptD = point(rect.x, rect.y + rect.h)
  const ptE = point(rect.x, rect.y)

  ctx.beginPath()

  ctx.moveTo(ptA.x, ptA.y)
  ctx.arcTo(ptB.x, ptB.y, ptC.x, ptC.y, radius)
  ctx.arcTo(ptC.x, ptC.y, ptD.x, ptD.y, radius)
  ctx.arcTo(ptD.x, ptD.y, ptE.x, ptE.y, radius)
  ctx.arcTo(ptE.x, ptE.y, ptA.x, ptA.y, radius)

  // ctx.stroke()  //边框绘制 根据笔触样式(strokeStyle)
  ctx.fill()
}

// export function fillRect(ctx, config) {
_.fillRect = (ctx, config) => {
  const rect = config.rect
  ctx.clearRect(rect.x, rect.y, rect.w, rect.h)
  ctx.fillStyle = config.color
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
}

// export function fillText(ctx, config) {
_.fillText = (ctx, config) => {
  const rect = config.rect
  ctx.clearRect(rect.x, rect.y, rect.w, rect.h)

  ctx.font = config.font
  ctx.fillStyle = config.textColor
  ctx.textAlign = config.textAlign
  ctx.textBaseline = "middle"
  if (config.textAlign == "left") {
    ctx.fillText(config.text, rect.x + 10, rect.y + rect.h / 2)
  } else if (config.textAlign == "center") {
    ctx.fillText(config.text, rect.x + rect.w / 2, rect.y + rect.h / 2)
  }
}

export default _
