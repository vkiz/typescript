import { Phone, call as makeCall } from "./devices";
let iphone: Phone = new Phone("iPhone 12");
makeCall(iphone);

var element: Element = document.getElementById("content");
element.innerHTML = `Make a call by ${iphone.name}`;
