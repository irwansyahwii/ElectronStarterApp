<desktop-app>     

    <yield/>

    <script type="text/es6">

        import app from "app";

        this.root.sayHello = ()=>{
            console.log("haiii");
        }
        
        this.root.onready = opts.onready || null;
        this.root.name = this.opts.name || "";
        this.root.appInstance = app;


        /*
            All the child custom tags including all the descendants custom tags are 
            available on this mount event triggered but not for html known tags.
        */
        this.on("mount", ()=>{

            app.on("window-all-closed", ()=>{
                if(process.platform != 'darwin'){
                    app.quit();
                }
            })

            app.on("ready", ()=>{
                if(this.root.onready){
                    this.root.onready(this);
                }

            })

        });
    </script>
</desktop-app>     