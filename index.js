import fs from "fs";

global.document = {};
GLOBAL.document = {};

import riot from "riot";
// import "./messages.tag";
// import "./name-bar.tag";
// import "./dock-layout.tag";

import "./desktop-app.tag";

import main from "./main.tag";


let s = riot.render(main);
console.log(s);

