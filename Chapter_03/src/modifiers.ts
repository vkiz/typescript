// Модификаторы доступа

// Модификаторы доступа позволяют скрыть члены класса от внешнего доступа (поле или метод).

// В TypeScript три модификатора:
// public (по умолчанию) - полный доступ к членам класса;
// private - член доступен только внутри данного класса;
// protected - член доступен только внутри данного класса и классов-наследников (extends).

// public

class User1 {
    id: number;     // public id: number;
    name: string;   // public name: string;
}

// private

class User2 {
    private _id: number;
    private _name: string;
    constructor(name: string) {
        this._id = this.getId();
        this._name = name;
    }
    public logUser(): void {
        console.log(`id: ${this._id}; name: ${this._name}`);
    }
    private getId(): number {
        return 1;
    }
}

let user2 = new User2("John");
user2.logUser();                // OK, public
// console.log(user2._name);    // Error, private
// console.log(user2.getId());  // Error, private

// Начиная с версии TypeScript 3.8 (ECMAScript 2015) поддерживается новый синтаксис из JavaScript для private-полей
// символ # перед именем переменной, например: class User { #id: number; }

// protected

class User3 {
    protected _id: number;
    private _name: string;
    constructor(name: string) {
        this._id = this.getId();
        this._name = name;
    }
    public logUser(): void {
        console.log(`id: ${this._id}; name: ${this._name}`);
    }
    private getId(): number {
        return 1;
    }
}

class Employee extends User3 {
    private _company: string;
    constructor(name: string, company: string) {
        super(name);
        this._company = company;
    }
    public logEmployee(): void {
        console.log(`user id: ${this._id}`);        // OK, protected _id наследуется из класса User3
        console.log(`company: ${this._company}`);   // OK, private _company из этого же класса
        // console.log(`user name: ${this._name}`); // Error, private _name из родительского класса User3
    }
}

let employee = new Employee("John", "Microsoft");
employee.logEmployee();

// Определение свойств (полей) через конструктор
// Использование модификаторов доступа в параметрах конструктора позволяет не создавать поля класса с такими же именами.
// Поля класса создаются автоматически (неявно) с такими же именами, как у параметров конструктора.

// Классы User4 и User5 аналогичны

class User4 {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    public logUser(): void {
        console.log(`name: ${this._name}`);
    }
}

class User5 {
    constructor(private name: string) {
    }
    public logUser(): void {
        console.log(`name: ${this.name}`);
    }
}

// Модификатор readonly
// Ключевое слово readonly определяет свойства, которые доступны только для чтения;
// Их можно инициализировать только при объявлении или в конструкторе класса.

class User6 {
    readonly id: number = 0;
    name: string;
    constructor(userId: number, userName: string) {
        this.id = userId;
        this.name = userName;
    }
}

let user6 = new User6(1, "John");
console.log(`id: ${user6.id}; name: ${user6.name}`);
// user6.id = 0; // Error, readonly id - только для чтения
