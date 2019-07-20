/* 游戏页面绘制参数配置 */

import { vw, vh, px2Rem, fontFamily } from "../lib"
import bgImg from "@/assets/hanabi_bg2.jpg"

const windowPaddingX = 2 * vw //视窗内左右留白
const windowPaddingY = 3 * vh //视窗内上下留白

const endBtnRectW = 100 * vw //"结束游戏"按钮尺寸宽度
const endBtnRectH = 8 * vh //"结束游戏"按钮尺寸高度

const hostRectBgColor = "#cccccc" //主机玩家区域背景颜色
const guestRectBgColor = "#dcdcdc" //客机玩家区域背景颜色

const playerRectW = 50 * vw - windowPaddingX //玩家区域宽度
const playerRectH = (100 * vh - endBtnRectH) / 2 - windowPaddingY //玩家区域高度

const playerRectPaddingX = 2 * vw //玩家区域内左右留白
const playerRectPaddingY = 3 * vh //玩家区域内上下留白

const playerInfoRectW = playerRectW - playerRectPaddingX * 2 //玩家信息区域宽度
const playerInfoRectH = 10 * vh //玩家信息区域高度
const playerInfoFont = px2Rem(16) + "px " + fontFamily //玩家信息区域字体样式
const playerInfoPaddingX = 1 * vw

const playerInfoBgColor = "#fee9d6" //玩家信息区域背景色
const playerInfoTextColor = "#4b4b4b" //玩家信息区域文本颜色
const playerInfoTextAlign = "left" //玩家信息区域文本颜色
const playerInfoTextBaseline = "middle" //玩家信息区域文本颜色

const playerInfoNowPlayingRectW = 20 * vw //玩家信息区域中显示"当前回合"区域的宽度
const playerInfoNowPlayingRectH = playerInfoRectH //玩家信息区域中显示"当前回合"区域的高度

const playerInfoContentRectW = playerInfoRectW - playerInfoNowPlayingRectW //玩家信息区域中显示"玩家名称"区域的宽度
const playerInfoContentRectH = playerInfoRectH //玩家信息区域中显示"玩家名称"区域的高度

const cardRectW = 4 * vw //卡牌尺寸宽度
const cardRectH = 12 * vh //卡牌尺寸高度
const cardFont = px2Rem(8) + "px " + fontFamily //卡牌上字体样式

// 卡牌正面（数字）五种颜色的背景色
const cardFrontBgColor = {
  white: "#ffffff",
  blue: "#2222ff",
  yellow: "#ffff22",
  red: "#ff2222",
  green: "#22ff22"
}

// 卡牌正面（数字）五种颜色的文本颜色
const cardFrontTextColor = {
  white: "#333333",
  blue: "#eeeeee",
  yellow: "#333333",
  red: "#ffffff",
  green: "#333333"
}

const cardBackBgColor = "#999999" // 卡牌背面 背景色
const cardBackTextColor = "#ffffff" // 卡牌背面 文本颜色

const handsRectW = cardRectW // 手牌尺寸宽度
const handsRectH = cardRectH // 手牌尺寸高度
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
const tableHistoryRectH = 48 * vh

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

const modalBgColor = "rgba(222,222,222,0.2)"
const modalRectBgColor = "#ffffff"

const modalRectW = 50 * vw
const modalRectH = 50 * vh

// const modalRectPaddingX = 1 * vw
const modalRectPaddingY = 5 * vh

const modalTipRectW = modalRectW
const modalTipRectH = modalRectH / 5
const modalTipTextFont = px2Rem(20) + "px " + fontFamily
const modalTipTextAlign = "center"
const modalTipTextBaseline = "middle"

const modalTipPlayTextContent = "确定要打出这张牌么"
const modalTipCueTextContent = "确定要提示这张牌么"

const modalBtnSpacing = 6 * vw

const modalBtnRectW = 8 * vw
const modalBtnRectH = 4 * vh
const modalBtnTextFont = px2Rem(12) + "px " + fontFamily
const modalBtnTextAlign = "center"
const modalBtnTextBaseline = "middle"

