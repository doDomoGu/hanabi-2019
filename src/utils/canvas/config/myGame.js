/* 游戏页面绘制参数配置 */

import { vw, vh, px2Rem, fontFamily } from "../lib"
import bgImg from "@/assets/hanabi_bg2.jpg"

const windowPaddingX = 2 * vw //视窗内左右留白
const windowPaddingY = 3 * vh //视窗内上下留白

const endBtnRectW = 100 * vw
const endBtnRectH = 8 * vh

const hostRectBgColor = "#cccccc" //主机玩家区域背景颜色
const guestRectBgColor = "#dcdcdc" //客机玩家区域背景颜色

const playerRectW = 50 * vw - windowPaddingX //玩家区域宽度
const playerRectH = (100 * vh - endBtnRectH) / 2 - windowPaddingY //玩家区域高度

const playerRectPaddingX = 2 * vw //玩家区域内左右留白
const playerRectPaddingY = 3 * vh //玩家区域内上下留白

const playerInfoRectW = playerRectW - playerRectPaddingX * 2 //玩家信息区域宽度
const playerInfoRectH = 10 * vh //玩家信息区域高度
const playerInfoFont = px2Rem(16) + "px " + fontFamily //玩家信息区域字体样式

const playerInfoBgColor = "#fee9d6"
const playerInfoTextColor = "#4b4b4b"

const playerInfoNowPlayingRectW = 20 * vw
const playerInfoNowPlayingRectH = playerInfoRectH

const playerInfoContentRectW = playerInfoRectW - playerInfoNowPlayingRectW
const playerInfoContentRectH = playerInfoRectH

const cardRectW = 4 * vw
const cardRectH = 12 * vh
const cardFont = px2Rem(8) + "px " + fontFamily

const cardFrontBgColor = {
  white: "#ffffff",
  blue: "#2222ff",
  yellow: "#ffff22",
  red: "#ff2222",
  green: "#22ff22"
}
const cardFrontTextColor = {
  white: "#333333",
  blue: "#eeeeee",
  yellow: "#333333",
  red: "#ffffff",
  green: "#333333"
}

const cardBackBgColor = "#999999"
const cardBackTextColor = "#ffffff"

const handsRectW = cardRectW
const handsRectH = cardRectH
const handsFrontBgColor = cardFrontBgColor
const handsFrontTextColor = cardFrontTextColor
const handsBackBgColor = cardBackBgColor
const handsBackTextColor = cardBackTextColor
const handsFont = px2Rem(14) + "px " + fontFamily //手牌字体样式
const handsSpacing = 2 * vw //手牌之间间隔

const tableBgColor = "#aaeecc"
const tableRectW = 50 * vw - windowPaddingX
const tableRectH = 100 * vh - endBtnRectH - windowPaddingY * 2
const tableRectX = 50 * vw
const tableRectY = windowPaddingY

const tableRectPaddingX = 2 * vw
const tableRectPaddingY = 3 * vh

const tableHistoryRectW = tableRectW - tableRectPaddingX * 2
const tableHistoryRectH = 30 * vh

const tableNumTextColor = "#333333"
const tableNumFont = px2Rem(12) + "px " + fontFamily
const tableNumRectW = 6 * vw
const tableNumRectH = 6 * vh
const tableNumSpacing = 1 * vh

const libraryBgColor = "#eeaacc"
const libraryTextColor = "#333333"
const libraryTextContent = "牌库"

const discardPileBgColor = "#ccaaee"
const discardPileTextColor = "#333333"
const discardPileTextContent = "弃牌堆"

const endBtnBgColor = "#e90200"
const endBtnTextColor = "#ffffff"
const endBtnTextFont = px2Rem(18) + "px " + fontFamily
const endBtnTextContent = "结束游戏"

let _ = {}

/* 玩家基础参数 */
_.player = {}
// _.player.bgColor = playerRectBgColor
// _.player.rect = {}
// _.player.rect.x = windowPaddingX
// _.player.rect.y = windowPaddingY
// _.player.rect.w = 48 * vw //玩家区域宽度
// _.player.rect.h = 40 * vh //玩家区域高度
// _.player.rect.paddingX = 2 * vw //玩家区域内留白
// _.player.rect.paddingY = 4 * vh //玩家区域内留白

