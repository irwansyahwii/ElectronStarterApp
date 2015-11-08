<electron-app-with-main-window>
    <electron-app id="mainApp" onready={opts.onready}>
    </electron-app>
    <browser-window app={this.mainApp} width={opts.width} height={opts.height} onclosed={opts.onclosed}>
    </browser-window>
</electron-app-with-main-window>