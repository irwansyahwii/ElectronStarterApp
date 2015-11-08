<main>
    <electron-app-with-main-window onallwindowclosed={this.onAllWindowClosed} onready={this.onReady}>
        
    </electron-app-with-main-window>


    <script>
        onAllWindowClosed(){
            console.log("onAllWindowClosed called");
        }

        onReady(){
            console.log("onReady called");
        }
    </script>

</main>
