import {request} from './request'
import axios from 'axios'

export function GetHomeMutliData(){
    return request({
        url:'/home/multidata'
    })
}

export function GetHomeGoods(){
    return new Promise( (reslove,reject) =>{
        axios({
            url:'https://route.showapi.com/255-1?showapi_appid=125485&&showapi_sign=4bc66e4f7a2943779bee9a704cef4c20'          
        }).then( res =>{
            reslove(res)
        },err =>{
            reject(err)
        })
    })
}

export function GetdetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}