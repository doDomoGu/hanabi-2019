/* 导航栏绘制库 */

import { /*loadImg,*/ px2Rem, fontFamily } from "../lib" // CanvasLib Canvas基础库
import { NavbarConfig } from "../config" //导航栏绘制参数

let _ = {}

// 绘制背景
_.background = ctx => {
  ctx.fillStyle = NavbarConfig.bgColor
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

// 绘制登出按钮
_.logoutBtn = ctx => {
  const btn = NavbarConfig.logoutBtn

  ctx.fillStyle = btn.bgColor
  ctx.fillRect(btn.x, btn.y, btn.w, btn.h)

  ctx.font = px2Rem(16) + "px " + fontFamily
  ctx.fillStyle = btn.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("登出", btn.x + btn.w / 2, btn.y + btn.h / 2)
}

export default _
