import VNode from "./vnode";


// patch函数的作用是根据 vnode 创建新的 DOM元素，插入到父元素中并且移除旧的节点。
// 同时 patch 执行完以后 将 vm.$el 指向这个新创建的元素。
export default function patch(prevVnode,vnode){
    if(prevVnode.nodeType){
        prevVnode = new VNode({
            elm:prevVnode
        })
    }
    // 对于第一个挂载到
    // 获取上一次的 DOM元素
    const oldElm = prevVnode.elm;
    // 获取上一次的 DOM元素的父节点
    const parentElm = oldElm.parentNode;
    createElm(vnode,parentElm);

}

// createElm的作用是创建DOM元素并且插入
function createElm(vnode,parentElm){
    if(vnode.tag){
        // 根据 vnode.tag 创建元素
        vnode.elm = document.createElement(vnode.tag);
        // 根据 vnode.children 创建子元素
        createChildren(vnode);
        // 创建完了 执行插入操作
        insert(vnode.elm,parentElm)
    }else{
        //文本节点
        vnode.elm = document.createTextNode(vnode.text);
        insert(vnode.elm,parentElm)
    } 
}

function createChildren(vnode){
    if(Array.isArray(vnode.children)){
        vnode.children.forEach(item=>{
            createElm(
                item,
                vnode.elm
            )
        })
    }
}

function createComponent(vnode,parentElm){
    let i = vnode.data
    if(i){
        if((i = i.hooks) && (i = i.init)){
            i(vnode);
        }
        if (vnode.componentInstance) {
            debugger;
            insert(vnode.componentInstance.$el,parentElm)
            return true;
        }
    }
}



function insert(elm,parentElm){
    if(!parentElm){
        return ;
    }
    parentElm.appendChild(elm);
}