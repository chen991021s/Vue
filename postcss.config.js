module.exports={
    plugins:{
        'postcss-px-to-viewport':{
            //iPhone6的屏幕750*1334 
            //在高清屏（retina）下1个点是2个像素，所有要除以2 375*667
            viewportWidth:375, //视窗的宽度，对应的是我们设计稿的宽度.
            viewportHieght:667,//视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
            unitPrecision:5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit:'vw',// 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList:['ignore', 'tab-item'],//指定不需要转换的类 ，ignore可以在不转换的标签中添加这个类名
            exclude:[/tab/], //只要包含tab字符串就排除，不进行转换
            minPixelValue:1,// 小于或等于`1px`不转换为视窗单位.
            mediaQuery:false // 允许在媒体查询中转换`px`
        }
    }
}