# 隐形数字水印

**基于watermark-dom的隐形水印**
[watermark-dom tutorial](https://github.com/saucxs/watermark-dom "watermark-dom tutorial")

使用方法
```javascript
invisibleWaterMarker({
	markContent: 'zhao.jing.jing1@wowoohr.com', // required
	visible：true, // not required, default false
	opts: {
		"watermark_x":20,//水印起始位置x轴坐标
		"watermark_y":20,//水印起始位置Y轴坐标
		"watermark_rows":0,//水印行数
		"watermark_cols":0,//水印列数
		"watermark_x_space":100,//水印x轴间隔
		"watermark_y_space":50,//水印y轴间隔
		"watermark_font":'微软雅黑',//水印字体
		"watermark_color":'black',//水印字体颜色
		"watermark_fontsize":'18px',//水印字体大小
		"watermark_width":150,//水印宽度
		"watermark_height":100,//水印长度
		"watermark_angle":15,//水印倾斜度数
	} // not required, options need set in watermark-dom
})
```

###### 核心的代码是吧div的opacity设置为0.005，从页面上不会看出来水印，也不影响用户使用
###### 需要还原水印的话就把图片放到PS里面，建一个图层在上面。全部填充为黑色，混合模式选择正片叠底这一类，然后即可还原水印