_.player.info = {}
_.player.info.bgColor = playerInfoBgColor
_.player.info.textColor = playerInfoTextColor
_.player.info.rect = {}
// _.player.info.rect.w = _.player.rect.w - _.player.rect.paddingX * 2
// _.player.info.rect.h = 10 * vh
_.player.info.font = playerInfoFont

_.player.info.nowPlaying = {}
_.player.info.nowPlaying.rect = {}
// _.player.info.nowPlaying.rect.w = 20 * vw
// _.player.info.nowPlaying.rect.h = _.player.info.rect.h

_.player.info.content = {}
_.player.info.content.rect = {}
// _.player.info.content.rect.w =
//   _.player.info.rect.w - _.player.info.nowPlaying.rect.w
// _.player.info.content.rect.h = _.player.info.rect.h

/* _.player.info.nowPlaying = {}
_.player.info.nowPlaying.rect = {}
_.player.info.nowPlaying.rect.w = 80 * dpr
_.player.info.nowPlaying.rect.h = _.player.info.rect.h */

_.card = {}
_.card.rect = {}
_.card.rect.w = cardRectW
_.card.rect.h = cardRectH
_.card.font = cardFont

_.card.front = {}
_.card.front.bgColor = cardFrontBgColor
_.card.front.textColor = cardFrontTextColor

_.card.back = {}
_.card.back.bgColor = cardBackBgColor
_.card.back.textColor = cardBackTextColor

_.hands = {}
_.hands.rect = {}
_.hands.rect.w = handsRectW
_.hands.rect.h = handsRectH
_.hands.font = handsFont
_.hands.front = {}
_.hands.front.bgColor = handsFrontBgColor
_.hands.front.textColor = handsFrontTextColor
_.hands.back = {}
_.hands.back.bgColor = handsBackBgColor
_.hands.back.textColor = handsBackTextColor

// _.player.hands = {}
// _.player.hands.front = _.card.front
// _.player.hands.back = _.card.back
// _.player.hands.rect = {}
// _.player.hands.rect.w = _.card.rect.w
// _.player.hands.rect.h = _.card.rect.h
// _.player.hands.spacing = handsSpacing
// _.player.hands.font = handsFont

/* 主机玩家 */
_.host = {}

_.host.bgColor = hostRectBgColor

_.host.rect = {}
_.host.rect.x = windowPaddingX
_.host.rect.y = windowPaddingY
_.host.rect.w = playerRectW
_.host.rect.h = playerRectH

_.host.info = {}
_.host.info.rect = {}
_.host.info.rect.x = _.host.rect.x + playerRectPaddingX
_.host.info.rect.y = _.host.rect.y + playerRectPaddingY
_.host.info.rect.w = playerInfoRectW
_.host.info.rect.h = playerInfoRectH

_.host.info.content = {}
_.host.info.content.rect = {}
_.host.info.content.rect.w = playerInfoContentRectW
_.host.info.content.rect.h = playerInfoContentRectH
_.host.info.content.rect.x = _.host.info.rect.x
_.host.info.content.rect.y = _.host.info.rect.y

_.host.info.nowPlaying = {}
_.host.info.nowPlaying.rect = {}
_.host.info.nowPlaying.rect.w = playerInfoNowPlayingRectW
_.host.info.nowPlaying.rect.h = playerInfoNowPlayingRectH
_.host.info.nowPlaying.rect.x = _.host.info.rect.x + _.host.info.content.rect.w
_.host.info.nowPlaying.rect.y = _.host.info.rect.y

_.host.hands = {}
_.host.hands.rects = []
for (let i = 0; i < 5; i++) {
  let rect = {}
  rect.x = _.host.rect.x + playerRectPaddingX + (handsRectW + handsSpacing) * i
  rect.y = _.host.info.rect.y + _.host.info.rect.h + playerRectPaddingY
  rect.w = handsRectW
  rect.h = handsRectH
  _.host.hands.rects.push(rect)
}
/* _.host.button = {}
_.host.button.x = _.host.rect.x + _.player.rect.padding
_.host.button.y = _.host.rect.y + _.player.rect.h - _.player.rect.padding - _.player.button.h
_.host.button.w = _.player.button.w
_.host.button.h = _.player.button.h */