const modalBtnOkBgColor = "#44ff44"
const modalBtnOkTextColor = "#ff44ff"
const modalBtnOkTextContent = "确定"

const modalBtnCancelBgColor = "#ff4444"
const modalBtnCancelTextColor = "#44ffff"
const modalBtnCancelTextContent = "取消"

const modalBtnCueNumBgColor = "#ffff44"
const modalBtnCueNumTextColor = "#4444ff"
const modalBtnCueNumTextContent = "提示数字"

const modalBtnCueColorBgColor = "#44ffff"
const modalBtnCueColorTextColor = "#ff4444"
const modalBtnCueColorTextContent = "提示颜色"

let _ = {}

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

/* 主机玩家 */
_.host = {}

_.host.bgColor = hostRectBgColor

_.host.rect = {} //玩家区域
_.host.rect.x = windowPaddingX
_.host.rect.y = windowPaddingY
_.host.rect.w = playerRectW
_.host.rect.h = playerRectH

_.host.info = {}
_.host.info.rect = {} //玩家信息区域
_.host.info.rect.x = _.host.rect.x + playerRectPaddingX
_.host.info.rect.y = _.host.rect.y + playerRectPaddingY
_.host.info.rect.w = playerInfoRectW
_.host.info.rect.h = playerInfoRectH
_.host.info.bgColor = playerInfoBgColor

_.host.info.content = {}
_.host.info.content.rect = {} //玩家信息中名称区域
_.host.info.content.rect.w = playerInfoContentRectW
_.host.info.content.rect.h = playerInfoContentRectH
_.host.info.content.rect.x = _.host.info.rect.x
_.host.info.content.rect.y = _.host.info.rect.y
_.host.info.content.text = {} //玩家信息中名称区域内 文字设置
_.host.info.content.text.font = playerInfoFont
_.host.info.content.text.color = playerInfoTextColor
_.host.info.content.text.align = playerInfoTextAlign
_.host.info.content.text.baseline = playerInfoTextBaseline
_.host.info.content.paddingX = playerInfoPaddingX

_.host.info.nowPlaying = {}
_.host.info.nowPlaying.rect = {} //玩家信息中心"当前回合"区域
_.host.info.nowPlaying.rect.w = playerInfoNowPlayingRectW
_.host.info.nowPlaying.rect.h = playerInfoNowPlayingRectH
_.host.info.nowPlaying.rect.x = _.host.info.rect.x + _.host.info.content.rect.w
_.host.info.nowPlaying.rect.y = _.host.info.rect.y
_.host.info.nowPlaying.text = {} //玩家信息中心"当前回合"区域内 文字设置
_.host.info.nowPlaying.text.font = playerInfoFont
_.host.info.nowPlaying.text.color = playerInfoTextColor
_.host.info.nowPlaying.text.align = playerInfoTextAlign
_.host.info.nowPlaying.text.baseline = playerInfoTextBaseline
_.host.info.nowPlaying.paddingX = playerInfoPaddingX

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

/* 桌面区域 */
_.table = {}
_.table.bgColor = tableBgColor
_.table.rect = {}
_.table.rect.w = tableRectW
_.table.rect.h = tableRectH
_.table.rect.x = tableRectX
_.table.rect.y = tableRectY

/* 牌库 */
_.table.library = {}
_.table.library.bgColor = libraryBgColor
_.table.library.text = {
  color: libraryTextColor,
  content: libraryTextContent,
  font: cardFont,
  align: "center"
}
_.table.library.rect = {
  x: _.table.rect.x + tableRectPaddingX,
  y: _.table.rect.y + tableRectPaddingY,
  w: cardRectW,
  h: cardRectH
}

/* 弃牌堆 */
_.table.discardPile = {}
_.table.discardPile.bgColor = discardPileBgColor

