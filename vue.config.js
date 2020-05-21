module.exports={
    devServer:{
        port:8000
    },
    lintOnSave : false,
    configureWebpack:{
        resolve:{
            // 省略后缀名
            extensions:['.js','.vue','json','css'],
            // 文件别名
            alias:{
                'views': '@/views',
                'components': '@/components',
                'network': '@/network',
                'common': '@/common',
                'assets': '@/assets'
            }
        }
    }
}