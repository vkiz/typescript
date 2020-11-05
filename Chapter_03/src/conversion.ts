// Преобразование типов

// Виды преобразования типов:
// 1. Восходящее - это неявное преобразование от более конкретного типа к более общему (от призводного к базовому), не требует дополнительного кода;
// 2. Нисходящее - это явное преобразование объекта от более общего типа к более конкретному-подтипу.

// Для явного (нисходящего) преобразования используется 2 способа:
// 1. Оператор угловые скобки:  let x: ИмяТипа = <ИмяТипа> Выражение;
// 2. Оператор as:              let x: ИмяТипа = Выражение as ИмяТипа;

// базовый класс
class CUser {
    name: string;
    constructor(userName: string) {
        this.name = userName;
    }
}

// производный (дочерний) класс
class CEmployee extends CUser {
    company: string;
    constructor(empCompany: string, userName: string) {
        super(userName);
        this.company = empCompany;
    }
}

function getUserName(user: CUser): string {
    return user.name;
}

// Восходящее, неявное преобразование

// #1
function userFactory(name: string): CUser {                     // функция возвращает объект типа CUser
    return new CEmployee("Unknown Company", name);              // неявное преобразование CEmployee к CUser
}

// #2
let empJohn: CEmployee = new CEmployee("Microsoft", "John");    // empJohn - объект класса CEmployee
let userName = getUserName(empJohn);                            // функция getUserName() принимает аргумент класса CUser, но можно передать объект дочернего класса CEmployee (неявное преобразование)
console.log(`UserName: ${userName}`);

// #3
let userJohn: CUser = new CEmployee("Microsoft", "John");       // неявное преобразование объекта класса CEmployee к объекту класса CUser

// Нисходящее, явное преобразование

// #1
let employeeJohn1: CEmployee = <CEmployee>userJohn;             // явное преобразование объекта userJohn класса CUser к объекту класса CEmployee

// #2
let employeeJohn2: CEmployee = userJohn as CEmployee;

console.log(employeeJohn1.company);
console.log(employeeJohn2.company);

// #3
console.log((<CEmployee>userJohn).company);
console.log((userJohn as CEmployee).company);

// Преобразование типов справедливо как для классов, так и для интерфейсов.

// Есть некоторые особенности:
// Совместимость типов в TypeScript основывается на структурной типизации. Этот подход отличается от номинативной типизации.
// Структурная типизация - это способ выявления отношений типов на основании исключительно состава их членов ("утиная типизация").
// Т.е. даже если класс не реализует интерфейс и объекты не связаны в иерархии наследования, но имеют одинаковые свойства и методы,
// то возможно преобразование этих типов из-за совпадения состава их членов.

// В примере ниже ни класс UserCls, ни класс EmployeeCls не реализуют интерфейс IUserItf.
// Однако возможно преобразование типов, так как эти классы имеют те же свойства и методы,
// что и интерфейс IUserItf (в данном случае только свойство name).

interface IUserItf {
    name: string;
}

class UserCls {
    name: string;
    constructor(userName: string) {
        this.name = userName;
    }
}

class EmployeeCls extends UserCls {
    company: string;
    constructor(empCompany: string, userName: string) {
        super(userName);
        this.company = empCompany;
    }
}

function getUserNameItf(user: IUserItf): string {
    return user.name;
}

let userJohn1: UserCls = new EmployeeCls("Microsoft", "John");
console.log(getUserNameItf(userJohn1));

console.log(getUserNameItf({ name: "John" })); // аргумент является объектом интерфейса IUserItf, так как он имеет свойство name
// console.log(getUserNameItf({ name: "Jonn", company: "Microsoft" })); // ошибка неявного преобразования из-за дополнительного свойства company
console.log(getUserNameItf({ name: "John", company: "Microsoft" } as IUserItf)); // нет ошибки, явное преобразование типов

// Оператор instanceof - проверка на принадлежность объекта определенному типу
// Возвращает булевое значение true или false

let employeeJohn3: CEmployee = new CEmployee("Microsoft", "John");
if (employeeJohn3 instanceof CUser) { // true
    console.log("employeeJohn3 is a User");
} else {
    console.log("employeeJohn3 is not a User");
}
