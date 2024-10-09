// import Vue from "vue"; 
// import App from "./App.vue"; 
// function render(h){
//     return h(App);
// }  
// new Vue({
//     render
// }).$mount("#app");

import Vue from "./my-vue/index"; 
function render(h){
    const _vm = this;
    return h("div", 
        [
            _vm._v(" Hello World "), 
            h("ul", [h("li", [_vm._v("1")]), h("li", [_vm._v("2")])])
        ]
    )
}
new Vue({
    render
}).$mount("#app");



// const vm = new Vue({
//     render
// });

// vm.$mount("#app")
 

