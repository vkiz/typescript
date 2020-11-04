// Наследование

// В TypeScript наследование реализуется с помощью ключевого слова extends
// class "имя подкласса" extends "имя родительского (базового) класса" или
// let "имя подкласса" = class extends "имя родительского (базового) класса"

// родительский (базовый) класс

class User8 {
    name: string;

    constructor(userName: string) {
        this.name = userName;
    }

    getInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}

// подкласс

class Employee8 extends User8 {
    company: string;

    doWork(): void {
        console.log(`${this.name} works at ${this.company} company`);
    }
}

let emp8 = new Employee8("John");
emp8.getInfo();
emp8.company = "Microsoft";
emp8.doWork();

// или определение подкласса в другом виде

let Employee9 = class extends User8 {
    company: string;

    doWork(): void {
        console.log(`${this.name} works at ${this.company} company`);
    }
}

let emp9 = new Employee9("John");
emp9.getInfo();
emp9.company = "Google";
emp9.doWork();
