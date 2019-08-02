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
    DrawLib.fillRect(ctx, MyGameConfig.host)
    //主机玩家信息区域背景
    DrawLib.fillRect(ctx, MyGameConfig.host.info)
    //客机玩家区域背景
    DrawLib.fillRect(ctx, MyGameConfig.guest)
    //客机玩家信息区域背景
    DrawLib.fillRect(ctx, MyGameConfig.guest.info)
    //桌面区域背景
    DrawLib.fillRect(ctx, MyGameConfig.table)
    //游戏记录区域背景
    DrawLib.fillRect(ctx, MyGameConfig.table.history)
  })
}

//canvas_modal 对话框画布初始化   绘制遮罩及对话框区域背景
const initModal = ctx => {
  DrawLib.fillRect(ctx, MyGameConfig.modal)

  DrawLib.fillRect(ctx, MyGameConfig.modal.dialog)
}

// 绘制结束按钮
_.endBtn = ctx => {
  DrawLib.btn(ctx, MyGameConfig.endBtn)
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
  const cfg = lodash.cloneDeep(MyGameConfig.host.hands)
  if (isPlayerHost) {
    backHands(ctx, cfg, hands)
  } else {
    frontHands(ctx, cfg, hands)
  }
}
//绘制客机玩家手牌
_.guestHands = (ctx, isPlayerHost, hands) => {
  const cfg = lodash.cloneDeep(MyGameConfig.guest.hands)
  if (isPlayerHost) {
    frontHands(ctx, cfg, hands)
  } else {
    backHands(ctx, cfg, hands)
  }
}

//对手手牌 显示正面
const frontHands = (ctx, cfg, hands) => {
  hands.forEach((c, i) => {
    //  c:单张手牌信息;  i:index
    const color = colors[c.color]
    const num = numbers[c.num]
    // 取出rect信息
    cfg.rect = cfg.rects[i]

    // 背景色
    ctx.fillStyle = cfg.bgColors.front[color]
    DrawLib.fillRoundedRect(ctx, cfg.rect, 4)

    // 文字颜色和内容设置
    cfg.text.color = cfg.text.colors.front[color]
    cfg.text.content = num
    DrawLib.fillText(ctx, cfg, false)
  })
}

//自己手牌 显示背面
const backHands = (ctx, cfg, hands) => {
  hands.forEach((c, i) => {
    const rect = cfg.rects[i]
    ctx.fillStyle = cfg.bgColors.back
    DrawLib.fillRoundedRect(ctx, rect, 4)
  })
}

//绘制卡牌 两行文字 居中 第一行取 text.content / 第二行 参数num + ”张“
const drawCardByTextAndNum = (ctx, config, num) => {
  // 卡牌背景色
  ctx.fillStyle = config.bgColor
  DrawLib.fillRoundedRect(ctx, config.rect, 4)

  //第一行字
  config.text.baseline = "bottom"
  DrawLib.fillText(ctx, config, false)

  //第一行字
  config.text.baseline = "top"
  config.text.content = num + "张"
  DrawLib.fillText(ctx, config, false)
}

//绘制牌库
_.libraryCards = (ctx, num) => {
  drawCardByTextAndNum(ctx, lodash.cloneDeep(MyGameConfig.table.library), num)
}
//绘制弃牌堆
_.discardCards = (ctx, num) => {
  drawCardByTextAndNum(
    ctx,
    lodash.cloneDeep(MyGameConfig.table.discardPile),
    num
  )
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
  // 拷贝配置
  const cfg = lodash.cloneDeep(MyGameConfig.table.successCards)

  // 清空区域
  ctx.clearRect(
    cfg.rect.x,
    cfg.rect.y,
    (cfg.rect.w + cfg.spacing) * 5,
    cfg.rect.h
  )

  // 循环卡牌颜色 绘制
  colors.forEach((c, i) => {
    // 计算水平偏移量
    cfg.rect.x += cfg.rect.w + cfg.spacing
    // 卡牌背景色
    ctx.fillStyle = cfg.bgColors.front[c]
    DrawLib.fillRoundedRect(ctx, cfg.rect, 4)
    // 文字颜色和内容
    cfg.text.color = cfg.text.colors.front[c]
    cfg.text.content = successCards[i]
    DrawLib.fillText(ctx, cfg, false)
  })
}

// 绘制 ”当前“
_.nowPlaying = (ctx, isHost) => {
  const cfgHost = MyGameConfig.host.info.nowPlaying
  const cfgGuest = MyGameConfig.guest.info.nowPlaying

  ctx.clearRect(cfgHost.rect.x, cfgHost.rect.y, cfgHost.rect.w, cfgHost.rect.h)
  ctx.clearRect(
    cfgGuest.rect.x,
    cfgGuest.rect.y,
    cfgGuest.rect.w,
    cfgGuest.rect.h
  )

  if (isHost) {
    DrawLib.fillText(ctx, cfgHost)
  } else {
    DrawLib.fillText(ctx, cfgGuest)
  }
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
