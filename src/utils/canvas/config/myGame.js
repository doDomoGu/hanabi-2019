import { dpr, width, height } from "../lib"

let _ = {}

/* 基础参数 */
_.window = {}
_.window.padding = 10 * dpr // 窗口留白

/* 玩家基础参数 */
_.player = {}
_.player.bgColor = "#cccccc"
_.player.area = {}
_.player.area.x = 0 * dpr
_.player.area.y = 0 * dpr
_.player.area.w = width //玩家区域宽度
_.player.area.h = 150 * dpr //玩家区域高度
_.player.area.padding = _.window.padding //玩家区域内留白

_.player.info = {}
_.player.info.bgColor = "#fee9d6"
_.player.info.textColor = "#4b4b4b"
_.player.info.area = {}
_.player.info.area.w = _.player.area.w - _.player.area.padding * 2
_.player.info.area.h = 40 * dpr

_.player.info.nowPlaying = {}
_.player.info.nowPlaying.area = {}
_.player.info.nowPlaying.area.w = 100 * dpr
_.player.info.nowPlaying.area.h = _.player.info.area.h

_.player.info.content = {}
_.player.info.content.area = {}
_.player.info.content.area.w =
  _.player.info.area.w - _.player.info.nowPlaying.area.w
_.player.info.content.area.h = _.player.info.area.h

_.player.info.nowPlaying = {}
_.player.info.nowPlaying.area = {}
_.player.info.nowPlaying.area.w = 80 * dpr
_.player.info.nowPlaying.area.h = _.player.info.area.h

_.card = {}
_.card.w = 40 * dpr
_.card.h = 80 * dpr

_.card.front = {}
_.card.front.bgColor = {}
_.card.front.bgColor.white = "#ffffff"
_.card.front.bgColor.blue = "#2222ff"
_.card.front.bgColor.yellow = "#ffff22"
_.card.front.bgColor.red = "#ff2222"
_.card.front.bgColor.green = "#22ff22"

_.card.front.textColor = {}
_.card.front.textColor.white = "#333333"
_.card.front.textColor.blue = "#eeeeee"
_.card.front.textColor.yellow = "#333333"
_.card.front.textColor.red = "#ffffff"
_.card.front.textColor.green = "#333333"

_.card.back = {}
_.card.back.bgColor = "#999999"
_.card.back.textColor = "#ffffff"

_.player.hands = {}
_.player.hands.front = _.card.front
_.player.hands.back = _.card.back
_.player.hands.w = _.card.w
_.player.hands.h = _.card.h
_.player.hands.margin = 10 * dpr

/* 主机玩家 */
_.host = {}

_.host.area = {}
_.host.area.x = _.player.area.x
_.host.area.y = _.player.area.y
_.host.area.w = _.player.area.w
_.host.area.h = _.player.area.h

_.host.info = {}
_.host.info.area = {}
_.host.info.area.x = _.host.area.x + _.player.area.padding
_.host.info.area.y = _.host.area.y + _.player.area.padding
_.host.info.area.w = _.player.info.area.w
_.host.info.area.h = _.player.info.area.h

_.host.info.content = {}
_.host.info.content.area = {}
_.host.info.content.area.w = _.player.info.content.area.w
_.host.info.content.area.h = _.player.info.content.area.h
_.host.info.content.area.x = _.host.info.area.x
_.host.info.content.area.y = _.host.info.area.y

_.host.info.nowPlaying = {}
_.host.info.nowPlaying.area = {}
_.host.info.nowPlaying.area.w = _.player.info.nowPlaying.area.w
_.host.info.nowPlaying.area.h = _.player.info.nowPlaying.area.h
_.host.info.nowPlaying.area.x = _.host.info.area.x + _.host.info.content.area.w
_.host.info.nowPlaying.area.y = _.host.info.area.y

