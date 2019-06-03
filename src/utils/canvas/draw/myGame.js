/* 游戏绘制方法库 */
import DrawLib from "./lib"
import MyGameConfig from "../config/myGame"
import CanvasLib from "../lib"

const colors = ["white", "blue", "yellow", "red", "green"]
const numbers = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5]

let _ = {} //common

//绘制背景
_.bottomRect = ctx => {
  //主机玩家区域背景
  DrawLib.fillRect(ctx, {
    rect: MyGameConfig.host.area,
    color: MyGameConfig.player.bgColor
  })
  //主机玩家信息区域背景
  DrawLib.fillRect(ctx, {
    rect: MyGameConfig.host.info.area,
    color: MyGameConfig.player.info.bgColor
  })
  //客机玩家区域背景
  DrawLib.fillRect(ctx, {
    rect: MyGameConfig.guest.area,
    color: MyGameConfig.player.bgColor
  })
  //客机玩家信息区域背景
  DrawLib.fillRect(ctx, {
    rect: MyGameConfig.guest.info.area,
    color: MyGameConfig.player.info.bgColor
  })
  //桌面区域背景
  DrawLib.fillRect(ctx, {
    rect: MyGameConfig.table.area,
    color: MyGameConfig.table.bgColor
  })
  //游戏记录区域背景
  DrawLib.fillRect(ctx, {
    rect: MyGameConfig.history.area,
    color: MyGameConfig.history.bgColor
  })
}

//canvas_top 遮罩背景
_.topRect = ctx => {
  DrawLib.fillRect(ctx, {
    rect: MyGameConfig.top.rect,
    color: MyGameConfig.top.bgColor
  })
}

//绘制结束按钮
_.endBtn = ctx => {
  const btn = MyGameConfig.endBtn

  ctx.fillStyle = btn.bgColor
  ctx.fillRect(btn.x, btn.y, btn.w, btn.h)

  ctx.font = CanvasLib.px2Rem(16) + "px Microsoft JhengHei"
  ctx.fillStyle = btn.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("结束游戏", btn.x + btn.w / 2, btn.y + btn.h / 2)
}

//绘制主机玩家信息
_.hostPlayer = (ctx, isPlayerHost, info) => {
  player(ctx, {
    rect: MyGameConfig.host.info.content.area,
    text: info.name + (isPlayerHost ? "*" : "")
  })
}

//绘制客机玩家信息
_.guestPlayer = (ctx, isPlayerHost, info) => {
  player(ctx, {
    rect: MyGameConfig.guest.info.content.area,
    text: info.name + (!isPlayerHost ? "*" : "")
  })
}

//绘制单个玩家信息
const player = (ctx, config) => {
  DrawLib.fillText(ctx, {
    rect: config.rect,
    font: CanvasLib.px2Rem(24) + "px Microsoft JhengHei",
    textColor: MyGameConfig.player.info.textColor,
    text: config.text,
    textAlign: "left"
  })
}

//绘制主机玩家手牌
_.hostHands = (ctx, isPlayerHost, hands) => {
  const rects = JSON.parse(JSON.stringify(MyGameConfig.host.hands.areas))

  if (isPlayerHost) {
    backHands(ctx, rects, hands)
  } else {
    frontHands(ctx, rects, hands)
  }
}
//绘制客机玩家手牌
_.guestHands = (ctx, isPlayerHost, hands) => {
  const rects = JSON.parse(JSON.stringify(MyGameConfig.guest.hands.areas))
  if (isPlayerHost) {
    frontHands(ctx, rects, hands)
  } else {
    backHands(ctx, rects, hands)
  }
}

