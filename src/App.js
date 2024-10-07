import Child from './Child';
export default {
    render(h){  
        const _vm = this;
        return h("div", 
            [
                _vm._v(" Hello World "), 
                h("ul", [h("li", [_vm._v("1")]), h("li", [_vm._v("2")])]),
                h("Child")
            ]
        )
    },
    component:{
        Child
    }
}