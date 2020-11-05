// Обобщения (Generics)

// Обобщения позволяют создавать компоненты, способные работать с различными типами данных, а не только с каким-то одним.
// Возможны обобщённые функции, массивы, классы, интерфейсы.

// Для указания типа используется выражение <T>, где T - это переменная типа (type variable).
// Вместо Т будет подставляться конкретный тип во время выполнения (на этапе компиляции конкретный тип не известен).
// Угловые скобки (angle brackets).

// Обобщённая функция

function getId<T>(id: T): T {
    return id;
}

let res1 = getId<number>(123);
console.log(typeof(res1)); // number

let res2 = getId<string>("123");
console.log(typeof(res2)); // string

// здесь компилятор автоматически выполняет вывод типа T (type argument inference) на основе значения аргумента функции
let res3 = getId("123");
console.log(typeof(res3)); // string

// Обобщённые функции c массивом

function getIds1<T>(ids: T[]): T[] {
    console.log(ids.length);
    return ids;
}

function getIds2<T>(ids: Array<T>): Array<T> {
    console.log(ids.length);
    return ids;
}

function getString<T>(arg: Array<T>): string {
    let res = ""
    for (let i = 0; i < arg.length; i++) {
        if (i > 0) {
            res += ",";
        }
        res += arg[i].toString(); // Object.toString()
    }
    return res;
}

let res4 = getString<number>([1, 2, 3]);
console.log(res4); // 1,2,3

let res5 = getString<string>(["1", "2", "3"]);
console.log(res5); // 1,2,3

// Обобщённый класс

class Identity<T> {
    private _id: T;
    constructor(id: T) {
        this._id = id;
    }
    getId(): T {
        return this._id;
    }
}

let id1 = new Identity<number>(1);
console.log(id1.getId());

let id2 = new Identity<string>("1");
console.log(id2.getId());

// Обобщённый интерфейс

interface IIdentity<T> {
    getId(): T;
}

// реализация обобщённого интерфейса
// можно реализовать или наследовать несколько интерфейсов, объединённых с помощью &, например:
// class UserInfo<T extends IUser & IPerson>
// class Dictionary<TKey extends IComparable & IEnumerable, TValue>

class IdentityGen<T> implements IIdentity<T> {
    private _id: T;
    constructor(id: T) {
        this._id = id;
    }
    getId(): T {
        return this._id;
    }
}

// Ограничение обобщений, чтобы нельзя было передать объекты любого типа

// #1

interface IUser_ {
    getInfo();
}

class User_ implements IUser_ {
    id: number;
    name: string;
    constructor(userId: number, userName: string) {
        this.id = userId;
        this.name = userName;
    }
    getInfo() {
        console.log(`id: ${this.id}, name: ${this.name}`);
    }
}

class Employee_ extends User_ {
    company: string;
    constructor(userId: number, userName: string, empCompany: string) {
        super(userId, userName);
        this.company = empCompany;
    }
    getInfo() {
        console.log(`id: ${this.id}, name: ${this.name}, company: ${this.company}`);
    }
}

// здесь extends ограничивает возможные значения параметра типа T
// чтобы можно было передавать в качестве агрумента только объекты типа IUser (и его дочерних типов User_ и Employee_)
class UserInfo<T extends IUser_> {
    getUserInfo(user: T): void {
        user.getInfo();
    }
}

let usJohn = new User_(1, "John");
let emJohn = new Employee_(1, "John", "Microsoft");
let usInfo = new UserInfo();
usInfo.getUserInfo(usJohn);
usInfo.getUserInfo(emJohn);

// #2

// Использование параметров типа в ограничении обобщений
// Можно объявить параметр типа, который ограничен другим параметром типа.
// Например, здесь получаем свойство объекта, заданного его именем.
// Чтобы убедиться, что случайно не захватываем свойство, которое не существует в объекте obj, поместим ограничение между этими двумя типами.

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "e"); // ошибка: Argument of type '"e"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

// Создание нового обобщённого объекта (ключевое слово new)
// Реализуя паттерн "фабрика" с использованием обобщений, необходимо указывать на тип класса с помощью его функции-конструктора

function createUserFactory<T>(c: { new (): T; }): T {
    return new c();
}

class NewUser {
    constructor() {
        console.log("The object was created");
    }
}

let user: NewUser = createUserFactory(NewUser);

// Обобщённые типы (Generic Types)

// обобщённая функция
function identity<T>(arg: T): T {
    return arg;
}

// Тип обобщённой функции

// myIdentity1 - тип обобщённой функции
let myIdentity1: <T>(arg: T) => T = identity;

// myIdentity2 - тип обобщённой функции
// можно использовать другое имя для параметра обобщённого типа
let myIdentity2: <U>(arg: U) => U = identity;

// myIdentity3 - тип обобщённой функции
// можно записать обобщённый тип как сигнатуру вызова объекта литерального типа
let myIdentity3: { <T>(arg: T): T } = identity;

// Тип обобщённого интерфейса

// #1
interface GenericIdentityFn1 {
    <T>(arg: T): T;
}
let myIdentity4: GenericIdentityFn1 = identity;

// #2
// здесь обобщённый параметр является параметром интерфейса в целом
// это позволяет явно указать тип и сделать его видимым для всех членов интерфейса
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
let myIdentity5: GenericIdentityFn2<number> = identity;

// Использование типов классов в обобщениях

/*
// при создании фабрик с использованием обобщений необходимо ссылаться на типы классов по их функциям конструктора

function create<T>(c: { new (): T }): T {
    return new c();
}

// здесь используется свойство прототипа, чтобы вывести и ограничить отношения между конструктором и типом экземпляра класса

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
*/
