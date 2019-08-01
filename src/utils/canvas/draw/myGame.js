/* 游戏绘制方法库 */
import { DrawLib } from "../draw"
import { MyGameConfig } from "../config"
import lodash from "lodash"

const colors = ["white", "blue", "yellow", "red", "green"]
const numbers = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5]

let _ = {}

//绘制底部背景
_.bottomRect = ctx => {
  DrawLib.background(ctx, MyGameConfig.bgImgSrc, "tile").then(() => {
    //主机玩家区域背景
    DrawLib.fillRect(ctx, {
      rect: MyGameConfig.host.rect,
      color: MyGameConfig.host.bgColor
    })
    //主机玩家信息区域背景
    DrawLib.fillRect(ctx, {
      rect: MyGameConfig.host.info.rect,
      color: MyGameConfig.host.info.bgColor
    })
    //客机玩家区域背景
    DrawLib.fillRect(ctx, {
      rect: MyGameConfig.guest.rect,
      color: MyGameConfig.guest.bgColor
    })
    //客机玩家信息区域背景
    DrawLib.fillRect(ctx, {
      rect: MyGameConfig.guest.info.rect,
      color: MyGameConfig.guest.info.bgColor
    })
    //桌面区域背景
    DrawLib.fillRect(ctx, {
      rect: MyGameConfig.table.rect,
      color: MyGameConfig.table.bgColor
    })
    //游戏记录区域背景
    DrawLib.fillRect(ctx, {
      rect: MyGameConfig.table.history.rect,
      color: MyGameConfig.table.history.bgColor
    })
  })
}

//canvas_modal 对话框画布初始化   绘制遮罩及对话框区域背景
const initModal = ctx => {
  DrawLib.fillRect(ctx, {
    rect: {
      x: 0,
      y: 0,
      w: ctx.canvas.width,
      h: ctx.canvas.height
    },
    color: MyGameConfig.modal.bgColor
  })

  DrawLib.fillRect(ctx, {
    rect: MyGameConfig.modal.rect,
    color: MyGameConfig.modal.rect.bgColor
  })
}

// 绘制结束按钮
_.endBtn = ctx => {
  const btn = MyGameConfig.endBtn

  ctx.fillStyle = btn.bgColor
  ctx.fillRect(btn.rect.x, btn.rect.y, btn.rect.w, btn.rect.h)

  ctx.font = btn.text.font
  ctx.fillStyle = btn.text.color
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"

  ctx.fillText(
    btn.text.content,
    btn.rect.x + btn.rect.w / 2,
    btn.rect.y + btn.rect.h / 2
  )
}

//绘制主机玩家信息
_.hostPlayer = (ctx, isPlayerHost, info) => {
  const config = { ...MyGameConfig.host.info.content }
  config.text.content = info.name + (isPlayerHost ? "*" : "")
  DrawLib.fillText(ctx, config)
}

//绘制客机玩家信息
_.guestPlayer = (ctx, isPlayerHost, info) => {
  const config = { ...MyGameConfig.guest.info.content }
  config.text.content = info.name + (!isPlayerHost ? "*" : "")
  DrawLib.fillText(ctx, config)
}

//绘制主机玩家手牌
_.hostHands = (ctx, isPlayerHost, hands) => {
  const rects = lodash.cloneDeep(MyGameConfig.host.hands.rects)

  if (isPlayerHost) {
    backHands(ctx, rects, hands)
  } else {
    frontHands(ctx, rects, hands)
  }
}
//绘制客机玩家手牌
_.guestHands = (ctx, isPlayerHost, hands) => {
  const rects = lodash.cloneDeep(MyGameConfig.guest.hands.rects)
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
    ctx.fillStyle = MyGameConfig.hands.front.bgColor[color]
    DrawLib.fillRoundedRect(ctx, rect, 4)

    ctx.font = MyGameConfig.hands.font
    ctx.fillStyle = MyGameConfig.hands.front.textColor[color]
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(numbers[c.num], rect.x + rect.w / 2, rect.y + rect.h / 2)
  })
}

//自己手牌 显示背面
const backHands = (ctx, rects, hands) => {
  hands.forEach((c, i) => {
    let rect = rects[i]
    ctx.fillStyle = MyGameConfig.hands.back.bgColor
    DrawLib.fillRoundedRect(ctx, rect, 4)
  })
}

