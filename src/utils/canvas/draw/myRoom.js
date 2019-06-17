/* 房间绘制方法库 */
// import DrawLib from "./lib"
import { MyRoomConfig } from "../config"
import { dpr, px2Rem, fontFamily } from "../lib"

let _ = {}

_.exitBtn = ctx => {
  const btn = MyRoomConfig.exitBtn

  ctx.fillStyle = btn.bgColor
  ctx.fillRect(btn.x, btn.y, btn.w, btn.h)

  ctx.font = px2Rem(16) + "px " + fontFamily
  ctx.fillStyle = btn.textColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("退出房间", btn.x + btn.w / 2, btn.y + btn.h / 2)
}

_.hostPlayer = (ctx, isHost, isReady, info) => {
  const rectConfig = {
    rect: MyRoomConfig.host.area,
    info: MyRoomConfig.host.info.area,
    button: MyRoomConfig.host.button
  }
  drawPlayer(ctx, rectConfig, true, isHost, isReady, info)
}

_.guestPlayer = (ctx, isHost, isReady, info) => {
  const rectConfig = {
    rect: MyRoomConfig.guest.area,
    info: MyRoomConfig.guest.info.area,
    button: MyRoomConfig.guest.button
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

    ctx.font = px2Rem(24) + "px " + fontFamily
    ctx.fillStyle = "#4b4b4b"
    ctx.textAlign = "left"
    ctx.textBaseline = "middle"
    const text = info.name + (isPlayer ? "*" : "")
    ctx.fillText(text, rectInfo.x + 10 * dpr, rectInfo.y + rectInfo.h / 2)
  }

  let buttonConfig = {}

  if (isPlayer) {
    //渲染当前玩家的按钮

    if (isHost) {
      //当前玩家是主机
      if (isReady) {
        //客机玩家已准备 按钮enabled_ok
        buttonConfig.bgColor = MyRoomConfig.player.button.enabled.ok.bgColor
        buttonConfig.textcolor = MyRoomConfig.player.button.enabled.ok.textColor
      } else {
        //客机玩家未准备 按钮disabled
        buttonConfig.bgColor = MyRoomConfig.player.button.disabled.bgColor
        buttonConfig.textcolor = MyRoomConfig.player.button.disabled.textColor
      }

      buttonConfig.text = "开始游戏"
    } else {
      //当前玩家是客机
      if (isReady) {
        //已准备  按钮enabled_cancel
        buttonConfig.bgColor = MyRoomConfig.player.button.enabled.cancel.bgColor
        buttonConfig.textcolor =
          MyRoomConfig.player.button.enabled.cancel.textColor
        buttonConfig.text = "取消准备"
      } else {
        //未准备  按钮enabled_ok
        buttonConfig.bgColor = MyRoomConfig.player.button.enabled.ok.bgColor
        buttonConfig.textcolor = MyRoomConfig.player.button.enabled.ok.textColor
        buttonConfig.text = "准备"
      }
    }

    ctx.fillStyle = buttonConfig.bgColor
    ctx.fillRect(rectButton.x, rectButton.y, rectButton.w, rectButton.h)

    ctx.font = px2Rem(16) + "px " + fontFamily
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
        readyText = "已准备"
      } else {
        readyText = "准备中"
      }

      let readyArea = MyRoomConfig.guest.readyArea

      ctx.fillStyle = MyRoomConfig.guest.readyArea.bgColor
      ctx.fillRect(readyArea.x, readyArea.y, readyArea.w, readyArea.h)

      ctx.font = px2Rem(16) + "px " + fontFamily
      ctx.fillStyle = MyRoomConfig.guest.readyArea.textColor
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(
        readyText,
        readyArea.x + 20 * dpr,
        readyArea.y + readyArea.h / 2
      )
    }
  }
}

export default _
