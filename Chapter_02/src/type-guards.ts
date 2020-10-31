// Проверка типа

// Проверка типа называется также "type guards" (защитники типа)

// Оператор typeof возвращает тип переменной

let var1Any: any;
var1Any = 1000;
if (typeof var1Any === "number") {
    let res: number = var1Any / 10;
    console.log(res);
} else {
    console.log("Is not a number");
}

// Оператор instanceof проверяет принадлежит ли переменная (объект) определенному классу
// переменная может иметь тип any, объекта (экземпляра собственного класса class), параметра типа

class Human {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let pers = new Human("John");
if (pers instanceof Human) {
    console.log(`${pers.name} is a Human`);
}
