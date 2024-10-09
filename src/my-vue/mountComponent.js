import Watcher from "./Watcher";

export default function mountComponent(vm, mountNode){
    vm.$el = mountNode;

    function updateComponent(){
        const vnode = vm._render();
        vm._update(vnode);
    }

    new Watcher(updateComponent)
}