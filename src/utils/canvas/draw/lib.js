/* 基础绘制方法库 */
import { dpr, width, height, loadImg } from "../lib"

let _ = {}

// 清空画布方法
_.clear = ctx => {
  ctx.canvas.width = width
  ctx.canvas.height = height
}

//绘制背景图
_.background = (ctx, imgSrc, type) => {
  loadImg(imgSrc)
    .then(img => {
      if (type == "tile") {
        //平铺
        ctx.rect(
          0,
          0,
          ctx.canvas.clientWidth * dpr,
          ctx.canvas.clientHeight * dpr
        )
        ctx.fillStyle = ctx.createPattern(img, "repeat")
        ctx.fill()
      } else if (type == "stretch") {
        //拉伸
        ctx.drawImage(
          img,
          0,
          0,
          ctx.canvas.clientWidth * dpr,
          ctx.canvas.clientHeight * dpr
        )
      } else if (type == "tile2") {
        // 先将image宽度拉伸到和设备一样 （等比例） 再平铺
        const ctxTemp = document.createElement("canvas").getContext("2d") // ctxTemp 临时canvas
        ctxTemp.canvas.width = ctx.canvas.width // 目标宽度
        ctxTemp.canvas.height = parseInt(
          (ctx.canvas.width / img.width) * img.height
        ) // 目标高度
        ctxTemp.drawImage(
          img,
          0,
          0,
          ctxTemp.canvas.width,
          ctxTemp.canvas.height
        )
        //再将 ctxTemp内容 在ctx 上重复平铺
        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = ctx.createPattern(ctxTemp.canvas, "repeat")
        ctx.fill()
      }
    })
    .catch(err => {
      console.log("loadImg wrong")
      console.log(err)
    })
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
