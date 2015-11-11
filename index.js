import fs from "fs";

import riot from "riot";
// import "./messages.tag";
// import "./name-bar.tag";
// import "./dock-layout.tag";

import "./components/desktop-app/desktop-app.tag";
import "./components/app-window/app-window.tag";

import main from "./main.tag";


let s = riot.render(main);
// console.log(s);

