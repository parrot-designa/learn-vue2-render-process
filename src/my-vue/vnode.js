export default class VNode {
    tag;
    data;
    children;
    text;
    componentOptions;
    elm;
    constructor({ 
        tag,
        data,
        children,
        text,
        componentOptions,
        elm 
    }){
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.componentOptions = componentOptions;
        this.elm = elm;
    }
}