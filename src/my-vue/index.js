
import mountComponent from "./mountComponent";
import createElement from "./createElement";
import VNode from "./vnode";

export default class Vue {
    $options
    vm
    constructor(options){
        // 初始化有一些方法
        this.$options = options;
        this.vm = this;
    }  
    
    $mount(name){
        // 1. 获取真实 DOM
        const mountNode = document.querySelector(name);
        mountComponent(this,mountNode);
    }

    _render(){
        const { render } = this.vm.$options;
        const vnode = render.call(this.vm, (...arg)=>createElement(this.vm,...arg));
        return vnode;
    }

    _update(vnode){
        __patch__(vnode);
    }

    _v(val){
        new VNode(undefined, undefined, undefined, String(val))
    }
}

Vue.extend = function(extendOptions){
    const Super = this
    const Sub = function VueComponent() {}
    Sub.prototype = Object.create(Super.prototype);
    return Sub;
}