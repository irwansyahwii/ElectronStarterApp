import DesktopAppTag from "./desktop-app";

import app from "app";

export default class ElectronDesktopApp extends DesktopAppTag{
    constructor(opts){
        super(opts);
        this.platformApp = app;
    }

    wired_event_to_platformApp(event_name){
        super.wired_event_to_platformApp(event_name);
        
        if(this[event_name] !== null){
            let platform_event_name = event_name.replace("on", "");

            while(platform_event_name.indexOf("_") >= 0){
                platform_event_name = platform_event_name.replace("_", "-");
            }

            this.platformApp.on(platform_event_name, this[event_name]);
        }
    }
}