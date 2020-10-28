class User {
    name: string;
    age: number;
    constructor (_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }
}

var user: User = new User("John Doe", 30);
console.log("Имя:", user.name, ", Возраст:", user.age);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