/* 桌面区域 */
_.table = {}
_.table.bgColor = tableBgColor
_.table.rect = {}
_.table.rect.w = tableRectW
_.table.rect.h = tableRectH
_.table.rect.x = tableRectX
_.table.rect.y = tableRectY

/* 牌库 */
_.table.libraryCards = {}
_.table.libraryCards.bgColor = libraryBgColor
_.table.libraryCards.textColor = libraryTextColor
_.table.libraryCards.title = libraryTextContent
_.table.libraryCards.rect = {}
_.table.libraryCards.rect.x = _.table.rect.x + tableRectPaddingX
_.table.libraryCards.rect.y = _.table.rect.y + tableRectPaddingY
_.table.libraryCards.rect.w = cardRectW
_.table.libraryCards.rect.h = cardRectH

/* 弃牌堆 */
_.table.discardCards = {}
_.table.discardCards.bgColor = discardPileBgColor
_.table.discardCards.textColor = discardPileTextColor
_.table.discardCards.title = discardPileTextContent
_.table.discardCards.rect = {}
_.table.discardCards.rect.w = cardRectW
_.table.discardCards.rect.h = cardRectH
_.table.discardCards.rect.x = _.table.rect.x + tableRectPaddingX
_.table.discardCards.rect.y =
  _.table.libraryCards.rect.y + _.table.libraryCards.rect.h + tableRectPaddingY

_.table.num = {}
_.table.num.textColor = tableNumTextColor
_.table.num.font = tableNumFont
_.table.num.rect = {}
_.table.num.rect.x =
  _.table.libraryCards.rect.x + _.table.libraryCards.rect.w + windowPaddingX
_.table.num.rect.y = _.table.rect.y + windowPaddingY
_.table.num.rect.w = tableNumRectW
_.table.num.rect.h = tableNumRectH

_.table.num.spacing = tableNumSpacing

_.table.successCards = {}
_.table.successCards.rect = {}
_.table.successCards.rect.x =
  _.table.num.rect.x + _.table.num.rect.w + windowPaddingX
_.table.successCards.rect.y = _.table.rect.y + windowPaddingY
_.table.successCards.rect.w = _.card.w / 2
_.table.successCards.rect.h = _.card.h / 2
_.table.successCards.margin = 1 * vw

/* 游戏记录区域 */
_.table.history = {}
_.table.history.bgColor = "#eeccaa"
_.table.history.rect = {}
_.table.history.rect.w = tableHistoryRectW
_.table.history.rect.h = tableHistoryRectH
_.table.history.rect.x = _.table.rect.x + tableRectPaddingX
_.table.history.rect.y =
  _.table.rect.y + _.table.rect.h - _.table.history.rect.h - tableRectPaddingY

/* 客机玩家 */
_.guest = {}

_.guest.bgColor = guestRectBgColor

_.guest.rect = {}
_.guest.rect.x = windowPaddingX
_.guest.rect.y = _.host.rect.y + _.host.rect.h
_.guest.rect.w = playerRectW
_.guest.rect.h = playerRectH

_.guest.info = {}
_.guest.info.rect = {}
_.guest.info.rect.x = _.guest.rect.x + playerRectPaddingX
_.guest.info.rect.y = _.guest.rect.y + playerRectPaddingY
_.guest.info.rect.w = playerInfoRectW
_.guest.info.rect.h = playerInfoRectH

_.guest.info.content = {}
_.guest.info.content.rect = {}
_.guest.info.content.rect.w = playerInfoContentRectW
_.guest.info.content.rect.h = playerInfoContentRectH
_.guest.info.content.rect.x = _.guest.info.rect.x
_.guest.info.content.rect.y = _.guest.info.rect.y

_.guest.info.nowPlaying = {}
_.guest.info.nowPlaying.rect = {}
_.guest.info.nowPlaying.rect.w = playerInfoNowPlayingRectW
_.guest.info.nowPlaying.rect.h = playerInfoNowPlayingRectH
_.guest.info.nowPlaying.rect.x =
  _.guest.info.rect.x + _.guest.info.content.rect.w
_.guest.info.nowPlaying.rect.y = _.guest.info.rect.y

