class User {
	name: string;
	age: number;
	constructor(_name: string, _age: number) {
		this.name = _name;
		this.age = _age;
	}
}

var element = this.document.getElementById("content");
var user: User = new User("John Doe", 30);
element.innerHTML = "Имя: " + user.name + ", Возраст: " + user.age;
