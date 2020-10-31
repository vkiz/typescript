// Расширенные типы данных

// Объединение типов (Union)
// Переменной можно присваивать значения нескольких типов, типы перечисляют через оператор объединения |

let strOrNum: string | number = "String";
strOrNum = 123.45;

// Пересечение типов (Intersection)
// Тип пересечения комбинирует несколько типов в один тип, который имеет все члены (свойства, функции) из составляющих его типов
// Типы перечисляют через оператор &

interface Knife {
    cut();
}
interface BottleOpener {
    openBottle();
}
interface Screwdriver {
    turnScrew();
}
type ArmyKnife = Knife & BottleOpener & Screwdriver; // пересечение типов
function useArmyKnife(tool: ArmyKnife) {
    tool.cut();
    tool.openBottle();
    tool.turnScrew();
}

// Псевдоним типа (Alias), определяется с помощью ключевого слова type
// это новое имя для собственного типа (но это не class)

type strType = string;

// strOrNumType - псевдоним типа для переменной, которая может хранить строку или число

type strOrNumType = string | number;
let sn: strOrNumType;
console.log(typeof sn); // undefined
sn = "String value";
sn = 123.45;
if (typeof sn === "number") {
    console.log("Number value");
}

// Hum - псевдоним типа, содержащего свойства name и age

type Hum = {
    name: string;
    age: number;
};
let hum0: Hum = { name: "John", age: 30 };
const hum1: Hum = { name: "John", age: 30 };

// Container - псевдоним универсального типа (generic) c параметром типа T

type Container<T> = { value: T };

// Объект - это тип данных (не примитивный), который содержит набор пар ключ-значение
// (пара "имя свойства" : "значение свойства")
// значение из пары может быть переменной, массивом, функцией

let person = {
    name: "John",
    age: 30,
    sayHello: function() {
        console.log("Hello world");
    }
};

console.log(person.name);
console.log(person["name"]); // альтернативный вариант получения свойства
person.sayHello(); // вызов функции объекта

// Nullable типы - переменная может иметь значение null, это обозначается оператором ? после имени переменной

// Nullable свойство

interface Employee {
    id: number;
    name: string;
    salary?: number;
}

// Nullable параметр функции (опциональный), см. functions.ts

// Тип строкового литерала (String Literal Type) - содержит точное значение строки, которое может иметь переменная
// поддерживается объединение типов | (union)

type StrLit = "one" | "two" | "three";
let str123: StrLit;
str123 = "three";   // OK
// str123 = "abc";  // Error

// Строковые литералы можно использовать чтобы различать перегрузки функций (overload)
/*
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
function createElement(tagName: string): Element {
    // return ...
}
*/

// Тип числового литерала (Numeric Literal Type) - содержит точное значение числа, которое может иметь переменная
// поддерживается объединение типов | (union)

type NumLit = 1 | 2 | 3;
let num123: NumLit;
num123 = 3;     // OK
// num123 = 0;  // Error

// Полиморфный тип this (Polymorphic this type) - представляет тип, который является подтипом его класса или интерфейса
// Это называется F-ограниченный полиморфизм (F-bounded polymorphism)

// Type assertion - явное приведение к типу (cast)
// Два способа приведения типа: оператор <> (угловые скобки) и оператор as

let anyStr: any = "String value";       // any
let strStr = <string>anyStr;            // string
let numLen = (<string>anyStr).length;   // number

strStr = anyStr as string;              // string
numLen = (anyStr as string).length;     // number
