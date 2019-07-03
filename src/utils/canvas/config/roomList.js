/* 房间列表绘制参数配置 */

import { vw, vh, px2Rem, fontFamily } from "../lib"
import NavbarConfig from "./navbar"
// import itemImg from "@/assets/background.jpg"
import bgImg from "@/assets/hanabi_bg2.jpg"

let _ = {}

const windowPaddingTop = 8 * vh // 视窗顶部留白距离
const windowPaddingRight = 4 * vw // 视窗右边留白距离

const itemSpacing = 2 * vh // 房间项间距

const itemWidth = 30 * vw
const itemHeight = 6 * vh

_.item = {}

_.item.text = {}
_.item.text.font = px2Rem(20) + "px " + fontFamily
_.item.text.color = {}
_.item.text.color.actived = "#ffffff"
_.item.text.color.unactived = "#333333"
_.item.bgColor = {}
_.item.bgColor.actived = "#6699cc"
_.item.bgColor.unactived = "#eeeeee"

_.item.rect = {}
_.item.rect.x = 100 * vw - itemWidth - windowPaddingRight
_.item.rect.y = NavbarConfig.rect.h + windowPaddingTop
_.item.rect.w = itemWidth
_.item.rect.h = itemHeight

_.item.titleX = _.item.rect.x + 1 * vw
_.item.lockX = _.item.rect.x + _.item.rect.w - 8 * vw
_.item.playerCountX = _.item.rect.x + _.item.rect.w - 6 * vw

_.item.spacing = itemSpacing

//_.item.itemImgSrc = itemImg

_.bgImgSrc = bgImg

export default _
