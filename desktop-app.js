import validate from "validate.js";

export default class DesktopAppTag{
    constructor(opts){
        this.platformApp = null;
        this.opts = opts;

        this.onwill_finish_launching = opts.onwill_finish_launching || null;
        this.onready = opts.onready || null;
        this.onwindow_all_closed = opts.onwindow_all_closed || null;
        this.onbefore_quit = opts.onbefore_quit || null;
        this.onwill_quit = opts.onwill_quit || null;
        this.onquit = opts.onquit || null;
        this.onopen_file = opts.onopen_file || null;
        this.onopen_url = opts.onopen_url || null;
        this.onactivate = opts.onactivate || null;
        this.onbrowser_window_blur = opts.onbrowser_window_blur || null;
        this.onbrowser_window_focus = opts.onbrowser_window_focus || null;
        this.onbrowser_window_created = opts.onbrowser_window_created || null;
        this.onselect_certificate = opts.onselect_certificate || null;
        this.ongpu_process_crashed = opts.ongpu_process_crashed || null;
    }

    validate_handler(handler_name){
        if(this['handler_name'] != null){
            if(!validate.isFunction(this['handler_name'])){
                throw new Error(`opts.${handler_name} must be a function`);
            }
        }        
    }

    init(){
        validate_handler("onwill_finish_launching");
        validate_handler("onready");
        validate_handler("onwindow_all_closed");
        validate_handler("onbefore_quit");
        validate_handler("onwill_quit");
        validate_handler("onquit");
        validate_handler("onopen_file");
        validate_handler("onopen_url");
        validate_handler("onactivate");
        validate_handler("onbrowser_window_blur");
        validate_handler("onbrowser_window_focus");
        validate_handler("onselect_certificate");
        validate_handler("ongpu_process_crashed");
    }
}