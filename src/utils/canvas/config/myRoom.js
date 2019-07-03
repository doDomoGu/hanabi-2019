/* 房间绘制参数配置 */

import { vw, vh, px2Rem, fontFamily } from "../lib"
import bgImg from "@/assets/hanabi_bg2.jpg"

let _ = {}

const windowPaddingX = 2 * vw //视窗左右留白
const windowPaddingY = 3 * vh //视窗上下留白

const playerSpacing = 4 * vh //两个玩家区域间的间隔
const playerPaddingX = 2 * vw //玩家区域内左右留白
const playerPaddingY = 4 * vh //玩家区域内上下留白

const playerRectW = 100 * vw - windowPaddingX * 2 //玩家区域宽度
const playerRectH = 40 * vh //玩家区域高度

const playerInfoRectW = playerRectW - playerPaddingX * 2 //玩家信息区域宽度
const playerInfoRectH = 10 * vh //玩家信息区域高度
const playerInfoFont = px2Rem(24) + "px " + fontFamily

const playerButtonRectW = 14 * vw
const playerButtonRectH = 8 * vh
const playerButtonFont = px2Rem(18) + "px " + fontFamily

const playerButtonEnabledOkBgColor = "#ff4400"
const playerButtonEnabledOkTextColor = "#ffffff"

const playerButtonEnabledCancelBgColor = "#0044ff"
const playerButtonEnabledCancelTextColor = "#ffffff"

const playerButtonDisabledBgColor = "#cccccc"
const playerButtonDisabledTextColor = "#ffffff"

const playerButtonPaddingX = 1 * vw
const playerButtonTextStart = "开始游戏"
const playerButtonTextDoReady = "准备"
const playerButtonTextDoReady2 = "取消准备"

_.playerInfo = {}
_.playerInfo.font = playerInfoFont

_.playerButton = {}
_.playerButton.font = playerButtonFont

_.playerButton.enabled = {}
_.playerButton.enabled.ok = {}
_.playerButton.enabled.ok.bgColor = playerButtonEnabledOkBgColor
_.playerButton.enabled.ok.textColor = playerButtonEnabledOkTextColor
_.playerButton.enabled.cancel = {}
_.playerButton.enabled.cancel.bgColor = playerButtonEnabledCancelBgColor
_.playerButton.enabled.cancel.textColor = playerButtonEnabledCancelTextColor

_.playerButton.disabled = {}
_.playerButton.disabled.bgColor = playerButtonDisabledBgColor
_.playerButton.disabled.textColor = playerButtonDisabledTextColor

_.playerButton.paddingX = playerButtonPaddingX
_.playerButton.text = {}
_.playerButton.text.start = playerButtonTextStart
_.playerButton.text.doReady = playerButtonTextDoReady
_.playerButton.text.doReady2 = playerButtonTextDoReady2

/* 主机玩家 */
_.host = {}

_.host.rect = {}
_.host.rect.x = windowPaddingX
_.host.rect.y = windowPaddingY
_.host.rect.w = playerRectW
_.host.rect.h = playerRectH

_.host.info = {}
_.host.info.rect = {}
_.host.info.rect.x = _.host.rect.x + playerPaddingX
_.host.info.rect.y = _.host.rect.y + playerPaddingY
_.host.info.rect.w = playerInfoRectW
_.host.info.rect.h = playerInfoRectH

_.host.button = {}
_.host.button.rect = {}
_.host.button.rect.x = _.host.rect.x + playerPaddingX
_.host.button.rect.y =
  _.host.rect.y + playerRectH - playerPaddingY - playerButtonRectH
_.host.button.w = playerButtonRectW
_.host.button.h = playerButtonRectH

/* 客机玩家 */
_.guest = {}

_.guest.rect = {}
_.guest.rect.x = windowPaddingX
_.guest.rect.y = windowPaddingY + _.host.rect.h + playerSpacing //视窗上留白 + 主机玩家区域高度 + 两个玩家之间间隔
_.guest.rect.w = playerRectW
_.guest.rect.h = playerRectH

_.guest.info = {}
_.guest.info.rect = {}
_.guest.info.rect.x = _.guest.rect.x + playerPaddingX
_.guest.info.rect.y = _.guest.rect.y + playerPaddingY
_.guest.info.rect.w = playerInfoRectW
_.guest.info.rect.h = playerInfoRectH

_.guest.button = {}
_.guest.button.rect = {}
_.guest.button.rect.x = _.guest.rect.x + playerPaddingX
_.guest.button.rect.y =
  _.guest.rect.y + playerRectH - playerPaddingY - playerButtonRectH
_.guest.button.rect.w = playerButtonRectW
_.guest.button.rect.h = playerButtonRectH

_.guest.readyArea = {}
_.guest.readyArea.rect = {}
_.guest.readyArea.rect.x = _.guest.rect.x + playerPaddingX
_.guest.readyArea.rect.y =
  _.guest.rect.y + playerRectH - playerPaddingY - playerButtonRectH
_.guest.readyArea.rect.w = playerButtonRectW
_.guest.readyArea.rect.h = playerButtonRectH
_.guest.readyArea.bgColor = "#dddddd"
_.guest.readyArea.textColor = "#ff6352"
_.guest.readyArea.text = {}
_.guest.readyArea.text.isReady = "已准备"
_.guest.readyArea.text.gettingReady = "准备中"

/* 退出按钮 */
_.exitBtn = {}
_.exitBtn.rect = {}
_.exitBtn.rect.w = 100 * vw
_.exitBtn.rect.h = 8 * vh
_.exitBtn.rect.x = 0 * vw
_.exitBtn.rect.y = 100 * vh - _.exitBtn.rect.h
_.exitBtn.bgColor = "#e90200"
_.exitBtn.textColor = "#ffffff"
_.exitBtn.font = px2Rem(18) + "px " + fontFamily
_.exitBtn.text = "退出房间"

_.bgImgSrc = bgImg

export default _
