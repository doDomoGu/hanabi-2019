/* 房间绘制参数配置 */

import CanvasLib from "../lib"

const dpr = CanvasLib.getDevicePixelRatio()

let _ = {}

const width = window.innerWidth * dpr
const height = window.innerHeight * dpr

/* 基础参数 */
_.window = {}
_.window.padding = 0 * dpr // 窗口留白

/* 玩家基础参数 */
_.player = {}

_.player.area = {}
_.player.area.x = _.window.padding
_.player.area.y = _.window.padding
_.player.area.w = width - _.player.area.x * 2 //玩家区域宽度
_.player.area.h = 200 * dpr //玩家区域高度
_.player.area.margin = 0 * dpr //两个玩家区域间的间隔
_.player.area.padding = 10 * dpr //玩家区域内留白

_.player.info = {}
_.player.info.area = {}
_.player.info.area.w = _.player.area.w - _.player.area.padding * 2
_.player.info.area.h = 40 * dpr

_.player.button = {}
_.player.button.w = 100 * dpr
_.player.button.h = 30 * dpr

_.player.button.enabled = {}
_.player.button.enabled.ok = {}
_.player.button.enabled.ok.bgColor = "#ff4400"
_.player.button.enabled.ok.textColor = "#ffffff"
_.player.button.enabled.cancel = {}
_.player.button.enabled.cancel.bgColor = "#0044ff"
_.player.button.enabled.cancel.textColor = "#ffffff"
_.player.button.disabled = {}
_.player.button.disabled.bgColor = "#cccccc"
_.player.button.disabled.textColor = "#ffffff"

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

_.host.button = {}
_.host.button.x = _.host.area.x + _.player.area.padding
_.host.button.y =
  _.host.area.y + _.player.area.h - _.player.area.padding - _.player.button.h
_.host.button.w = _.player.button.w
_.host.button.h = _.player.button.h

/* 客机玩家 */
_.guest = {}

_.guest.area = {}
_.guest.area.x = _.host.area.x
_.guest.area.y = _.host.area.y + _.host.area.h + _.player.area.margin
_.guest.area.w = _.player.area.w
_.guest.area.h = _.player.area.h

_.guest.info = {}
_.guest.info.area = {}
_.guest.info.area.x = _.guest.area.x + _.player.area.padding
_.guest.info.area.y = _.guest.area.y + _.player.area.padding
_.guest.info.area.w = _.player.info.area.w
_.guest.info.area.h = _.player.info.area.h

_.guest.button = {}
_.guest.button.w = _.player.button.w
_.guest.button.h = _.player.button.h
_.guest.button.x = _.guest.area.x + _.player.area.padding
_.guest.button.y =
  _.guest.area.y + _.player.area.h - _.player.area.padding - _.player.button.h

_.guest.readyArea = {}
_.guest.readyArea.x = _.guest.area.x + _.player.area.padding
_.guest.readyArea.y =
  _.guest.area.y + _.player.area.h - _.player.area.padding - _.player.button.h
_.guest.readyArea.w = _.player.button.w
_.guest.readyArea.h = _.player.button.h
_.guest.readyArea.bgColor = "#dddddd"
_.guest.readyArea.textColor = "#ff6352"

/* 退出按钮 */
_.exitBtn = {}
_.exitBtn.w = width
_.exitBtn.h = 30 * dpr
_.exitBtn.x = 0 * dpr
_.exitBtn.y = height - _.exitBtn.h - 80 * dpr
_.exitBtn.bgColor = "#e90200"
_.exitBtn.textColor = "#ffffff"

export default _
