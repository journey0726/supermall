module.export = {
    plugins:{
        autoprefixer:{},
        'postcss-px-to-viewport':{
            viewportWidth:375,  //视窗的宽度
            viewportHeight:667, //视窗的高度
            unitPrecision:5,    //指定px 转换为视窗单位值的小数位数
            viewportUnitL:'vw', //指定需要转换成的视窗单位，建议vw
            selectorBlackList:['ignore','tab-bar','tab-bar-item'],  //指定不需要转换的类
            minPixelValue:1,    //小于等于1px 不转换
            mediaQuery:false    //允许在媒体查询中转换 px
        },
    }
}