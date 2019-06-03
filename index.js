export default {
  isRemove: false,
  boxid: 'watermark-box',
  /**
   * 初始化数字水印
   * @param {*} watermarkTxt // 水印内容
   */
  init (opts = {}) {
    const {watermarkTxt = '', itemPadding = 0, invisible = true} = opts
    if (watermarkTxt !== '') {
      this.isRemove = true
      let watermarkBox = document.querySelector('#' + this.boxid)
      if (watermarkBox === null) {
        watermarkBox = document.createElement('div')
        watermarkBox.id = this.boxid
        // 创建水印遮罩层
        watermarkBox.style.position = 'fixed'
        watermarkBox.style.zIndex = '99999999'
        watermarkBox.style.top = '0'
        watermarkBox.style.left = '0'
        watermarkBox.style.textAlign = 'center'
        watermarkBox.style.pointerEvents = 'none'
        document.body.append(watermarkBox)
      }
      watermarkBox.innerHTML = ''
      // 计算要生成水印的数量
      let watermarkItem = document.createElement('span')
      watermarkBox.append(watermarkItem)
      watermarkItem.innerHTML = watermarkTxt
      let itemStyle = 'display: inline-block;transform: rotate(-30deg); opacity: '+ (invisible? '0.005' : '0.15') +';font-size: 12px; padding: '+ itemPadding +'px'
      watermarkItem.style = itemStyle
      let itemHeight = watermarkItem.offsetHeight
      let itemWidth = watermarkItem.offsetWidth
      let col = Math.ceil(document.body.offsetWidth / itemWidth)
      let row = Math.ceil(window.screen.height / itemHeight)
      let num = col * row
      watermarkBox.style.width = `${itemWidth * col}px`
      watermarkItem.remove()
      // 生产水印
      for (let i = 0; i < num; i++) {
        let watermarkItem = document.createElement('span')
        watermarkItem.innerText = watermarkTxt
        watermarkItem.style = itemStyle
        watermarkBox.append(watermarkItem)
      }

      // 窗口变化时刷新水印
      window.addEventListener('resize', () => {
        if (this.isRemove) {
          this.init(this.watermarkTxt)
        }
      })
    }    
  },
  /**
   * 更新水印内容
   * @param {*} watermarkTxt // 水印内容
   */
  update (watermarkTxt) {
    this.init(watermarkTxt)
  },
  /**
   * 移除水印
   */
  remove () {
    let watermarkBox = document.querySelector('#' + this.boxid)
    if (watermarkBox !== null) {
      watermarkBox.remove()
    }
  }
}