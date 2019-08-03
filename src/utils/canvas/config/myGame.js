/* 游戏页面绘制参数配置 */

import { vw, vh, px2Rem, fontFamily } from "../lib"
import bgImg from "@/assets/hanabi_bg2.jpg"

const windowPaddingX = 2 * vw //视窗内左右留白
const windowPaddingY = windowPaddingX //视窗内上下留白

const endBtnRectW = 100 * vw //"结束游戏"按钮尺寸宽度
const endBtnRectH = 8 * vh //"结束游戏"按钮尺寸高度

const hostRectBgColor = "#cccccc" //主机玩家区域背景颜色
const guestRectBgColor = "#dcdcdc" //客机玩家区域背景颜色

const playerRectW = 50 * vw - windowPaddingX //玩家区域宽度
const playerRectH = (100 * vh - endBtnRectH) / 2 - windowPaddingY //玩家区域高度

const playerRectPaddingX = 2 * vw //玩家区域内左右留白
const playerRectPaddingY = playerRectPaddingX //玩家区域内上下留白

const playerInfoRectW = playerRectW - playerRectPaddingX * 2 //玩家信息区域宽度
const playerInfoRectH = 10 * vh //玩家信息区域高度
const playerInfoFont = px2Rem(16) + "px " + fontFamily //玩家信息区域字体样式
const playerInfoPaddingX = 1 * vw

const playerInfoBgColor = "#fee9d6" //玩家信息区域背景色
const playerInfoTextColor = "#4b4b4b" //玩家信息区域文本颜色
const playerInfoTextAlign = "left" //玩家信息区域文本颜色
const playerInfoTextBaseline = "middle" //玩家信息区域文本颜色

const playerInfoNowPlayingFont = px2Rem(12) + "px " + fontFamily //玩家信息区域字体样式
const playerInfoNowPlayingRectW = 20 * vw //玩家信息区域中显示"当前回合"区域的宽度
const playerInfoNowPlayingRectH = playerInfoRectH //玩家信息区域中显示"当前回合"区域的高度

const playerInfoContentRectW = playerInfoRectW - playerInfoNowPlayingRectW //玩家信息区域中显示"玩家名称"区域的宽度
const playerInfoContentRectH = playerInfoRectH //玩家信息区域中显示"玩家名称"区域的高度

const cardRectW = 4 * vw //卡牌尺寸宽度
const cardRectH = 1.618 * cardRectW //卡牌尺寸高度
const cardFont = px2Rem(14) + "px " + fontFamily //卡牌上字体样式

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
const tableRectPaddingY = tableRectPaddingX

const tableHistoryRectW = tableRectW - tableRectPaddingX * 2
const tableHistoryRectH = 48 * vh

const tableNumTextColor = "#333333"
const tableNumFont = px2Rem(12) + "px " + fontFamily
const tableNumRectW = 7 * vw
const tableNumRectH = 6 * vh
const tableNumSpacing = 1 * vh
const tableNumTextAlign = "center"
const tableNumTextBaseline = "middle"

const libraryFont = px2Rem(9) + "px " + fontFamily
const libraryBgColor = "#eeaacc"
const libraryTextColor = "#333333"
const libraryTextContent = "牌库"

const discardPileFont = px2Rem(9) + "px " + fontFamily
const discardPileBgColor = "#ccaaee"
const discardPileTextColor = "#333333"
const discardPileTextContent = "弃牌堆"

const historyBgColor = "#eeccaa"

const endBtnBgColor = "#e90200"
const endBtnTextColor = "#ffffff"
const endBtnTextFont = px2Rem(18) + "px " + fontFamily
const endBtnTextContent = "结束游戏"

/* 对话框 */
const modalBgColor = "rgba(222,222,222,0.5)" //整个对话框的背景颜色（遮罩）
const modalDialogBgColor = "#ffffff" //对话框中间主要区域的背景颜色

