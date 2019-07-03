/* 房间绘制方法库 */
// import DrawLib from "./lib"
import { MyRoomConfig } from "../config"
import DrawLib from "./lib" // DrawLib

let _ = {}

_.exitBtn = ctx => {
  const btn = MyRoomConfig.exitBtn

  ctx.fillStyle = btn.bgColor
  ctx.fillRect(btn.rect.x, btn.rect.y, btn.rect.w, btn.rect.h)

  ctx.font = btn.font
  ctx.fillStyle = btn.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(
    btn.text,
    btn.rect.x + btn.rect.w / 2,
    btn.rect.y + btn.rect.h / 2
  )
}

_.hostPlayer = (ctx, isHost, isReady, info) => {
  const rectConfig = {
    rect: MyRoomConfig.host.rect,
    info: MyRoomConfig.host.info.rect,
    button: MyRoomConfig.host.button.rect
  }
  drawPlayer(ctx, rectConfig, true, isHost, isReady, info)
}

_.guestPlayer = (ctx, isHost, isReady, info) => {
  const rectConfig = {
    rect: MyRoomConfig.guest.rect,
    info: MyRoomConfig.guest.info.rect,
    button: MyRoomConfig.guest.button.rect
  }
  drawPlayer(ctx, rectConfig, false, !isHost, isReady, info)
}

const drawPlayer = (ctx, rectConfig, isHost, isPlayer, isReady, info) => {
  const rect = rectConfig.rect
  const rectInfo = rectConfig.info
  const rectButton = rectConfig.button
  ctx.clearRect(rect.x, rect.y, rect.w, rect.h)

  ctx.fillStyle = "#fefefe"
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h)

  if (info.id > -1) {
    ctx.fillStyle = "#fee9d6"
    ctx.fillRect(rectInfo.x, rectInfo.y, rectInfo.w, rectInfo.h)

    ctx.font = MyRoomConfig.playerInfo.font
    ctx.fillStyle = "#4b4b4b"
    ctx.textAlign = "left"
    ctx.textBaseline = "middle"
    const text = info.name + (isPlayer ? "*" : "")
    ctx.fillText(
      text,
      rectInfo.x + MyRoomConfig.playerButton.paddingX,
      rectInfo.y + rectInfo.h / 2
    )
  }

  let buttonConfig = {}

  if (isPlayer) {
    //渲染当前玩家的按钮

    if (isHost) {
      //当前玩家是主机
      if (isReady) {
        //客机玩家已准备 按钮enabled_ok
        buttonConfig.bgColor = MyRoomConfig.playerButton.enabled.ok.bgColor
        buttonConfig.textcolor = MyRoomConfig.playerButton.enabled.ok.textColor
      } else {
        //客机玩家未准备 按钮disabled
        buttonConfig.bgColor = MyRoomConfig.playerButton.disabled.bgColor
        buttonConfig.textcolor = MyRoomConfig.playerButton.disabled.textColor
      }

      buttonConfig.text = MyRoomConfig.playerButton.text.start
    } else {
      //当前玩家是客机
      if (isReady) {
        //已准备  按钮enabled_cancel
        buttonConfig.bgColor = MyRoomConfig.playerButton.enabled.cancel.bgColor
        buttonConfig.textcolor =
          MyRoomConfig.playerButton.enabled.cancel.textColor
        buttonConfig.text = MyRoomConfig.playerButton.text.doReady2
      } else {
        //未准备  按钮enabled_ok
        buttonConfig.bgColor = MyRoomConfig.playerButton.enabled.ok.bgColor
        buttonConfig.textcolor = MyRoomConfig.playerButton.enabled.ok.textColor
        buttonConfig.text = MyRoomConfig.playerButton.text.doReady
      }
    }

    ctx.fillStyle = buttonConfig.bgColor
    ctx.fillRect(rectButton.x, rectButton.y, rectButton.w, rectButton.h)

    ctx.font = MyRoomConfig.playerButton.font
    ctx.fillStyle = buttonConfig.textcolor
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(
      buttonConfig.text,
      rectButton.x + rectButton.w / 2,
      rectButton.y + rectButton.h / 2
    )
  } else {
    if (!isHost && info.id > -1) {
      //当前玩家是主机 渲染客机玩家状态
      let readyText
      if (isReady) {
        readyText = MyRoomConfig.guest.readyArea.text.isReady
      } else {
        readyText = MyRoomConfig.guest.readyArea.text.gettingReady
      }

      let readyArea = MyRoomConfig.guest.readyArea

      ctx.fillStyle = MyRoomConfig.guest.readyArea.bgColor
      ctx.fillRect(
        readyArea.rect.x,
        readyArea.rect.y,
        readyArea.rect.w,
        readyArea.rect.h
      )

      ctx.font = MyRoomConfig.playerButton.font
      ctx.fillStyle = MyRoomConfig.guest.readyArea.textColor
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(
        readyText,
        readyArea.rect.x,
        readyArea.rect.y + readyArea.rect.h / 2
      )
    }
  }
}

// 绘制背景图
_.background = ctx => {
  DrawLib.background(ctx, MyRoomConfig.bgImgSrc, "tile")
}

export default _
