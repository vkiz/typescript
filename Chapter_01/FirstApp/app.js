var User = /** @class */ (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var element = this.document.getElementById("content");
var user = new User("John Doe", 30);
element.innerHTML = "Имя: " + user.name + ", Возраст: " + user.age;