const modalDialogRectW = 50 * vw //对话框区域宽度
const modalDialogRectH = 50 * vh //对话框区域高度
const modalDialogRectX = (100 * vw - modalDialogRectW) / 2 //对话框区域 水平位置偏移量
const modalDialogRectY = (100 * vh - modalDialogRectH) / 2 //对话框区域 垂直位置偏移量

const modalRectPaddingY = 5 * vh //区域内上下留白

const modalTipRectW = modalDialogRectW //上部提示语句区域宽度
const modalTipRectH = modalDialogRectH / 3 //上部提示语句区域高度
const modalTipTextFont = px2Rem(20) + "px " + fontFamily //上部提示语句区域内容文字字体
const modalTipTextAlign = "center" //上部提示语句区域内容文字 水平对齐方式
const modalTipTextBaseline = "middle" //上部提示语句区域内容文字 垂直对齐方式

const modalTipPlayTextContent = "确定要打出这张牌么" //上部提示语句区域内容文字内容 "打出开牌"
const modalTipCueTextContent = "确定要提示这张牌么" //上部提示语句区域内容文字内容 "提示卡牌"

const modalBtnSpacing = 6 * vw //对话框下方按钮 左右留白

const modalBtnRectW = 10 * vw //对话框下方按钮尺寸宽度
const modalBtnRectH = modalBtnRectW / 3 //对话框下方按钮尺寸高度
const modalBtnTextFont = px2Rem(12) + "px " + fontFamily //对话框下方按钮文字字体
const modalBtnTextAlign = "center" //对话框下方按钮文字 水平对齐方式
const modalBtnTextBaseline = "middle" //对话框下方按钮文字 垂直对齐方式

const modalBtnOkBgColor = "#44ff44" //对话框下方按钮  "确定"按钮背景色
const modalBtnOkTextColor = "#ff44ff" //对话框下方按钮  "确定"按钮文字颜色
const modalBtnOkTextContent = "确定" //对话框下方按钮  "确定"按钮文字内容

const modalBtnCancelBgColor = "#ff4444" //对话框下方按钮  "取消"按钮背景色
const modalBtnCancelTextColor = "#44ffff" //对话框下方按钮  "取消"按钮文字颜色
const modalBtnCancelTextContent = "取消" //对话框下方按钮  "取消"按钮文字内容

const modalBtnCueNumBgColor = "#ffff44" //对话框下方按钮  "提示数字"按钮背景色
const modalBtnCueNumTextColor = "#4444ff" //对话框下方按钮  "提示数字"按钮文字颜色
const modalBtnCueNumTextContent = "提示数字" //对话框下方按钮  "提示数字"按钮文字内容

const modalBtnCueColorBgColor = "#44ffff" //对话框下方按钮  "提示颜色"按钮背景色
const modalBtnCueColorTextColor = "#ff4444" //对话框下方按钮  "提示颜色"按钮文字颜色
const modalBtnCueColorTextContent = "提示颜色" //对话框下方按钮  "提示颜色"按钮文字内容

let _ = {}

/* 主机玩家 */
_.host = {}

_.host.bgColor = hostRectBgColor

// 主机玩家 玩家区域
_.host.rect = {
  w: playerRectW,
  h: playerRectH,
  x: windowPaddingX,
  y: windowPaddingY
}

// 主机玩家 玩家信息区域
_.host.info = {
  rect: {
    w: playerInfoRectW,
    h: playerInfoRectH,
    x: _.host.rect.x + playerRectPaddingX,
    y: _.host.rect.y + playerRectPaddingY
  },
  bgColor: playerInfoBgColor
}

// 主机玩家 信息中"名称"区域
_.host.info.content = {
  rect: {
    w: playerInfoContentRectW,
    h: playerInfoContentRectH,
    x: _.host.info.rect.x,
    y: _.host.info.rect.y
  },
  text: {
    font: playerInfoFont,
    color: playerInfoTextColor,
    align: playerInfoTextAlign,
    baseline: playerInfoTextBaseline
  },
  paddingX: playerInfoPaddingX
}