_.host.hands = {}
_.host.hands.areas = []
for (let i = 0; i < 5; i++) {
  let handsArea = {}
  handsArea.x =
    _.host.area.x +
    _.player.area.padding +
    (_.player.hands.w + _.player.area.padding) * i
  handsArea.y = _.host.info.area.y + _.host.info.area.h + _.player.area.padding
  handsArea.w = _.player.hands.w
  handsArea.h = _.player.hands.h
  _.host.hands.areas.push(handsArea)
}
/* _.host.button = {}
_.host.button.x = _.host.area.x + _.player.area.padding
_.host.button.y = _.host.area.y + _.player.area.h - _.player.area.padding - _.player.button.h
_.host.button.w = _.player.button.w
_.host.button.h = _.player.button.h */

/* 桌面区域 */
_.table = {}
_.table.bgColor = "#aaeecc"
_.table.area = {}
_.table.area.x = 0 * dpr
_.table.area.y = _.host.area.y + _.host.area.h
_.table.area.w = width
_.table.area.h = 100 * dpr

_.table.libraryCards = {}
_.table.libraryCards.bgColor = "#eeaacc"
_.table.libraryCards.textColor = "#333333"
_.table.libraryCards.title = "牌库"
_.table.libraryCards.area = {}
_.table.libraryCards.area.x = _.window.padding
_.table.libraryCards.area.y = _.table.area.y + _.window.padding
_.table.libraryCards.area.w = _.card.w
_.table.libraryCards.area.h = _.card.h

_.table.discardCards = {}
_.table.discardCards.bgColor = "#ccaaee"
_.table.discardCards.textColor = "#333333"
_.table.discardCards.title = "弃牌堆"
_.table.discardCards.area = {}
_.table.discardCards.area.w = _.card.w
_.table.discardCards.area.h = _.card.h
_.table.discardCards.area.x =
  width - _.window.padding - _.table.discardCards.area.w
_.table.discardCards.area.y = _.table.area.y + _.window.padding

_.table.num = {}
_.table.num.textColor = "#333333"
_.table.num.area = {}
_.table.num.area.x =
  _.table.libraryCards.area.x + _.table.libraryCards.area.w + _.window.padding
_.table.num.area.y = _.table.area.y + _.window.padding
_.table.num.area.w = 60 * dpr
_.table.num.area.h = 20 * dpr

_.table.successCards = {}
_.table.successCards.area = {}
_.table.successCards.area.x =
  _.table.num.area.x + _.table.num.area.w + _.window.padding
_.table.successCards.area.y = _.table.area.y + _.window.padding
_.table.successCards.area.w = _.card.w / 2
_.table.successCards.area.h = _.card.h / 2
_.table.successCards.margin = 10 * dpr
/* 游戏记录区域 */
_.history = {}
_.history.bgColor = "#eeccaa"
_.history.area = {}
_.history.area.x = 0 * dpr
_.history.area.y = _.table.area.y + _.table.area.h
_.history.area.w = width
_.history.area.h = 100 * dpr

/* 客机玩家 */
_.guest = {}

_.guest.area = {}
_.guest.area.x = _.host.area.x
_.guest.area.y =
  _.host.area.y + _.host.area.h + _.table.area.h + _.history.area.h
_.guest.area.w = _.player.area.w
_.guest.area.h = _.player.area.h

_.guest.info = {}
_.guest.info.area = {}
_.guest.info.area.x = _.guest.area.x + _.player.area.padding
_.guest.info.area.y = _.guest.area.y + _.player.area.padding
_.guest.info.area.w = _.player.info.area.w
_.guest.info.area.h = _.player.info.area.h

_.guest.info.content = {}
_.guest.info.content.area = {}
_.guest.info.content.area.w = _.player.info.content.area.w
_.guest.info.content.area.h = _.player.info.content.area.h
_.guest.info.content.area.x = _.guest.info.area.x
_.guest.info.content.area.y = _.guest.info.area.y

