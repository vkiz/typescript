// Классы

// Традиционный JavaScript для разработки многократно используемых компонентов использует функции и наследование, основанное на прототипах.
// В JavaScript начиная с версии ECMAScript 2015 (ECMAScript 6) можно использовать и классы.
// TypeScript реализует объектно-ориентированный подход, в нем есть полноценная поддержка классов.

// Класс представляет собой шаблон для создания объектов.
// Класс определяет состояние (поля класса) и поведение (методы класса), которыми обладает объект.

// Определение класса (ключевое слово class)

class User {
    id: number;
    name: string;
    constructor(userId: number, userName: string) {
        this.id = userId;
        this.name = userName;
    }
    getInfo(): string {
        return "id: " + this.id + "; name: " + this.name;
    }
}

let user1: User = new User(1, "John");
console.log(user1.getInfo());

// Статические свойства и функции класса (ключевое слово static)
// Их можно использовать без создания объекта (экземпляра класса)

class Operation {
    static PI: number = 3.14;
    static getArea(radius: number): number {
        return Operation.PI * radius * radius;
    }
}

let pi = Operation.PI;
console.log(`Число PI равно ${pi}`);

let circleArea = Operation.getArea(10);
console.log(`Площадь круга радиусом 10 равна ${circleArea}`);