// 主机玩家 信息中"当前回合"区域
_.host.info.nowPlaying = {
  rect: {
    w: playerInfoNowPlayingRectW,
    h: playerInfoNowPlayingRectH,
    x: _.host.info.rect.x + _.host.info.content.rect.w,
    y: _.host.info.rect.y
  },
  text: {
    font: playerInfoNowPlayingFont,
    color: playerInfoTextColor,
    align: playerInfoTextAlign,
    baseline: playerInfoTextBaseline,
    content: "当前回合"
  },
  paddingX: playerInfoPaddingX
}

// 主机玩家 手牌区域
_.host.hands = {
  rects: [],
  text: {
    font: handsFont,
    align: "center",
    baseline: "middle",
    colors: {
      front: handsFrontTextColor,
      back: handsBackTextColor
    }
  },
  bgColors: {
    front: handsFrontBgColor,
    back: handsBackBgColor
  }
}

for (let i = 0; i < 5; i++) {
  _.host.hands.rects.push({
    w: handsRectW,
    h: handsRectH,
    x: _.host.rect.x + playerRectPaddingX + (handsRectW + handsSpacing) * i,
    y: _.host.info.rect.y + _.host.info.rect.h + playerRectPaddingY
  })
}

/* 桌面区域 */
_.table = {}
_.table.bgColor = tableBgColor
_.table.rect = {
  w: tableRectW,
  h: tableRectH,
  x: tableRectX,
  y: tableRectY
}

/* 牌库 */
_.table.library = {
  rect: {
    x: _.table.rect.x + tableRectPaddingX,
    y: _.table.rect.y + tableRectPaddingY,
    w: cardRectW,
    h: cardRectH
  },
  text: {
    color: libraryTextColor,
    content: libraryTextContent,
    font: libraryFont,
    align: "center"
  },
  bgColor: libraryBgColor
}

/* 弃牌堆 */
_.table.discardPile = {
  rect: {
    x: _.table.rect.x + tableRectPaddingX,
    y: _.table.library.rect.y + _.table.library.rect.h + tableRectPaddingY,
    w: cardRectW,
    h: cardRectH
  },
  text: {
    color: discardPileTextColor,
    content: discardPileTextContent,
    font: discardPileFont,
    align: "center"
  },
  bgColor: discardPileBgColor
}

_.table.num = {
  rect: {
    w: tableNumRectW,
    h: tableNumRectH,
    x: _.table.library.rect.x + _.table.library.rect.w + windowPaddingX,
    y: _.table.rect.y + windowPaddingY
  },
  text: {
    font: tableNumFont,
    color: tableNumTextColor,
    align: tableNumTextAlign,
    baseline: tableNumTextBaseline
  },
  spacing: tableNumSpacing
}

_.table.successCards = {
  rect: {
    w: cardRectW,
    h: cardRectH,
    x: _.table.num.rect.x + _.table.num.rect.w + tableRectPaddingX,
    y: _.table.rect.y + tableRectPaddingY
  },
  spacing: 1 * vw,
  text: {
    font: cardFont,
    align: "center",
    baseline: "middle",
    colors: {
      front: cardFrontTextColor,
      back: cardBackTextColor
    }
  },
  bgColors: {
    front: cardFrontBgColor,
    back: cardBackBgColor
  }
}

/* 游戏记录区域 */
_.table.history = {
  rect: {
    w: tableHistoryRectW,
    h: tableHistoryRectH,
    x: _.table.rect.x + tableRectPaddingX,
    y: _.table.rect.y + _.table.rect.h - tableHistoryRectH - tableRectPaddingY
  },
  bgColor: historyBgColor
}

/* 客机玩家 */
_.guest = {}

_.guest.bgColor = guestRectBgColor