_.guest.info.nowPlaying = {}
_.guest.info.nowPlaying.area = {}
_.guest.info.nowPlaying.area.w = _.player.info.nowPlaying.area.w
_.guest.info.nowPlaying.area.h = _.player.info.nowPlaying.area.h
_.guest.info.nowPlaying.area.x =
  _.guest.info.area.x + _.guest.info.content.area.w
_.guest.info.nowPlaying.area.y = _.guest.info.area.y

_.guest.hands = {}
_.guest.hands.areas = []
for (let i = 0; i < 5; i++) {
  let handsArea = {}
  handsArea.x =
    _.guest.area.x +
    _.player.area.padding +
    (_.player.hands.w + _.player.area.padding) * i
  handsArea.y =
    _.guest.info.area.y + _.guest.info.area.h + _.player.area.padding
  handsArea.w = _.player.hands.w
  handsArea.h = _.player.hands.h
  _.guest.hands.areas.push(handsArea)
}

/* 结束按钮 */
_.endBtn = {}
_.endBtn.w = width
_.endBtn.h = 30 * dpr
_.endBtn.x = 0 * dpr
_.endBtn.y = height - _.endBtn.h
_.endBtn.bgColor = "#e90200"
_.endBtn.textColor = "#ffffff"

/* 按钮 */
_.btn = {}
_.btn.area = {}
_.btn.area.w = 50 * dpr
_.btn.area.h = 20 * dpr
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
_.top.rect.x = 0 * dpr
_.top.rect.y = 0 * dpr
_.top.rect.w = width
_.top.rect.h = height
_.top.bgColor = "rgba(222,222,222,0.9)"

_.top.tip = {}
_.top.tip.rect = {}
_.top.tip.rect.w = _.top.rect.w
_.top.tip.rect.h = 50 * dpr
_.top.tip.rect.x = 0 * dpr
_.top.tip.rect.y = _.top.rect.h / 2 - _.top.tip.rect.h

_.top.play = {}
_.top.play.ok = {}
_.top.play.ok.rect = {}
_.top.play.ok.rect.x = _.top.rect.w / 2 - 100 * dpr
_.top.play.ok.rect.y = _.top.rect.h / 2 + 40 * dpr
_.top.play.ok.rect.w = _.btn.area.w
_.top.play.ok.rect.h = _.btn.area.h

_.top.play.cancel = {}
_.top.play.cancel.rect = {}
_.top.play.cancel.rect.x = _.top.rect.w / 2
_.top.play.cancel.rect.y = _.top.rect.h / 2 + 40 * dpr
_.top.play.cancel.rect.w = _.btn.area.w
_.top.play.cancel.rect.h = _.btn.area.h

_.top.cue = {}
_.top.cue.num = {}
_.top.cue.num.rect = {}
_.top.cue.num.rect.x = _.top.rect.w / 2 - 60 * dpr - _.btn.area.w
_.top.cue.num.rect.y = _.top.rect.h / 2 + 20 * dpr
_.top.cue.num.rect.w = _.btn.area.w
_.top.cue.num.rect.h = _.btn.area.h
_.top.cue.color = {}
_.top.cue.color.rect = {}
_.top.cue.color.rect.x = _.top.rect.w / 2 - _.btn.area.w / 2
_.top.cue.color.rect.y = _.top.rect.h / 2 + 20 * dpr
_.top.cue.color.rect.w = _.btn.area.w
_.top.cue.color.rect.h = _.btn.area.h
_.top.cue.cancel = {}
_.top.cue.cancel.rect = {}
_.top.cue.cancel.rect.x = _.top.rect.w / 2 + 60 * dpr
_.top.cue.cancel.rect.y = _.top.rect.h / 2 + 20 * dpr
_.top.cue.cancel.rect.w = _.btn.area.w
_.top.cue.cancel.rect.h = _.btn.area.h

export default _
