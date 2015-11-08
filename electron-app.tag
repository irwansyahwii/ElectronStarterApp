<electron-app>     
    <script type="text/es6">

        import app from "app";

        this.appInstance = app;

        let onReady = opts.onready || null;

        if(onReady !== null){
            this.appInstance.on("ready", onReady);
        }


        let onAllWindowClosed = opts.onallwindowclosed || null;
        if(onAllWindowClosed === null){
            onAllWindowClosed = ()=>{
                if(process.platform != 'darwin'){
                    this.appInstance.quit();
                }
            }
        }

        if(onAllWindowClosed !== null){
            if(typeof onAllWindowClosed !== "function"){
                throw new Error("onallwindowclosed must be a function");
            }

            this.appInstance.on("window-all-closed", onAllWindowClosed);

        }


    </script>
</electron-app>