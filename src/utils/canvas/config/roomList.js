/* 房间列表绘制参数配置 */

import { dpr, width, height, vw, vh, px2Rem, fontFamily } from "../lib"
import NavbarConfig from "./navbar"
import itemImg from "@/assets/background.jpg"
import bgImg from "@/assets/hanabi_bg2.jpg"

let _ = {}

let padding = 2 * vh
let itemMarginX = 6 * vw
let itemMarginY = 6 * vh
let itemPadding = 2 * vh

let itemWidth = 30 * vw
let itemHeight = 6 * vh

_.padding = 30 * dpr

_.item = {}

_.item.actived = {}
_.item.actived.bgColor = "#6699cc"
_.item.actived.textColor = "#ffffff"

_.item.unactived = {}
_.item.unactived.bgColor = "#eeeeee"
_.item.unactived.textColor = "#333333"

_.item.rect = {}
_.item.rect.x = width - itemWidth - itemMarginX
_.item.rect.y = NavbarConfig.rect.h + itemMarginY
_.item.rect.w = itemWidth
_.item.rect.h = itemHeight

_.item.titleX = _.item.rect.x + 1 * vw
_.item.lockX = _.item.rect.x + _.item.rect.w - 8 * vw
_.item.playerCountX = _.item.rect.x + _.item.rect.w - 6 * vw

_.item.padding = itemPadding

// _.item.margin = Math.floor((height - _.padding * 2 - _.item.rect.h * 10) / 9)
// _.item.margin = _.item.margin > 120 ? 120 : _.item.margin

_.item.font = px2Rem(20) + "px " + fontFamily

_.item.itemImgSrc = itemImg

_.bgImgSrc = bgImg

export default _
