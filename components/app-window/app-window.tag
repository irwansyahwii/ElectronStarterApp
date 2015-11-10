<app-window>


    <script type="text/es6">
        this.on("mount", () =>{
            console.log("app-window on mount, id: ", this.opts.id);

        });
        // import AppWindow from "./app-window-electron";

        // new AppWindow(this).init();
    </script>
</app-window>