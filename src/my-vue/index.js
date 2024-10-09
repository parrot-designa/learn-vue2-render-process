
import mountComponent from "./mountComponent";
import createElement from "./createElement";
import VNode from "./vnode";
import __patch__ from "./__patch__";

export default class Vue {
    $options 
    constructor(options){
        // 初始化有一些方法
        this.$options = options;
    }  
    
    $mount(name){
        // 1. 获取真实 DOM
        const mountNode = document.querySelector(name);
        mountComponent(this,mountNode);
    }

    _render(){
        const { render } = this.$options;
        const vnode = render.call(this, (...arg)=>createElement(this,...arg));
        return vnode;
    }

    _update(vnode){
        const prevVnode = this.$vnode;
        this.$vnode = vnode;
        // 如果vm上不存在$vnode 则表示为首次渲染
        if(!prevVnode){
            this.$el = __patch__(this.$el,vnode);
        }
        
    }

    _v(val){
       return new VNode({text: String(val)})
    }
}

Vue.extend = function(){ 
    class Sub extends Vue{ 
        constructor(options){
            super(options);
        }
    } 
    return Sub;
}