// Функции

// Функция определяется с помощью ключевого слова function

// Именованая функция

function numSum1(a: number, b: number): number {
    return a + b;
}
let res1 = numSum1(1, 2);

// Функция как переменная

let numSum2 = function(a: number, b: number): number {
    return a + b;
}
let res2 = numSum2(1, 2);

// Функция без возвращаемого значения

function logSum(a: number, b: number): void {
    console.log(a + b);
}
logSum(1, 2);

// Необязательный параметр (Optional parameter) - после имени параметра оператор ?

function funcOpt(firstName: string, lastName?: string) {
    if (lastName) {
        console.log(`Имя: ${firstName}, Фамилия: ${lastName}`);
    } else {
        // если lastName = undefined или null
        console.log(`Имя: ${firstName}`);
    }
}
funcOpt("John", "Doe");
funcOpt("John"); // lastName = undefined

// Параметр по умолчанию (Default parameter)
// в качестве его значения по умолчанию может быть не только литерал, но и выражение (например, имя переменной или вызов функции)

function getName1(firstName: string, lastName: string = "Doe"): string {
    return firstName + " " + lastName;
}

let defLastName: string = "Doe";
function getName2(firstName: string, lastName: string = defLastName): string {
    return firstName + " " + lastName;
}

function getDefLastName(): string {
    return "Doe";
}
function getName3(firstName: string, lastName: string = getDefLastName()): string {
    return firstName + " " + lastName;
}

// Неопределенный набор параметров (Rest parameters, остаточные параметры) одного типа
// используется знак многоточия ... , после которого идёт имя массива параметров

function sumNumbers(num: number, ...numArr: number[]): number {
    let sumRes = num;
    for (let i = 0; i < numArr.length; i++) {
        sumRes += numArr[i];
    }
    return sumRes;
}
let sum1 = sumNumbers(1, 2);
let sum2 = sumNumbers(1, 2, 3, 4, 5);

// Перегрузка функций (overload)
// это несколько версий функции, которые имеют одно и то же имя функции, но разные типы параметров или разное количество параметров

function sum(x: number, y: number): number;
function sum(x: string, y: string): string;
function sum(x: any, y: any): any {
    return x + y;
}
let rs1 = sum(1, 2);        // 3
let rs2 = sum("1", "2");    // "12"

// Тип функции (Function type)
// Каждая функция имеет тип, это комбинация типов параметров и типа возвращаемого значения
// Аналогия: тип функции фактически представляет собой сигнатуру делегата в C#

// Можно определять переменную, которая имеет тип функции
// Ниже переменная funcType представляет любую функцию, которая принимает два числа и которая возвращает число
let funcType: (x: number, y: number) => number;

function funcSum(x: number, y: number): number {
    return x + y;
}
function funcSub(x: number, y: number): number {
    return x - y;
}
let op: (x: number, y: number) => number;
op = funcSum;
console.log(op(1, 2));  // 3
op = funcSub;
console.log(op(1, 2));  // -1

// Функции обратного вызова (callbacks)
// Тип функции можно передавать в качестве параметра другой функции (передача функции в функцию)

function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
    let res = operation(x, y);
    return res;
}

let operationFunc: (x: number, y: number) => number;

operationFunc = function(a: number, b: number): number {
    return a + b;
}
console.log(mathOp(1, 2, operationFunc)); // 3

operationFunc = function(a: number, b: number): number {
    return a * b;
}
console.log(mathOp(1, 2, operationFunc)); // 2

// Стрелочные функции (arrow functions)
// Представляют собой выражения типа "(параметры) => тело функции"
// Аналогия: лямбда-выражения в C#

let funcSum1 = (x: number, y: number) => x + y; // return number

// тип параметров можно опускать
let funcSum2 = (x, y) => x + y; // return any

// если параметров нет, то используются пустые круглые скобки
let funcHello = () => "Hello world"; // return string

// если передаётся только один параметр, то скобки можно опустить
let funcSquare = x => x * x; // return number

// если тело функции состоит из нескольких выражений, то оно заключается в фигурные скобки
let funcCalc = (x: number, y: number) => {
    x *= 2;
    y *= 3;
    return x + y;
}

// стрелочную функцию можно передавать в функцию вместо параметра, который представляет собой функцию
function mathOp1(x: number, y: number, operation: (a: number, b: number) => number): number {
    let res = operation(x, y);
    return res;
}
console.log(mathOp1(1, 2, (x, y) => x + y)); // 3
console.log(mathOp1(1, 2, (x, y) => x * y)); // 2

// Переменная this указывает на объект - контекст, в котором вызывается функция;
// Стрелочные функции не захватывают this из контекста.
// Подробно о this в TypeScript и JavaScript:
// en: https://www.typescriptlang.org/docs/handbook/functions.html#this
// ru: http://typescript-lang.ru/docs/Functions.html#%60this%60
// js: https://learn.javascript.ru/object-methods
