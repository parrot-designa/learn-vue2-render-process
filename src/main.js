import Vue from "vue";
// import Vue from "./my-vue/index";
// import App from "./App.js"; 
import App from "./App.vue"; 
function render(h){
    return h(App);
}  
new Vue({
    render
}).$mount("#app");



// const vm = new Vue({
//     render
// });

// vm.$mount("#app")
 

