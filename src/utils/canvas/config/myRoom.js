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
const playerInfoFont = px2Rem(24) + "px " + fontFamily //玩家信息区域字体样式

const playerButtonRectW = 14 * vw //玩家按钮宽度
const playerButtonRectH = 8 * vh //玩家按钮高度
const playerButtonFont = px2Rem(18) + "px " + fontFamily //玩家按钮字体样式

const playerButtonEnabledOkBgColor = "#ff4400" //确定按钮的背景颜色
const playerButtonEnabledOkTextColor = "#ffffff" //确定按钮的文字颜色

const playerButtonEnabledCancelBgColor = "#0044ff" //取消按钮的背景颜色
const playerButtonEnabledCancelTextColor = "#ffffff" //取消按钮的文字颜色

const playerButtonDisabledBgColor = "#cccccc" //"不可用"按钮的背景颜色
const playerButtonDisabledTextColor = "#ffffff" //"不可用"按钮的文字颜色

const playerButtonPaddingX = 1 * vw //按钮内左留白
const playerButtonTextStart = "开始游戏" //“开始”按钮文字内容
const playerButtonTextDoReady = "准备" // "准备"按钮文字内容
const playerButtonTextDoReady2 = "取消准备" //"取消准备"按钮文字内容

//当前玩家为主机，客机玩家准备状态显示区域
const readyAreaBgColor = "#dddddd" //客机玩家准备状态区域背景颜色
const readyAreaTextColor = "#ff6352" //客机玩家准备状态区域文字颜色
const readyAreaTextIsReady = "已准备" //客机玩家准备状态区域"已准备"文字内容
const readyAreaTextGettingReady = "准备中" //客机玩家准备状态区域"准备中"文字内容

const exitBtnRectW = 100 * vw //退出按钮宽度
const exitBtnRectH = 8 * vh //退出按钮高度
const exitBtnRectX = 0 * vw //退出按钮距左边开始位置
const exitBtnRectY = 100 * vh - exitBtnRectH //退出按钮距顶部开始位置
const exitBtnBgColor = "#e90200" //退出按钮背景颜色
const exitBtnTextColor = "#ffffff" //退出按钮文字颜色
const exitBtnFont = px2Rem(18) + "px " + fontFamily //退出按钮字体样式
const exitBtnText = "退出房间" //退出按钮文字内容

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
_.host.button.rect.w = playerButtonRectW
_.host.button.rect.h = playerButtonRectH

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
_.guest.readyArea.bgColor = readyAreaBgColor
_.guest.readyArea.textColor = readyAreaTextColor
_.guest.readyArea.text = {}
_.guest.readyArea.text.isReady = readyAreaTextIsReady
_.guest.readyArea.text.gettingReady = readyAreaTextGettingReady

/* 退出按钮 */
_.exitBtn = {}
_.exitBtn.rect = {}
_.exitBtn.rect.w = exitBtnRectW
_.exitBtn.rect.h = exitBtnRectH
_.exitBtn.rect.x = exitBtnRectX
_.exitBtn.rect.y = exitBtnRectY
_.exitBtn.bgColor = exitBtnBgColor
_.exitBtn.textColor = exitBtnTextColor
_.exitBtn.font = exitBtnFont
_.exitBtn.text = exitBtnText

_.bgImgSrc = bgImg

export default _
