import {request} from './request'

export function GetHomeMutliData(){
    return request({
        url:'/home/multidata'
    })
}