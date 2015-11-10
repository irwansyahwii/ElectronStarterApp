<desktop-app>     

    <yield/>

    <script type="text/es6">
        // import DesktopAppTag from "./desktop-app-electron";

        // new DesktopAppTag(this).init();

        // console.log("desktop-app tag initialized");

        this.on("mount", () =>{
            console.log("desktop-app on mount");
        });

    </script>
</desktop-app>     