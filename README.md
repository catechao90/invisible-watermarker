# 隐形数字水印

**隐形水印**

使用方法
```javascript
invisibleWaterMarker({
	watermarkTxt: 'zhao.jing.jing1@wowoohr.com', // required
	invisible：true, // not required, default true
	itemPadding: 0, // not required, default 0
})
```

###### 核心的代码是吧div的opacity设置为0.005，从页面上不会看出来水印，也不影响用户使用
###### 需要还原水印的话就把图片放到PS里面，建一个图层在上面。全部填充为黑色，混合模式选择实色混合这一类，然后即可还原水印