//绘制卡牌 一行文字 一行数字
const drawCardByTextAndNum = (ctx, config, num) => {
  ctx.fillStyle = config.bgColor
  DrawLib.fillRoundedRect(ctx, config.rect, 4)

  const cfg1 = lodash.cloneDeep(config)
  cfg1.text.baseline = "bottom"
  DrawLib.fillText(ctx, cfg1, false)

  const cfg2 = lodash.cloneDeep(config)
  cfg2.text.baseline = "top"
  cfg2.text.content = num + "张"
  DrawLib.fillText(ctx, cfg2, false)
}

//绘制牌库
_.libraryCards = (ctx, num) => {
  drawCardByTextAndNum(ctx, MyGameConfig.table.library, num)
}
//绘制弃牌堆
_.discardCards = (ctx, num) => {
  drawCardByTextAndNum(ctx, MyGameConfig.table.discardPile, num)
}

//剩余提示数
_.cueNum = (ctx, num) => {
  const cfg = lodash.cloneDeep(MyGameConfig.table.num)
  cfg.text.content = "提示数: " + num
  DrawLib.fillText(ctx, cfg)
}
//剩余机会数
_.chanceNum = (ctx, num) => {
  const cfg = lodash.cloneDeep(MyGameConfig.table.num)
  cfg.text.content = "机会数: " + num
  cfg.rect.y += cfg.rect.h + cfg.spacing
  DrawLib.fillText(ctx, cfg)
}
//分数
_.score = (ctx, num) => {
  const cfg = lodash.cloneDeep(MyGameConfig.table.num)
  cfg.text.content = "分数: " + num
  cfg.rect.y += (cfg.rect.h + cfg.spacing) * 2
  DrawLib.fillText(ctx, cfg)
}

//绘制成功打出的卡牌
_.successCards = (ctx, successCards) => {
  const rect = MyGameConfig.table.successCards.rect
  ctx.clearRect(
    rect.x,
    rect.y,
    (rect.w + MyGameConfig.table.successCards.spacing) * 5,
    rect.h
  )

  colors.forEach((c, i) => {
    let cfg = lodash.cloneDeep(MyGameConfig.table.successCards)

    cfg.rect.x += (cfg.rect.w + cfg.spacing) * i

    ctx.fillStyle = cfg.bgColor.front[c]
    DrawLib.fillRoundedRect(ctx, cfg.rect, 4)

    cfg.text.color = cfg.text.color.front[c]
    cfg.text.content = successCards[i]
    DrawLib.fillText(ctx, cfg, false)
  })
}

_.nowPlaying = (ctx, isHost) => {
  const rectHost = MyGameConfig.host.info.nowPlaying.rect
  const rectGuest = MyGameConfig.guest.info.nowPlaying.rect

  ctx.clearRect(rectHost.x, rectHost.y, rectHost.w, rectHost.h)
  ctx.clearRect(rectGuest.x, rectGuest.y, rectGuest.w, rectGuest.h)

  const rect = isHost ? rectHost : rectGuest

  DrawLib.fillText(ctx, {
    rect: rect,
    text: {
      font: MyGameConfig.host.info.font,
      color: "#333333",
      align: "left",
      content: "当前回合"
    }
  })
}

// "出牌"的弹出对话框
_.playModal = ctx => {
  DrawLib.clear(ctx)
  initModal(ctx)

  DrawLib.fillText(ctx, MyGameConfig.modal.tip.play, false)

  DrawLib.btn(ctx, MyGameConfig.modal.btn.play.ok)
  DrawLib.btn(ctx, MyGameConfig.modal.btn.play.cancel)
}

// "提示卡牌"的弹出对话框
_.cueModal = ctx => {
  DrawLib.clear(ctx)
  initModal(ctx)

  DrawLib.fillText(ctx, MyGameConfig.modal.tip.cue, false)

  DrawLib.btn(ctx, MyGameConfig.modal.btn.cue.num)
  DrawLib.btn(ctx, MyGameConfig.modal.btn.cue.color)
  DrawLib.btn(ctx, MyGameConfig.modal.btn.cue.cancel)
}

export default _
