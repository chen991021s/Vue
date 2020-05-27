import Toast from './toast.vue'

const obj ={}

obj.install = function(Vue){
    //1.创建组件构造器
    const ToastConstructor = Vue.extend(Toast)
    //2.new组件对象
    const toast = new ToastConstructor()
    //3.将组件对象挂载到元素上
    toast.$mount(document.createElement('div'))
    //4.将toast.$el添加到body中
    document.body.appendChild(toast.$el)
    //在原型上添加$toast
    Vue.prototype.$toast = toast
}

export default obj