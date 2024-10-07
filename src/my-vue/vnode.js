
export default class VNode {
    tag;
    data;
    children;
    text;
    componentOptions;
    constructor(tag,data,children,text,componentOptions){
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.componentOptions = componentOptions;
    }
}