export default class Watcher{
    cb;
    constructor(cb){
        this.cb = cb

        this.cb();
    }
}