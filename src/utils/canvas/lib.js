/* Canvas 基础库 */

// 设备像素比
// const dpr = window.devicePixelRatio
const dpr = 3
// 固定高宽
const width = 736 * dpr
const height = (width / 16) * 9

const vw = width / 100
const vh = height / 100

// 属性：字体大小
// _.fontSize = window.innerWidth / 6.4

// 字体
const fontFamily = "Microsoft YaHei"

// 方法：像素转换为Rem
const px2Rem = px => {
  return px * dpr
  // return (px / 375) * width
}

// 方法：定义并获得canvasContext对象，且设置宽和高(canvas重置初始化)
const getCtx = canvas => {
  const ctx = canvas.getContext("2d")
  ctx.canvas.width = width
  ctx.canvas.height = height
  /* ctx.canvas.width = ctx.canvas.clientWidth * dpr
  ctx.canvas.height = ctx.canvas.clientHeight * dpr
  // console.log(ctx.canvas.width)
  // console.log(ctx.canvas.height)

  console.log(canvas.id)

  console.log(width)
  console.log(height)

  width = ctx.canvas.width
  height = ctx.canvas.height

  console.log(width)
  console.log(height) */
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

  const rate = ctx.canvas.width / ctx.canvas.clientWidth // rate canvas缩放的比率

  const x = (Math.round(_evt.clientX) - rect.left) * rate
  const y = (Math.round(_evt.clientY) - rect.top) * rate

  return {
    x: x,
    y: y
  }
}

const isInRect = (point, rect) => {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.w &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.h
  )
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
  vw,
  vh,
  fontFamily,
  getCtx,
  getEventPoint,
  isInRect,
  px2Rem,
  loadImg
}
