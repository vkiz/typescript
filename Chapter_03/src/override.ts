// Переопределение конструктора и методов (override)

// родительский (базовый) класс

class User10 {
    name: string;

    constructor(userName: string) {
        this.name = userName;
    }

    getInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}

// Переопределение конструктора
// Если подкласс определяет свой конструктор, то в нём должен быть вызван конструктор базового класса с помощью ключевого слова super

class Employee10 extends User10 {
    company: string;

    constructor(userName: string, empCompany: string) {
        super(userName); // вызов конструктора базового класса User10
        this.company = empCompany;
    }
}

// Даже если в базовом классе явно не определён конструктор, то всё равно в переопределённом конструкторе подкласса необходимо вызвать
// конструктор по умолчанию базового классса с помощью super();

class User11 {
    name: string;
}

class Employee11 extends User11 {
    company: string;

    constructor(empCompany: string) {
        super(); // вызов конструктора по умолчанию базового класса User11
        this.company = empCompany;
    }
}

// Переопределение методов
// Производные классы могут переопределять методы базовых классов
// Если в переопределённом методе необходимо реализовать функционал из метода базового класса,
// то чтобы не дублировать код нужно сначала вызвать метод базового класса с помощью super.methodName();

class Employee12 extends User10 {
    company: string;

    // переопределение конструктора
    constructor(userName: string, empCompany: string) {
        super(userName); // вызов конструктора базового класса User10
        this.company = empCompany;
    }

    // переопределение метода
    getInfo(): void {
        super.getInfo(); // вызов реализации метода из базового класса User10
        console.log(`${this.name} works at ${this.company} company`);
    }
}
