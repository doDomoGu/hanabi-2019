/* 导航栏绘制参数配置 */

import { vw, vh, px2Rem, fontFamily } from "../lib"

let _ = {}

const bgColor = "#282c34" //导航区域背景颜色

const rectW = 100 * vw //导航区域宽度
const rectH = 10 * vh //导航区域高度
const rectX = 0 * vw //导航区域距左边开始位置
const rectY = 0 * vh //导航区域距顶部开始位置

const rectPaddingX = 1 * vw //导航区域内左右留白
const rectPaddingY = 2 * vh //导航区域内上下留白

const btnW = 8 * vw //按钮宽度
const btnH = 6 * vh //按钮高度

const logoutBtnBgColor = "#d9534f" //登出按钮背景颜色
const logoutBtnTextContent = "登出 >>" //登出按钮文本内容
const logoutBtnTextFont = px2Rem(12) + "px " + fontFamily //登出按钮字体样式
const logoutBtnTextColor = "#ffffff" //登出按钮文字颜色
const logoutBtnTextAlign = "center" //登出按钮水平位置
const logoutBtnTextBaseline = "middle" //登出按钮垂直位置

/* 导航区域 */
_.bgColor = bgColor

_.rect = {}
_.rect.w = rectW
_.rect.h = rectH
_.rect.x = rectX
_.rect.y = rectY

/* 登出按钮 */
_.logoutBtn = {}
_.logoutBtn.rect = {}
_.logoutBtn.rect.w = btnW
_.logoutBtn.rect.h = btnH
_.logoutBtn.rect.x = _.rect.w - rectPaddingX - btnW
_.logoutBtn.rect.y = rectPaddingY

_.logoutBtn.bgColor = logoutBtnBgColor

_.logoutBtn.text = {}
_.logoutBtn.text.content = logoutBtnTextContent
_.logoutBtn.text.font = logoutBtnTextFont
_.logoutBtn.text.color = logoutBtnTextColor
_.logoutBtn.text.align = logoutBtnTextAlign
_.logoutBtn.text.baseline = logoutBtnTextBaseline

export default _
