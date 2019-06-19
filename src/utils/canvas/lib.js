/* Canvas 基础库 */

// 设备像素比
const dpr = window.devicePixelRatio

// canvas 宽和高 （窗口高度*像素比，高清化）
const width = window.innerWidth * dpr
// const height = window.innerHeight * dpr
const height = (width / 10) * 16

// console.log(window.innerWidth * dpr)
// console.log(window.innerHeight * dpr)

// 属性：字体大小
// _.fontSize = window.innerWidth / 6.4

// 字体
const fontFamily = "Microsoft YaHei"

// 方法：像素转换为Rem
const px2Rem = px => {
  return (px / 375) * width
}

// 方法：定义并获得canvasContext对象，且设置宽和高(canvas重置初始化)
const getCtx = canvas => {
  const ctx = canvas.getContext("2d")
  ctx.canvas.width = width
  ctx.canvas.height = height
  return ctx
}

// 方法：获得触摸位置坐标 (touchstart , touchend , click)
const getEventPoint = (ctx, evt) => {
  let _evt
  if (evt.type == "touchstart") {
    _evt = evt.touches[0] //touchstart
  } else if (evt.type == "touchend") {
    _evt = evt.changedTouches[0] //touchend
  } else if (evt.type == "click") {
    _evt = evt
  }
  const rect = ctx.canvas.getBoundingClientRect()
  return {
    x: (Math.round(_evt.clientX) - rect.left) * dpr,
    y: (Math.round(_evt.clientY) - rect.top) * dpr
  }
}

// 读取图片src 返回Image对象
const loadImg = src => {
  return new Promise((resolve, reject) => {
    // 创建图片对象
    var img = new Image()
    // 加载成功
    img.onload = () => {
      resolve(img)
    }
    // 加载失败
    img.onerror = () => {
      reject(new Error("图片加载失败"))
    }
    // 给src赋值
    img.src = src
  })
}

export {
  dpr,
  width,
  height,
  fontFamily,
  getCtx,
  getEventPoint,
  px2Rem,
  loadImg
}