//对手手牌 显示正面
const frontHands = (ctx, rects, hands) => {
  hands.forEach((c, i) => {
    let color = colors[c.color]
    let rect = rects[i]
    ctx.fillStyle = MyGameConfig.player.hands.front.bgColor[color]
    DrawLib.fillRoundedRect(ctx, rect, 4)

    ctx.font = CanvasLib.px2Rem(14) + "px Microsoft JhengHei"
    ctx.fillStyle = MyGameConfig.player.hands.front.textColor[color]
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(numbers[c.num], rect.x + rect.w / 2, rect.y + rect.h / 2)
  })
}

//自己手牌 显示背面
const backHands = (ctx, rects, hands) => {
  hands.forEach((c, i) => {
    let rect = rects[i]
    ctx.fillStyle = MyGameConfig.player.hands.back.bgColor
    DrawLib.fillRoundedRect(ctx, rect, 4)
  })
}

//绘制卡牌带数字
const cardsNum = (ctx, config, num) => {
  const rect = config.area
  ctx.fillStyle = config.bgColor
  DrawLib.fillRoundedRect(ctx, rect, 4)

  ctx.font = CanvasLib.px2Rem(12) + "px Microsoft JhengHei"
  ctx.fillStyle = config.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "bottom"
  ctx.fillText(config.title, rect.x + rect.w / 2, rect.y + rect.h / 2)
  ctx.textBaseline = "top"
  ctx.fillText(num + "张", rect.x + rect.w / 2, rect.y + rect.h / 2)
}

//绘制牌库
_.libraryCards = (ctx, num) => {
  cardsNum(ctx, MyGameConfig.table.libraryCards, num)
}
//绘制弃牌堆
_.discardCards = (ctx, num) => {
  cardsNum(ctx, MyGameConfig.table.discardCards, num)
}

//绘制数字
const _num = (ctx, rect, text) => {
  ctx.clearRect(rect.x, rect.y, rect.w, rect.h)

  ctx.font = CanvasLib.px2Rem(12) + "px Microsoft JhengHei"
  ctx.fillStyle = MyGameConfig.table.num.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(text, rect.x + rect.w / 2, rect.y + rect.h / 2)
}

//剩余提示数
_.cueNum = (ctx, num) => {
  const rect = JSON.parse(JSON.stringify(MyGameConfig.table.num.area))
  _num(ctx, rect, "提示数:" + num)
}
//剩余机会数
_.chanceNum = (ctx, num) => {
  const rect = JSON.parse(JSON.stringify(MyGameConfig.table.num.area))
  rect.y += MyGameConfig.table.num.area.h + MyGameConfig.window.padding
  _num(ctx, rect, "机会数:" + num)
}
//分数
_.score = (ctx, num) => {
  const rect = JSON.parse(JSON.stringify(MyGameConfig.table.num.area))
  rect.y += (MyGameConfig.table.num.area.h + MyGameConfig.window.padding) * 2
  _num(ctx, rect, "分数:" + num)
}

//绘制成功打出的卡牌
_.successCards = (ctx, successCards) => {
  //TODO
  const rect = JSON.parse(JSON.stringify(MyGameConfig.table.successCards.area))

  ctx.clearRect(
    rect.x,
    rect.y,
    (rect.w + MyGameConfig.table.successCards.margin) * 5,
    rect.h
  )

  colors.forEach((c, i) => {
    ctx.fillStyle = MyGameConfig.card.front.bgColor[c]
    DrawLib.fillRoundedRect(ctx, rect, 4)

    ctx.font = CanvasLib.px2Rem(8) + "px Microsoft JhengHei"
    ctx.fillStyle = MyGameConfig.card.front.textColor[c]
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(successCards[i], rect.x + rect.w / 2, rect.y + rect.h / 2)

    rect.x += rect.w + MyGameConfig.table.successCards.margin
  })
}

