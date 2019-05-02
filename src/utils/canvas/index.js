/* 基础方法库 */
let exports = {}

// 计算文字尺寸大小
exports.fontSize = window.innerWidth / 6.4

// 像素转换为Rem
exports.px2Rem = px => {
  return (px / 375) * window.innerWidth * exports.getDevicePixelRatio()
}

// 获取设备像素比
exports.getDevicePixelRatio = () => {
  return window.devicePixelRatio
}

// 获得屏幕像素缩放比例
exports.getPixelRatio = context => {
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1

  return (window.devicePixelRatio || 1) / backingStore
}

// 获得触摸位置坐标 (touchstart , touchend , click)
exports.getMousePos = (canvas, evt) => {
  let _evt

  if (evt.type == "touchstart") {
    _evt = evt.touches[0] //touchstart
  } else if (evt.type == "touchend") {
    _evt = evt.changedTouches[0] //touchend
  } else if (evt.type == "click") {
    _evt = evt
  }
  const rect = canvas.getBoundingClientRect()
  return {
    x: (Math.round(_evt.clientX) - rect.left) * exports.getDevicePixelRatio(),
    y: (Math.round(_evt.clientY) - rect.top) * exports.getDevicePixelRatio()
  }
}

export default exports
