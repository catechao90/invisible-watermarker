var watermark = require("watermark-dom")

export default function(params) {
  const {userinfo, visible = false, opts = {}} = params
  if (userinfo) {
    setInterval(() => {
      const clientHeight = Math.max(document.body.scrollHeight, document.body.clientHeight, document.documentElement.clientHeight)
      const previousHeight = parseInt(sessionStorage.getItem('wartermark-clientHeight'), 0)
      if (clientHeight !== previousHeight) {
        sessionStorage.setItem('wartermark-clientHeight', Math.max(document.body.scrollHeight, document.body.clientHeight, document.documentElement.clientHeight))
        watermark.load({
        watermark_txt: userinfo,
        watermark_x_space: 0,
        watermark_y_space: 0,
        watermark_alpha: visible ?  0.15 : 0.005,
        ...opts
        })
        const parentContainer = document.querySelector('#wm_div_id')
        const otdiv = document.createElement('div')
        if (typeof otdiv.createShadowRoot === 'function') {
          [...parentContainer.shadowRoot.childNodes].forEach(item => {
            item.style.overflowWrap = 'break-word'
          })
        } else {
          [...parentContainer.childNodes].forEach(item => {
            item.style.overflowWrap = 'break-word'
          })
        }
      }
    }, 1000)
  }
}