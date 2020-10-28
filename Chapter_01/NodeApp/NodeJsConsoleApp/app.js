class User {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}
var user = new User("John Doe", 30);
console.log("Имя:", user.name, ", Возраст:", user.age);
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//# sourceMappingURL=app.js.map