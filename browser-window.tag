<browser-window>

    <script type="text/es6">

        import BrowserWindow from "browser-window";

        // console.log(opts.app);

        this.containerApp = opts.app || null;

        this.width = opts.width || 800;
        this.height = opts.height || 600;

        this.src = opts.src || (__dirname + "index.html");

        this.onClosed = opts.onclosed || null;



        if(this.containerApp !== null){
            this.containerApp._tag.appInstance.on("ready", ()=>{

                this.browserWindow = new BrowserWindow({
                    width: this.width,
                    height: this.height
                });

                this.browserWindow.loadUrl(`file://${this.src}`);

                this.browserWindow.on("closed", ()=>{
                    console.log("browserWindow onClosed called");
                    this.browserWindow = null;
                });

                if(this.onClosed !== null){
                    this.browserWindow.on("closed", this.onClosed);
                }

            })

        }




    </script>
</browser-window>