_.guest.hands = {}
_.guest.hands.rects = []
for (let i = 0; i < 5; i++) {
  let rect = {}
  rect.x = _.guest.rect.x + playerRectPaddingX + (handsRectW + handsSpacing) * i
  rect.y = _.guest.info.rect.y + _.guest.info.rect.h + playerRectPaddingY
  rect.w = handsRectW
  rect.h = handsRectH
  _.guest.hands.rects.push(rect)
}

/* 结束按钮 */
_.endBtn = {}
_.endBtn.rect = {}
_.endBtn.rect.w = endBtnRectW
_.endBtn.rect.h = endBtnRectH
_.endBtn.rect.x = (100 * vw - _.endBtn.rect.w) / 2
_.endBtn.rect.y = 100 * vh - _.endBtn.rect.h

_.endBtn.bgColor = endBtnBgColor

_.endBtn.text = {}
_.endBtn.text.color = endBtnTextColor
_.endBtn.text.font = endBtnTextFont
_.endBtn.text.content = endBtnTextContent

/* 按钮 */
_.btn = {}
_.btn.rect = {}
_.btn.rect.w = 4 * vw
_.btn.rect.h = 2 * vh
_.btn.font = px2Rem(12) + "px " + fontFamily
_.btn.ok = {}
_.btn.ok.bgColor = "#44ff44"
_.btn.ok.textColor = "#ff44ff"
_.btn.cancel = {}
_.btn.cancel.bgColor = "#ff4444"
_.btn.cancel.textColor = "#44ffff"
_.btn.cueNum = {}
_.btn.cueNum.bgColor = "#ffff44"
_.btn.cueNum.textColor = "#4444ff"
_.btn.cueColor = {}
_.btn.cueColor.bgColor = "#44ffff"
_.btn.cueColor.textColor = "#ff4444"

_.top = {}

_.top.rect = {}
_.top.rect.x = 0 * vw
_.top.rect.y = 0 * vh
_.top.rect.w = 100 * vw
_.top.rect.h = 100 * vh
_.top.bgColor = "rgba(222,222,222,0.9)"

_.top.tip = {}
_.top.tip.rect = {}
_.top.tip.rect.w = _.top.rect.w
_.top.tip.rect.h = 50 * vw
_.top.tip.rect.x = 0 * vh
_.top.tip.rect.y = _.top.rect.h / 2 - _.top.tip.rect.h
_.top.tip.font = px2Rem(24) + "px " + fontFamily

_.top.play = {}
_.top.play.ok = {}
_.top.play.ok.rect = {}
_.top.play.ok.rect.x = _.top.rect.w / 2 - 100 * vw
_.top.play.ok.rect.y = _.top.rect.h / 2 + 40 * vh
_.top.play.ok.rect.w = _.btn.rect.w
_.top.play.ok.rect.h = _.btn.rect.h

_.top.play.cancel = {}
_.top.play.cancel.rect = {}
_.top.play.cancel.rect.x = _.top.rect.w / 2
_.top.play.cancel.rect.y = _.top.rect.h / 2 + 40 * vh
_.top.play.cancel.rect.w = _.btn.rect.w
_.top.play.cancel.rect.h = _.btn.rect.h

_.top.cue = {}
_.top.cue.num = {}
_.top.cue.num.rect = {}
_.top.cue.num.rect.x = _.top.rect.w / 2 - 60 * vw - _.btn.rect.w
_.top.cue.num.rect.y = _.top.rect.h / 2 + 20 * vh
_.top.cue.num.rect.w = _.btn.rect.w
_.top.cue.num.rect.h = _.btn.rect.h
_.top.cue.color = {}
_.top.cue.color.rect = {}
_.top.cue.color.rect.x = _.top.rect.w / 2 - _.btn.rect.w / 2
_.top.cue.color.rect.y = _.top.rect.h / 2 + 20 * vh
_.top.cue.color.rect.w = _.btn.rect.w
_.top.cue.color.rect.h = _.btn.rect.h
_.top.cue.cancel = {}
_.top.cue.cancel.rect = {}
_.top.cue.cancel.rect.x = _.top.rect.w / 2 + 60 * vw
_.top.cue.cancel.rect.y = _.top.rect.h / 2 + 20 * vh
_.top.cue.cancel.rect.w = _.btn.rect.w
_.top.cue.cancel.rect.h = _.btn.rect.h

_.bgImgSrc = bgImg

export default _
