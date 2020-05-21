import axios from 'axios'

export function request(config){
    //创建axios实例
    const intance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })

    //请求拦截
    intance.interceptors.request.use(config =>{
        return config
    },err =>{
        console.log(err)
    })
    //响应拦截
    intance.interceptors.response.use(config =>{
        // console.log( config.data)
        return config.data
    },err =>{
        console.log(err)
    })
    //发送真正的网络请求
    return intance(config)
}