_.table.discardPile.text = {
  color: discardPileTextColor,
  content: discardPileTextContent,
  font: cardFont,
  align: "center"
}
_.table.discardPile.rect = {
  x: _.table.rect.x + tableRectPaddingX,
  y: _.table.library.rect.y + _.table.library.rect.h + tableRectPaddingY,
  w: cardRectW,
  h: cardRectH
}

_.table.num = {}
_.table.num.textColor = tableNumTextColor
_.table.num.font = tableNumFont
_.table.num.rect = {}
_.table.num.rect.x =
  _.table.library.rect.x + _.table.library.rect.w + windowPaddingX
_.table.num.rect.y = _.table.rect.y + windowPaddingY
_.table.num.rect.w = tableNumRectW
_.table.num.rect.h = tableNumRectH

_.table.num.spacing = tableNumSpacing

_.table.successCards = {}
_.table.successCards.rect = {}
_.table.successCards.rect.x =
  _.table.num.rect.x + _.table.num.rect.w + tableRectPaddingX
_.table.successCards.rect.y = _.table.rect.y + tableRectPaddingY
_.table.successCards.rect.w = cardRectW
_.table.successCards.rect.h = cardRectH
_.table.successCards.spacing = 1 * vw

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
_.guest.info.bgColor = playerInfoBgColor

_.guest.info.content = {}
_.guest.info.content.rect = {}
_.guest.info.content.rect.w = playerInfoContentRectW
_.guest.info.content.rect.h = playerInfoContentRectH
_.guest.info.content.rect.x = _.guest.info.rect.x
_.guest.info.content.rect.y = _.guest.info.rect.y
_.guest.info.content.text = {} //玩家信息中名称区域内 文字设置
_.guest.info.content.text.font = playerInfoFont
_.guest.info.content.text.color = playerInfoTextColor
_.guest.info.content.text.align = playerInfoTextAlign
_.guest.info.content.text.baseline = playerInfoTextBaseline
_.guest.info.content.paddingX = playerInfoPaddingX

_.guest.info.nowPlaying = {}
_.guest.info.nowPlaying.rect = {}
_.guest.info.nowPlaying.rect.w = playerInfoNowPlayingRectW
_.guest.info.nowPlaying.rect.h = playerInfoNowPlayingRectH
_.guest.info.nowPlaying.rect.x =
  _.guest.info.rect.x + _.guest.info.content.rect.w
_.guest.info.nowPlaying.rect.y = _.guest.info.rect.y
_.guest.info.nowPlaying.text = {} //玩家信息中心"当前回合"区域内 文字设置
_.guest.info.nowPlaying.text.font = playerInfoFont
_.guest.info.nowPlaying.text.color = playerInfoTextColor
_.guest.info.nowPlaying.text.align = playerInfoTextAlign
_.guest.info.nowPlaying.text.baseline = playerInfoTextBaseline
_.guest.info.nowPlaying.paddingX = playerInfoPaddingX

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

/* 对话框 */
_.modal = {}

_.modal.bgColor = modalBgColor

_.modal.rect = {}
_.modal.rect.w = modalRectW
_.modal.rect.h = modalRectH
_.modal.rect.x = (100 * vw - _.modal.rect.w) / 2
_.modal.rect.y = (100 * vh - _.modal.rect.h) / 2

_.modal.rect.bgColor = modalRectBgColor

_.modal.tip = {} // 对话框上部文字区域

// 出牌时的文字
_.modal.tip.play = {
  rect: {
    x: _.modal.rect.x,
    y: _.modal.rect.y + modalRectPaddingY,
    w: modalTipRectW,
    h: modalTipRectH
  },
  text: {
    font: modalTipTextFont,
    color: modalBtnOkTextColor,
    align: modalTipTextAlign,
    baseline: modalTipTextBaseline,
    content: modalTipPlayTextContent
  }
}

