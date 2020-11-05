// Интерфейсы

// Одним из основных принципов TypeScript является то, что проверка типов основывается на _форме_ значений.
// Это называется "утиной типизацией" (duck typing) (неявная, латентная типизация) либо "структурным подтипированием".
// По этому принципу считается, что объект реализует интерфейс, если он содержит все методы этого интерфейса,
// независимо от связей в иерархии наследования и принадлежности к какому-либо конкретному классу.
// Такой подход позволяет полиморфно работать с объектами, которые не связаны в иерархии наследования.

// В TypeScript интерфейс выполняет функцию именования типов.
// Интерфейс определяет свойства и методы, которые объект должен реализовать.
// Интерфейс - это определение типа данных, но без реализации.

// Определение интерфейса IUser с помощью ключевого слова interface

interface IUser {
    id: number;
    name: string;
}

// Определение объекта emp, который имеет (реализует) интерфейс IUser
// объект emp должен реализовать все свойства и методы интерфейса IUser

let emp: IUser = { id: 1, name: "John" }
console.log(`id: ${emp.id}, name: ${emp.name}`);

// Интерфейс может быть параметром функции
// В этом случае аргумент, который передается в функцию, должен представлять объект или класс, реализующий этот интерфейс

function logInfo(user: IUser): void {
    console.log(`id: ${user.id}, name: ${user.name}`);
}

logInfo(emp);

// Можно возвращать из функции объекты, реализующие интерфейс

function createUser(userId: number, userName: string): IUser {
    return { id: userId, name: userName };
}

let newUser = createUser(1, "John");
console.log(`id: ${newUser.id}, name: ${newUser.name}`);

// Необязательные свойства - свойства, которые необязательно реализовывать (их можно не определять в объектах)
// Помечаются с помощью знака вопроса после имени

interface IUser1 {
    id: number;
    name: string;
    age?: number; // необязательное свойство
}

let emp1: IUser1 = { id: 1, name: "John", age: 30 }
console.log(`id: ${emp1.id}, name: ${emp1.name}, age: ${emp1.age}`);

let emp2: IUser1 = { id: 1, name: "John" }
console.log(`id: ${emp2.id}, name: ${emp2.name}`);

// Свойства только для чтения - значение которых нельзя изменять
// Определяются с помощью ключевого слова readonly
// readonly vs const: readonly используют для свойств, const для переменных

interface IPoint {
    readonly x: number;
    readonly y: number;
}

let point: IPoint = { x: 10, y: 20 };
console.log(point);
// point.x = 0; // ошибка

// Определение методов интерфейса - интерфейсы могут определять функции
// Объект, который реализует интерфейс, обязан реализовать определенную в интерфейсе функцию
// с тем же набором параметров и тем же типом выходного результата

interface IUser2 {
    id: number;
    name: string;
    getFullName(surname: string): string;
}

let emp3: IUser2 = {
    id: 1,
    name: "John",
    getFullName: function(surname: string): string {
        return this.name + " " + surname;
    }
}

let fullname = emp3.getFullName("Doe");
console.log(emp3);      // {id: 1, name: 'John', getFullName: ƒ}
console.log(fullname);  // John Doe

// Интерфейсы классов
// Интерфейсы могут быть реализованы не только объектами, но и классами
// Для этого используется ключевое слово implements

// class имя_класса implements имя_интерфейса_1, имя_интерфейса_2, ..., имя_интерфейса_n

// В TypeScript один класс может реализовать несколько интерфейсов (implements)
// Но нет множественного наследования классов (extends)

interface IUser3 {
    id: number;
    name: string;
    getFullName(surname: string): string;
}

class User13 implements IUser3 {
    id: number;
    name: string;
    age: number;

    constructor(userId: number, userName: string, userAge: number) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }

    getFullName(surname: string): string {
        return this.name + " " + surname;
    }
}

let user13 = new User13(1, "John", 30);
console.log(`fullname: ${user13.getFullName("Doe")}`);

// объект user13 может иметь тип интерфейса IUser13 или класса User13
// let user13: IUser13 = new User13(1, "John", 30);
// let user13: User13 =  new User13(1, "John", 30);

