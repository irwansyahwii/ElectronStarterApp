<main>
    <desktop-app id="app" onready={this.onready} name="app1">
        <app-window id="win1" autoshow={false} width={600} height={600} x={10} use_content_size="false" center={true}>
            
        </app-window>

        <app-window id="win2" autoshow="False" src="http://www.yahoo.com" width="2048" height="800" x="100" y="200" use_content_size="false" center="true">
        </app-window>

    </desktop-app>

    <script type="text/es6">


        this.indexFile = "file://" + __dirname + "/index.html";

        this.onready = ()=>{

            try{
                this.app.win1.show();
                this.app.win1.loadUrl(this.indexFile);
            }
            catch(err){
                console.log(err);
            }

        }


    </script>


</main>
