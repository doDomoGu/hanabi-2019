/* 房间列表绘制参数配置 */

import { vw, vh, px2Rem, fontFamily } from "../lib"
import NavbarConfig from "./navbar"
// import itemImg from "@/assets/background.jpg"
import bgImg from "@/assets/hanabi_bg2.jpg"

let _ = {}

const windowPaddingTop = 8 * vh //视窗顶部留白距离
const windowPaddingRight = 4 * vw //视窗右边留白距离

const itemTextFont = px2Rem(20) + "px " + fontFamily //房间项内文字字体
const itemTextColorActived = "#ffffff" //房间项选中（激活/touchstart）状态文字颜色
const itemTextColorUnactived = "#333333" //房间项未选中（未激活/touchend/初始状态）状态文字颜色
const itemBgColorActived = "#6699cc" //房间项选中状态（激活/touchstart）文字颜色
const itemBgColorUnactived = "#eeeeee" //房间项未选中（未激活/touchend/初始状态）状态背景颜色

const itemSpacing = 2 * vh //房间项间距

const itemW = 30 * vw //房间项宽度
const itemH = 6 * vh //房间项高度

const itemTitleOffsetX = 2 * vw //房间项标题距离左边偏移量
const itemLockOffsetX = 22 * vw //房间项标题左偏移量
const itemPlayerNumOffsetX = 24 * vw //房间项标题左偏移量

_.item = {}

_.item.text = {}
_.item.text.font = itemTextFont
_.item.text.color = {}
_.item.text.color.actived = itemTextColorActived
_.item.text.color.unactived = itemTextColorUnactived
_.item.bgColor = {}
_.item.bgColor.actived = itemBgColorActived
_.item.bgColor.unactived = itemBgColorUnactived

_.item.rect = {}
_.item.rect.x = 100 * vw - itemW - windowPaddingRight
_.item.rect.y = NavbarConfig.rect.h + windowPaddingTop
_.item.rect.w = itemW
_.item.rect.h = itemH

_.item.titleX = _.item.rect.x + itemTitleOffsetX
_.item.lockX = _.item.rect.x + itemLockOffsetX
_.item.playerNumX = _.item.rect.x + itemPlayerNumOffsetX

_.item.spacing = itemSpacing

//_.item.itemImgSrc = itemImg

_.bgImgSrc = bgImg

export default _
