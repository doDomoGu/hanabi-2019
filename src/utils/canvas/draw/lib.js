/* 基础绘制方法库 */
import { /* dpr, */ /* width, height, */ loadImg } from "../lib"

let _ = {}

// 清空画布方法
_.clear = ctx => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

//绘制背景图
_.background = (ctx, imgSrc, type) => {
  return new Promise((resolve, reject) => {
    loadImg(imgSrc)
      .then(img => {
        if (type == "tile") {
          //平铺
          ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
          ctx.fillStyle = ctx.createPattern(img, "repeat")
          ctx.fill()
        } else if (type == "stretch") {
          //拉伸
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height)
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
        resolve()
      })
      .catch(err => {
        console.log("loadImg wrong")
        console.log(err)
        reject(err)
      })
  })
}

//font-size
// _.fontSize = window.innerWidth / 6.4

// 单位转换像素转为rem
/* _.px2Rem = px => {
  return (px / 375) * window.innerWidth
} */

// 函数：绘制圆角矩形
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

_.fillRect = (ctx, config) => {
  const rect = config.rect
  ctx.clearRect(rect.x, rect.y, rect.w, rect.h)
  ctx.fillStyle = config.color
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
}

_.fillText = (ctx, config, clearFlag = true) => {
  if (clearFlag)
    ctx.clearRect(config.rect.x, config.rect.y, config.rect.w, config.rect.h)

  ctx.font = config.text.font
  ctx.fillStyle = config.text.color ? config.text.color : "#333333"
  ctx.textAlign = config.text.align ? config.text.align : "left"
  ctx.textBaseline = config.text.baseline ? config.text.baseline : "middle"

  let _x = 0
  let _y = 0
  if (ctx.textAlign == "left") {
    _x = config.rect.x + (config.paddingX ? config.paddingX : 0)
    _y = config.rect.y + config.rect.h / 2
  } else if (ctx.textAlign == "center") {
    _x = config.rect.x + config.rect.w / 2
    _y = config.rect.y + config.rect.h / 2
  }

  ctx.fillText(config.text.content, _x, _y)
}

_.btn = (ctx, config) => {
  ctx.fillStyle = config.bgColor ? config.bgColor : "#ffffff"
  ctx.fillRect(config.rect.x, config.rect.y, config.rect.w, config.rect.h)

  ctx.font = config.text.font
  ctx.fillStyle = config.text.color ? config.text.color : "#333333"
  ctx.textAlign = config.text.align ? config.text.align : "left"
  ctx.textBaseline = config.text.baseline ? config.text.baseline : "middle"

  let _x = 0
  let _y = 0
  if (ctx.textAlign == "left") {
    _x = config.rect.x + (config.paddingX ? config.paddingX : 0)
    _y = config.rect.y + config.rect.h / 2
  } else if (ctx.textAlign == "center") {
    _x = config.rect.x + config.rect.w / 2
    _y = config.rect.y + config.rect.h / 2
  }

  ctx.fillText(config.text.content, _x, _y)
}
export default _
