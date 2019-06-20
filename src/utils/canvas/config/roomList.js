/* 房间列表绘制参数配置 */

import { dpr, width, height, px2Rem } from "../lib"
// import OtherConfig from "./other"
import itemImg from "@/assets/background.jpg"
import bgImg from "@/assets/hanabi_bg2.jpg"

let _ = {}

_.padding = 30 * dpr

_.item = {}

_.item.actived = {}
_.item.actived.bgColor = "#6699cc"
_.item.actived.textColor = "#ffffff"

_.item.unactived = {}
_.item.unactived.bgColor = "#eeeeee"
_.item.unactived.textColor = "#eeeeee"

_.item.rect = {}
_.item.rect.x = _.padding
_.item.rect.y = _.padding
_.item.rect.w = width - _.item.rect.x * 2
_.item.rect.h = 30 * dpr

_.item.titleX = _.item.rect.x + 10 * dpr
_.item.lockX = _.item.rect.x + _.item.rect.w - 60 * dpr
_.item.playerCountX = _.item.rect.x + _.item.rect.w - 40 * dpr

_.item.margin = Math.floor((height - _.padding * 2 - _.item.rect.h * 10) / 9)

// _.item.margin = _.item.margin > 120 ? 120 : _.item.margin

_.item.fontSize = px2Rem(22)

_.item.itemImgSrc = itemImg

_.bgImgSrc = bgImg

export default _
