# What is it?

A simpler way to develop an Electron app by using declarative tags:

```html
<main>
    <desktop-app id="app" onready={this.onready}>
        <app-window id="win1" url={parent.parent.indexFile} width="2048" height="800" x="100" y="200" use_content_size="false" center="true">
        </app-window>

        <app-window id="win2" url={parent.parent.indexFile} width="2048" height="800" x="100" y="200" use_content_size="false" center="true">
        </app-window>

    </desktop-app>

    <script type="text/es6">

        let indexFile = "file://" + __dirname + "/index.html";

        this.onready = ()=>{
            this.app.win1.src = indexFile;
            this.app.win1.show();
        }


    </script>


</main>
```