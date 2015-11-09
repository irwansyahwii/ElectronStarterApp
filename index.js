import fs from "fs";

import riot from "riot";
// import "./messages.tag";
// import "./name-bar.tag";
// import "./dock-layout.tag";

import "./desktop-app.tag";

import main from "./main.tag";


let s = riot.render(main);
console.log(s);

