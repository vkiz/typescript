"use strict";
exports.__esModule = true;
var Phone = /** @class */ (function () {
    function Phone(name) {
        this.name = name;
    }
    return Phone;
}());
exports.Phone = Phone;
function call(phone) {
    console.log("Make a call by", phone.name);
}
exports.call = call;
