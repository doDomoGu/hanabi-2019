/* 基础方法库 */
let _ = {}

// 属性：字体大小
_.fontSize = window.innerWidth / 6.4

// 方法：像素转换为Rem
_.px2Rem = px => {
  return (px / 375) * window.innerWidth * _.getDevicePixelRatio()
}

// 方法：获取设备像素比
_.getDevicePixelRatio = () => {
  return window.devicePixelRatio
}

// 方法：获得屏幕像素缩放比例
_.getPixelRatio = context => {
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

// 方法：获得触摸位置坐标 (touchstart , touchend , click)
_.getMousePos = (canvas, evt) => {
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
    x: (Math.round(_evt.clientX) - rect.left) * _.getDevicePixelRatio(),
    y: (Math.round(_evt.clientY) - rect.top) * _.getDevicePixelRatio()
  }
}

export default _
