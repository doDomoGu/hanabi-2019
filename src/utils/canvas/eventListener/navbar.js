/* 导航栏事件监听库 */
import { getEventPoint } from "../lib"
// import DrawLib from "../draw/lib"
// import { RoomListDraw } from "../draw"
import { NavbarConfig } from "../config"

import { MessageBox } from "mint-ui"

const clickLogoutBtn = (t, evt) => {
  const ctx = t[evt.target.id]

  const point = getEventPoint(ctx, evt)

  const rect = NavbarConfig.logoutBtn.rect

  const x1 = rect.x
  const x2 = rect.x + rect.w
  const y1 = rect.y
  const y2 = rect.y + rect.h
  if (point.x >= x1 && point.x <= x2 && point.y >= y1 && point.y <= y2) {
    MessageBox.confirm("确定要退出登录吗?")
      .then(action => {
        if (action == "confirm") {
          t.$store.dispatch("auth/Logout")
        }
      })
      .catch(err => {
        if (err == "cancel") {
          //取消的回调
          // console.log(2)
        }
      })
  }
}

export default { clickLogoutBtn }