_.guest.rect = {
  w: playerRectW,
  h: playerRectH,
  x: windowPaddingX,
  y: _.host.rect.y + _.host.rect.h
}

_.guest.info = {
  rect: {
    w: playerInfoRectW,
    h: playerInfoRectH,
    x: _.guest.rect.x + playerRectPaddingX,
    y: _.guest.rect.y + playerRectPaddingY
  },
  bgColor: playerInfoBgColor
}

_.guest.info.content = {
  rect: {
    w: playerInfoContentRectW,
    h: playerInfoContentRectH,
    x: _.guest.info.rect.x,
    y: _.guest.info.rect.y
  },
  text: {
    font: playerInfoFont,
    color: playerInfoTextColor,
    align: playerInfoTextAlign,
    baseline: playerInfoTextBaseline
  },
  paddingX: playerInfoPaddingX
}

// 客机玩家 信息中"当前回合"区域
_.guest.info.nowPlaying = {
  rect: {
    w: playerInfoNowPlayingRectW,
    h: playerInfoNowPlayingRectH,
    x: _.guest.info.rect.x + _.guest.info.content.rect.w,
    y: _.guest.info.rect.y
  },
  text: {
    font: playerInfoNowPlayingFont,
    color: playerInfoTextColor,
    align: playerInfoTextAlign,
    baseline: playerInfoTextBaseline,
    content: "当前回合"
  },
  paddingX: playerInfoPaddingX
}

// 主机玩家 手牌区域
_.guest.hands = {
  rects: [],
  text: {
    font: handsFont,
    align: "center",
    baseline: "middle",
    colors: {
      front: handsFrontTextColor,
      back: handsBackTextColor
    }
  },
  bgColors: {
    front: handsFrontBgColor,
    back: handsBackBgColor
  }
}

for (let i = 0; i < 5; i++) {
  _.guest.hands.rects.push({
    w: handsRectW,
    h: handsRectH,
    x: _.guest.rect.x + playerRectPaddingX + (handsRectW + handsSpacing) * i,
    y: _.guest.info.rect.y + _.guest.info.rect.h + playerRectPaddingY
  })
}

/* 结束按钮 */
_.endBtn = {
  rect: {
    w: endBtnRectW,
    h: endBtnRectH,
    x: (100 * vw - endBtnRectW) / 2,
    y: 100 * vh - endBtnRectH
  },
  text: {
    font: endBtnTextFont,
    color: endBtnTextColor,
    align: "center",
    baseline: "middle",
    content: endBtnTextContent
  },
  bgColor: endBtnBgColor
}

/* 对话框 */
_.modal = {
  rect: {
    w: 100 * vw,
    h: 100 * vh,
    x: 0,
    y: 0
  },
  bgColor: modalBgColor
}

_.modal.dialog = {
  rect: {
    w: modalDialogRectW,
    h: modalDialogRectH,
    x: modalDialogRectX,
    y: modalDialogRectY
  },
  bgColor: modalDialogBgColor
}

_.modal.tip = {} // 对话框上部文字区域

// 出牌时的文字
_.modal.tip.play = {
  rect: {
    x: _.modal.dialog.rect.x,
    y: _.modal.dialog.rect.y + modalRectPaddingY,
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
    x: _.modal.dialog.rect.x,
    y: _.modal.dialog.rect.y + modalRectPaddingY,
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
      _.modal.dialog.rect.x +
      _.modal.dialog.rect.w / 2 -
      modalBtnRectW -
      modalBtnSpacing / 2,
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
      _.modal.dialog.rect.x +
      _.modal.dialog.rect.w / 2 -
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
    x: _.modal.dialog.rect.x + _.modal.dialog.rect.w / 2 - modalBtnRectW / 2,
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
      _.modal.dialog.rect.x +
      _.modal.dialog.rect.w / 2 +
      modalBtnRectW / 2 +
      modalBtnSpacing,
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
