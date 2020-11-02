// Методы доступа

// В стандарте ECMAScript 5 были добавлены методы доступа (accessors)
// Это методы класса (геттеры/сеттеры - getters/setters) для доступа к свойству объекта (полю класса):
// get-метод возвращает значение, set-метод устанавливает значение;
// если задан только get-метод, без set-метода, то метод доступа становится readonly-свойством.

const nameMaxLen = 10;      // константа не может быть членом класса

class User7 {
    private _name: string;

    public get name(): string {
        return this._name;
    }
    
    public set name(n: string) {
        if (n && n.length > nameMaxLen) {
            throw new Error(`The name must be no more than ${nameMaxLen} characters in length`);
        }
        this._name = n;
    }
}

let user7 = new User7();
user7.name = "John";                        // просто присваивается значение, но вызывается метод set name()
if (user7.name) console.log(user7.name);    // просто считывается значение, но вызывается метод get name()
