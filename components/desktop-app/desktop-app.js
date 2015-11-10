import validate from "validate.js";

const event_names = [
    "onwill_finish_launching",
    "onready",
    "onwindow_all_closed",
    "onbefore_quit",
    "onwill_quit",
    "onquit",
    "onopen_file",
    "onopen_url",
    "onactivate",
    "onbrowser_window_blur",
    "onbrowser_window_focus",
    "onbrowser_window_created",
    "onselect_certificate",
    "ongpu_process_crashed"
];

export default class DesktopAppTag{
    constructor(tagInstance){
        this.tagInstance = tagInstance;
        this.tagInstance.controller = this;
        this.opts = this.tagInstance.opts;
        // console.log(tagInstance);
        this.platformApp = null;

        for(let event_name of event_names){
            this[event_name] = this.opts[event_name] || null;
        }
        this.windows = {};
    }

    validate_handler(handler_name){

        if(this[handler_name] != null){
            if(!validate.isFunction(this[handler_name])){
                throw new Error(`opts.${handler_name} must be a function`);
            }
        }        
    }

    wired_event_to_platformApp(event_name){
        if(this.platformApp === null){
            throw new Error("Please assign platformApp first before wiring events");
        }
    }

    init(){

        this.tagInstance.on("mount", ()=>{     

            for(let childTagName in this.tagInstance.tags){                
                let childTagInstance = this.tagInstance.tags[childTagName];

                if(childTagName === "app-window"){
                    childTagInstance.controller.createWindow(this.tagInstance);
                }
            }            

            for(let event_name of event_names){
                this.validate_handler(event_name);
                this.wired_event_to_platformApp(event_name);
            }            
        })


        return this;
    }
}