

export default function patch(vnode){
    createElm(vnode);
}

function createComponent(vnode,parentElm,refElm){
    let i = vnode.data
    if(i){
        if((i = i.hooks) && (i = i.init)){
            i(vnode);
        }
        if (vnode.componentInstance) {
            insert(parentElm, vnode.elm, refElm)
        }
    }
}

function createElm(vnode){
    if(createComponent(vnode)){
        return ;
    }
}