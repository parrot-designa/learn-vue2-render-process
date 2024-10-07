import VNode from "./vnode";
import Vue from "./index";

// 查看是否是保留的标签
function isReservedTag(val){
    return ['div','span'].includes(val);
}

function installComponentHooks(data){
    data.hooks = data.hooks ? data.hooks : {}
    data.hooks.init = function(vnode){
        const child = vnode.componentInstance = new vnode.componentOptions.Ctor(options)
        child.$mount(undefined)
    }
}

function createComponent(Ctor,data){
    Ctor = Vue.extend(Ctor);

    installComponentHooks(data)

    const vnode = new VNode(
        `vue-component`,
        data,
        undefined,
        undefined, 
        // @ts-expect-error
        { Ctor }
    )

    return vnode;
}

export default function createElement(vm,tag,data={},children){ 
    // 兼容 data、children参数
    if(Array.isArray(data)){
        data = {};
        children = data;
    }
    let vnode,Ctor;  
    if(typeof tag === 'string'){
        if(isReservedTag(tag)){
            vnode = new VNode(tag,data,children);
        }else if(Ctor = vm.$options.components?.tag){
            vnode = createComponent(Ctor,data);
        } 
    }else{
        vnode = createComponent(tag, data)
    }
    
    return vnode;
}