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
            url:'https://api.apiopen.top/videoCategory',          
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