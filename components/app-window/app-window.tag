<app-window>

    <yield/>

    <script type="text/es6">

        import BrowserWindow from "browser-window";

        this.root.src = opts.src || "";
        this.root.width = opts.width || "";
        this.root.height = opts.height || "";
        this.root.x = opts.x || "";
        this.root.y = opts.y || "";

        
        this.root.autoshow = opts.autoshow.toLowerCase();

        if(this.root.autoshow === "false"){
            this.root.autoshow = false;
        }
        else{
            this.root.autoshow = true;
        }


        this.root._tag.parent.root[opts.id] = this.root;

        this.root.browserWindow = null;

        let appInstance = this.root._tag.parent.root.appInstance;

        this.root.createBrowserWindow = ()=>{
                this.root.browserWindow = new BrowserWindow({
                    width: this.root.width,
                    height: this.root.height,
                    show: this.root.autoshow
                });

                this.root.browserWindow.on("closed", ()=>{
                    this.browserWindow = null;
                })
        }

        this.root.show = ()=>{
            if(!this.root.browserWindow){
                this.root.createBrowserWindow();
            }

            this.root.browserWindow.show();
        }

        if(this.root.autoshow){
            if(appInstance){
                appInstance.on("ready", ()=>{
                    this.root.show();
                })
            }
        }

    </script>
</app-window>