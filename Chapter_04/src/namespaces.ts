// Пространства имён (namespaces)

// Пространства имён предназначены для организации больших программ, группировки классов по назначению, защиты от пересечения их имён.
// Они могут содержать группу классов, интерфейсов, функций, других пространств имён, которые используются в некотором общем контексте.
// Для определения пространства имён используется ключевое слово namespace.
// Чтобы типы и объекты, определённые в пространстве имён, были видны извне, они определяются с ключевым словом export.
// Пространства имён в JavaScript - это именованные объекты, расположенные в глобальном пространстве имён.

// Замечание по поводу терминологии: начиная с TypeScript 1.5 "внутренние модули" (internal modules) теперь называются "пространства имён" (namespaces).
// "Внешние модули" (external modules) стали просто "модулями" (modules), чтобы согласовать терминологию с ECMAScript 2015.

namespace Personnel {

    export interface IUser {
        displayInfo(): void;
    }

    export class Employee {
        constructor(public name: string) {
        }
    }

    export function work(emp: Employee): void {
        console.log(`Employee ${emp.name} is working`);
    }

    export let defaultUser= { name: "John" }
}

let emp1 = new Personnel.Employee("John");
console.log(emp1.name);

Personnel.work(emp1);

console.log(Personnel.defaultUser.name);

// Вложенные пространства имён

namespace Data {

    // вложенные пространства имён

    export namespace Personnel {
        export class Employee {
            constructor(public name: string) {
            }
        }
    }
    
    export namespace Clients {
        export class Client {
            constructor(public name: string) {
            }
        }
    }
}

let emp2 = new Data.Personnel.Employee("Chip");
console.log(emp2.name);

let client = new Data.Clients.Client("Dale");
console.log(client.name);

// Псевдонимы (алиасы, aliases) - объявляются с помощью ключевого слова import
// Используются для упрощения имени часто используемых объектов

import employee = Data.Personnel.Employee;
let emp3 = new employee("John");
console.log(emp3.name);
