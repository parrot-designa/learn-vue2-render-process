import Watcher from "./Watcher";

export default function mountComponent(vm, mountNode){
    vm.$el = mountNode;

    function updateComponent(){
        const vnode = vm._render();
        console.log(vnode)
    }

    new Watcher(updateComponent)
}