_.nowPlaying = (ctx, isHost) => {
  const rectHost = MyGameConfig.host.info.nowPlaying.area
  const rectGuest = MyGameConfig.guest.info.nowPlaying.area

  ctx.clearRect(rectHost.x, rectHost.y, rectHost.w, rectHost.h)
  ctx.clearRect(rectGuest.x, rectGuest.y, rectGuest.w, rectGuest.h)

  const rect = isHost ? rectHost : rectGuest

  DrawLib.fillText(ctx, {
    rect: rect,
    font: CanvasLib.px2Rem(16) + "px Microsoft JhengHei",
    textColor: "#333333",
    text: "当前回合",
    textAlign: "left"
  })
}

_.topConfirmPlay = ctx => {
  DrawLib.clear(ctx)
  _.topRect(ctx)

  const rectTip = MyGameConfig.top.tip.rect

  ctx.font = CanvasLib.px2Rem(24) + "px Microsoft JhengHei"
  ctx.fillStyle = "#333"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(
    "确定要打出这张牌么",
    rectTip.x + rectTip.w / 2,
    rectTip.y + rectTip.h / 2
  )

  const rectOk = MyGameConfig.top.play.ok.rect
  ctx.fillStyle = MyGameConfig.btn.ok.bgColor
  DrawLib.fillRoundedRect(ctx, rectOk, 4)

  ctx.font = CanvasLib.px2Rem(12) + "px Microsoft JhengHei"
  ctx.fillStyle = MyGameConfig.btn.ok.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("确定", rectOk.x + rectOk.w / 2, rectOk.y + rectOk.h / 2)

  const rectCancel = MyGameConfig.top.play.cancel.rect
  ctx.fillStyle = MyGameConfig.btn.cancel.bgColor
  DrawLib.fillRoundedRect(ctx, rectCancel, 4)

  ctx.font = CanvasLib.px2Rem(12) + "px Microsoft JhengHei"
  ctx.fillStyle = MyGameConfig.btn.cancel.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(
    "取消",
    rectCancel.x + rectCancel.w / 2,
    rectCancel.y + rectCancel.h / 2
  )
}

_.topConfirmCue = ctx => {
  DrawLib.clear(ctx)
  _.topRect(ctx)

  const rectTip = MyGameConfig.top.tip.rect

  ctx.font = CanvasLib.px2Rem(24) + "px Microsoft JhengHei"
  ctx.fillStyle = "#333"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(
    "确定要提示这张牌么",
    rectTip.x + rectTip.w / 2,
    rectTip.y + rectTip.h / 2
  )

  const rectCueNum = MyGameConfig.top.cue.num.rect
  ctx.fillStyle = MyGameConfig.btn.cueNum.bgColor
  DrawLib.fillRoundedRect(ctx, rectCueNum, 4)

  ctx.font = CanvasLib.px2Rem(12) + "px Microsoft JhengHei"
  ctx.fillStyle = MyGameConfig.btn.cueNum.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(
    "提示数字",
    rectCueNum.x + rectCueNum.w / 2,
    rectCueNum.y + rectCueNum.h / 2
  )

  const rectCueColor = MyGameConfig.top.cue.color.rect
  ctx.fillStyle = MyGameConfig.btn.ok.bgColor
  DrawLib.fillRoundedRect(ctx, rectCueColor, 4)

  ctx.font = CanvasLib.px2Rem(12) + "px Microsoft JhengHei"
  ctx.fillStyle = MyGameConfig.btn.ok.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(
    "提示颜色",
    rectCueColor.x + rectCueColor.w / 2,
    rectCueColor.y + rectCueColor.h / 2
  )

  const rectCancel = MyGameConfig.top.cue.cancel.rect
  ctx.fillStyle = MyGameConfig.btn.cancel.bgColor
  DrawLib.fillRoundedRect(ctx, rectCancel, 4)

  ctx.font = CanvasLib.px2Rem(12) + "px Microsoft JhengHei"
  ctx.fillStyle = MyGameConfig.btn.cancel.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(
    "取消",
    rectCancel.x + rectCancel.w / 2,
    rectCancel.y + rectCancel.h / 2
  )
}

export default _
