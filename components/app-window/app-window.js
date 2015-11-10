export default class AppWindow{
    constructor(tagInstance){
        tagInstance.controller = this;
        this.tagInstance = tagInstance;
        this.opts = this.tagInstance.opts;        
    }

    init(){

        this.width = parseInt(this.opts.width) || 800;
        this.height = parseInt(this.opts.height) || 600;
        this.src = this.opts.src;
        this.id = this.opts.id;

        return this;
    }

    createWindow(parentTag){
        
    }

    start(){

    }
}