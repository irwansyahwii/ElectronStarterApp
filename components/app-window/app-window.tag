<app-window>

    <yield/>

    <script type="text/es6">

        import BrowserWindow from "browser-window";

        this.root.src = opts.src || "";
        this.root.width = opts.width || 800;
        this.root.height = opts.height || 600;
        this.root.x = opts.x || "";
        this.root.y = opts.y || "";
        this.root.center = opts.center || true;
        this.root.frame = opts.frame || true;
        this.root.fullscreen = opts.fullscreen || false;


        this.root._tag.parent.root[opts.id] = this.root;

        this.root.browserWindow = null;

        let appInstance = this.root._tag.parent.root.appInstance;

        this.root.createBrowserWindow = ()=>{
                this.root.browserWindow = new BrowserWindow({
                    width: this.root.width,
                    height: this.root.height,
                    show: this.root.autoshow,
                    x: this.root.x,
                    y: this.root.y,
                    frame: this.root.frame,
                    fullscreen: this.root.fullscreen
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

        this.root.loadUrl = (url)=>{
            if(this.root.browserWindow){
                this.root.browserWindow.loadUrl(url);
            }
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