// 提示时的文字
_.modal.tip.cue = {
  rect: {
    x: _.modal.rect.x,
    y: _.modal.rect.y + modalRectPaddingY,
    w: modalTipRectW,
    h: modalTipRectH
  },
  text: {
    font: modalTipTextFont,
    color: modalBtnOkTextColor,
    align: modalTipTextAlign,
    baseline: modalTipTextBaseline,
    content: modalTipCueTextContent
  }
}

_.modal.btn = {} // 对话框下部操作区域

_.modal.btn.font = modalBtnTextFont

_.modal.btn.play = {} // 操作区域(出牌play)

// 确认出牌的按钮
_.modal.btn.play.ok = {
  rect: {
    x:
      _.modal.rect.x + _.modal.rect.w / 2 - modalBtnRectW - modalBtnSpacing / 2,
    y: _.modal.tip.play.rect.y + _.modal.tip.play.rect.h + modalRectPaddingY,
    w: modalBtnRectW,
    h: modalBtnRectH
  },
  bgColor: modalBtnOkBgColor,
  text: {
    font: modalBtnTextFont,
    color: modalBtnOkTextColor,
    align: modalBtnTextAlign,
    baseline: modalBtnTextBaseline,
    content: modalBtnOkTextContent
  }
}

// 取消出牌的按钮
_.modal.btn.play.cancel = {
  rect: {
    x: _.modal.rect.x + _.modal.rect.w / 2 + modalBtnSpacing / 2,
    y: _.modal.tip.play.rect.y + _.modal.tip.play.rect.h + modalRectPaddingY,
    w: modalBtnRectW,
    h: modalBtnRectH
  },
  bgColor: modalBtnCancelBgColor,
  text: {
    font: modalBtnTextFont,
    color: modalBtnCancelTextColor,
    align: modalBtnTextAlign,
    baseline: modalBtnTextBaseline,
    content: modalBtnCancelTextContent
  }
}

_.modal.btn.cue = {} // 操作区域(提示cue)

// 确认提示数字的按钮
_.modal.btn.cue.num = {
  rect: {
    x:
      _.modal.rect.x +
      _.modal.rect.w / 2 -
      modalBtnRectW / 2 -
      modalBtnSpacing -
      modalBtnRectW,
    y: _.modal.tip.cue.rect.y + _.modal.tip.cue.rect.h + modalRectPaddingY,
    w: modalBtnRectW,
    h: modalBtnRectH
  },
  bgColor: modalBtnCueNumBgColor,
  text: {
    font: modalBtnTextFont,
    color: modalBtnCueNumTextColor,
    align: modalBtnTextAlign,
    baseline: modalBtnTextBaseline,
    content: modalBtnCueNumTextContent
  }
}

// 确认提示颜色的按钮
_.modal.btn.cue.color = {
  rect: {
    x: _.modal.rect.x + _.modal.rect.w / 2 - modalBtnRectW / 2,
    y: _.modal.tip.cue.rect.y + _.modal.tip.cue.rect.h + modalRectPaddingY,
    w: modalBtnRectW,
    h: modalBtnRectH
  },
  bgColor: modalBtnCueColorBgColor,
  text: {
    font: modalBtnTextFont,
    color: modalBtnCueColorTextColor,
    align: modalBtnTextAlign,
    baseline: modalBtnTextBaseline,
    content: modalBtnCueColorTextContent
  }
}

// 取消提示的按钮
_.modal.btn.cue.cancel = {
  rect: {
    x:
      _.modal.rect.x + _.modal.rect.w / 2 + modalBtnRectW / 2 + modalBtnSpacing,
    y: _.modal.tip.cue.rect.y + _.modal.tip.cue.rect.h + modalRectPaddingY,
    w: modalBtnRectW,
    h: modalBtnRectH
  },
  bgColor: modalBtnCancelBgColor,
  text: {
    font: modalBtnTextFont,
    color: modalBtnCancelTextColor,
    align: modalBtnTextAlign,
    baseline: modalBtnTextBaseline,
    content: modalBtnCancelTextContent
  }
}

_.bgImgSrc = bgImg

export default _