// Наследование интерфейсов (extends)
// interface имя_интерфейса extends имя_родительского_интерфейса_1, имя_родительского_интерфейса_2, ..., имя_родительского_интерфейса_n
// Есть множественное наследование интерфейсов

interface IMovable {
    speed: number;
    move(): void;
}

// наследование интерфейса интерфейсом
interface ICar extends IMovable {
    fill(): void;
}

// реализация интерфейса классом
class Car implements ICar {
    speed: number;

    move(): void {
        console.log(`The car move at a speed of ${this.speed} km/h`);
    }

    fill(): void {
        console.log("Refuel the car");
    }
}

let car = new Car();
car.speed = 100;
car.fill();
car.move();

// Интерфейсы функций (типы функций, function types)
// Содержат определение типа функции (сигнатуру функции)
// Интерфейсы функций должны быть реализованы объектом, который представляет функцию данного типа

interface IFullNameBuilder {
    (name: string, surname: string): string;
}

let fnBuilder: IFullNameBuilder = function(name: string, surname: string): string {
    return name + " " + surname;
}

let fname = fnBuilder("John", "Doe");
console.log(`fullname: ${fname}`);

// Интерфейсы массивов (индексируемые типы, indexable types)
// Описывают объекты, к которым можно обращаться по индексу, как к массивам
// Индекс может быть числом или строкой (тип_переменной_индекса = number или string)
// [имя_переменной_индекса: тип_переменной_индекса]: тип_значения;

// интерфейс с числовым индексом массива

interface IPhoneArray {
    [index: number]: string; // сигнатура массива
}

let phones: IPhoneArray = ["iPhone", "Samsung", "Huawei"];

let myPhone: string = phones[2];
console.log(myPhone);   // Huawei
console.log(phones[0]); // iPhone

// интерфейс со строковым индексом массива

interface IColorArray {
    [index: string]: string;
}

let colors: IColorArray = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";

console.log(colors["green"]); // #00ff00
console.log(colors["black"]); // undefined

// Гибридные интерфейсы
// Cочетают различные стили, могут применяться сразу как к определению объекта, так и к определению функции

interface IPersonInfo {
    (name: string, surname: string): void; // сигнатура типа функции (здесь выступает в роли конструктора объекта)
    fullname: string;
    password: string;
    authenticate(): void;
}

function personBuilder(): IPersonInfo {
    let person = <IPersonInfo> function(name: string, surname: string): void {
        person.fullname = name + " " + surname;
    };
    person.authenticate = function() {
        console.log(`Person ${person.fullname} logged in with "${person.password}" password`);
    };
    return person;
}

let pers = personBuilder();
pers("John", "Doe");
pers.password = "12345";
pers.authenticate();

// Интерфейсы, наследующие классы (interfaces extending classes)
// Интерфейс может наследовать класс (интерфейс extends класс)
// Когда интерфейс расширяет класс, интерфейс наследует члены класса, но не их реализацию.

// Интерфейсы наследуют даже приватные и защищенные члены базового класса. Это означает,
// что если создать интерфейс, расширяющий класс с приватными или защищенными членами,
// то интерфейс может быть реализован только самим базовым классом либо его наследниками.

// В примере ниже класс Control имеет приватный член state, который может быть реализован только самим классом или его наследниками:
// Интерфейс SelectableControl наследует класс Control и содержит все его члены (в том числе private state);
// Класс Button наследуется от класса Control и реализует интерфейс SelectableControl;
// Класс TextBox наследуется от класса Control;
// В классе ImageControl - ошибка:
// Так как класс ImageControl имеет собственный приватный член state (вместо того, чтобы расширить класс Control),
// то он не может реализовать интерфейс SelectableControl (а смогут только наследники класса Control).
// Поэтому будет ошибка: Class 'ImageControl' incorrectly implements interface 'SelectableControl'. Types have separate declarations of a private property 'state'.

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select(): void {
        console.log("Button.select() implementation");
    }
}

class TextBox extends Control {
    select(): void {
        console.log("TextBox.select() implementation");
    }
}

// class ImageControl implements SelectableControl {
//     private state: any;
//     select() {}
// }
