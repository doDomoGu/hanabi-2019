/* 房间列表绘制库 */
import CommonDraw from "./common"
import RLCParam from "../config/roomList"
// import MyCanvas from '../MyCanva'

let _ = {}

_.list = (ctx, list) => {
  CommonDraw.clear(ctx.canvas)

  for (let i in list) {
    //drawItem(ctx, _idx, list[index].title, this.itemIndex === _idx)
    _.drawItem(ctx, i, list[i], false)
  }
}

_.drawItem = (ctx, index, item, actived) => {
  let rect = JSON.parse(JSON.stringify(RLCParam.item.rect))

  rect.y += parseInt(index) * parseInt(rect.h + RLCParam.item.margin)

  let bgColor, textColor
  if (actived) {
    bgColor = RLCParam.item.actived.bgColor
    textColor = RLCParam.item.actived.textColor
  } else {
    bgColor = RLCParam.item.unactived.bgColor
    textColor = RLCParam.item.unactived.textColor
  }

  ctx.fillStyle = bgColor
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h)

  ctx.font = RLCParam.item.fontSize + "px Arial"
  ctx.fillStyle = textColor
  ctx.textAlign = "left"
  ctx.textBaseline = "middle"
  const _index = parseInt(index) + 1
  const text = (_index < 10 ? "00" + _index : "0" + _index) + "   " + item.title
  ctx.fillText(text, RLCParam.item.titleX, rect.y + rect.h / 2)

  ctx.fillText(
    item.isLocked ? "L" : "",
    RLCParam.item.lockX,
    rect.y + rect.h / 2
  )

  ctx.fillText(
    item.playerCount + "/2",
    RLCParam.item.playerCountX,
    rect.y + rect.h / 2
  )
}

//绘制单个
const drawItem2 = (ctx, index, text, actived, transition = false) => {
  let rect = JSON.parse(JSON.stringify(RLCParam.item.rect))
  rect.y += parseInt(index - 1) * parseInt(rect.h + RLCParam.item.margin)

  let bgcolor, txtcolor

  const colorTxt = 35 //起始颜色值
  const len = 10 //层次长度
  const step = 22 //步长
  const colorBg = colorTxt + len * step //结束颜色值

  const cTxt = colorTxt.toString(16),
    cBg = colorBg.toString(16)

  if (transition) {
    //渐隐渐显过渡效果
    /* const t = async()=>{
            await setTimeout(()=>{
                ctx.fillStyle = bgcolor
                ctx.fillRect(x, y, w, h)
                
                ctx.font = MyCanvas.px2Rem(24) + 'px Microsoft JhengHei'
                ctx.fillStyle = txtcolor
                ctx.textAlign = 'left'
                ctx.textBaseline = 'middle'
                ctx.fillText(txt, x + 10, y + h  / 2)
            },200)
        }


        const s = async ()=>{
            let c2Bg,c2Txt

            for(let i = 0; i < len; i++){
                console.log(i)
                if(actived) {
                    c2Bg = cTxt - i * step
                    c2Txt = cBg + i * step
                }else{
                    c2Bg = cBg + i * step
                    c2Txt = cTxt - i * step
                }

                bgcolor = '#'+c2Bg+c2Bg+c2Bg
                txtcolor = '#'+c2Txt+c2Txt+c2Txt

                
                await t()
            }
        }

        s() */
  } else {
    const activedBgcolor = "#" + cBg + cBg + cBg,
      activedTxtcolor = "#" + cTxt + cTxt + cTxt,
      unactivedBgcolor = activedBgcolor,
      unactivedTxtcolor = activedTxtcolor

    if (actived) {
      bgcolor = activedBgcolor
      txtcolor = activedTxtcolor
    } else {
      bgcolor = unactivedBgcolor
      txtcolor = unactivedTxtcolor
    }
    ctx.fillStyle = bgcolor
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h)

    ctx.font = RLCParam.item.fontSize + "px PingFangSC-Regular"
    // ctx.font = '50px Microsoft JhengHei'
    ctx.fillStyle = txtcolor
    ctx.textAlign = "left"
    ctx.textBaseline = "middle"
    ctx.fillText(text, rect.x + 10, rect.y + rect.h / 2)
  }
}

export default _
