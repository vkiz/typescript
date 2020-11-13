"use strict";
exports.__esModule = true;
var devices_1 = require("./devices");
var iphone = new devices_1.Phone("iPhone 12");
devices_1.call(iphone);
var element = document.getElementById("content");
element.innerHTML = "Make a call by " + iphone.name;
