import AppWindow from "./app-window";
import BrowserWindow from "browser-window";

export default class AppWindowElectron extends AppWindow{
    constructor(tagInstance){
        super(tagInstance);

        this.browserWindow = null;
    }

    createWindow(parentTag){
        parentTag.controller.platformApp.on("ready", ()=>{

            this.browserWindow = new BrowserWindow({
                width: this.width,
                height: this.height

            });

            console.log("this.src", this.src);

            parentTag.controller.windows.temp = this;
            console.log(parentTag.controller.windows);
            
            // this.browserWindow.loadUrl(this.src);
            

            console.log("browserWindow created");

            this.browserWindow.on("closed", ()=>{
                this.browserWindow = null;
            })

        });
    }

}