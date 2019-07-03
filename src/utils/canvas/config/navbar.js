/* 导航栏绘制参数配置 */

import { vw, vh, px2Rem, fontFamily } from "../lib"

let _ = {}

_.bgColor = "#282c34"

_.rect = {}
_.rect.x = 0
_.rect.y = 0
_.rect.w = 100 * vw
_.rect.h = 6 * vh

/* 按钮尺寸 */
const btnWidth = 8 * vw
const btnHeight = 4 * vh

// 区域纵轴方向padding
const rectPaddingX = 1 * vw
const rectPaddingY = 1 * vh

/* 登出按钮 */
_.logoutBtn = {}
_.logoutBtn.rect = {}
_.logoutBtn.rect.color = "#d9534f"
_.logoutBtn.rect.x = _.rect.w - rectPaddingX - btnWidth
_.logoutBtn.rect.y = rectPaddingY
_.logoutBtn.rect.w = btnWidth
_.logoutBtn.rect.h = btnHeight
_.logoutBtn.text = {}
_.logoutBtn.text.content = "登出 >>"
_.logoutBtn.text.font = px2Rem(12) + "px " + fontFamily
_.logoutBtn.text.color = "#ffffff"
_.logoutBtn.text.align = "center"
_.logoutBtn.text.baseline = "middle"

export default _
