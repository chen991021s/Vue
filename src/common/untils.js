//公共方法

//封装防抖函数（如果在规定的时间内函数频繁的调用，可以等待，
//到时间把最后一次一起发送给服务器，减少服务器压力），不会执行很频繁
//debounce(函数，时间)
export function debounce(func,times){
    let timer = null
        return function (...mag){
            timer = clearTimeout()            
            timer = setTimeout(() => {
            //改变函数的this指向，指向当前调用者this，传入参数
            func.apply(this,mag)
        }, times);
    }
            
}