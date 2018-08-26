ReactDOM.render(
    <h1>ReactJS ES6</h1>
    ,document.getElementById('root')
);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var p1 = new Person('MinhNguyen', 2);
// console.log(p1);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return 'Xin chao, toi la ' + this.name + ', nam nay ' + this.age + ' tuoi';
    }
}

// var p2 = new Person('Minh Nguyen', 2);
// console.log(p2.sayHello());

class Child extends Person {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }

    sayHello() {
        return 'Wasssuppp anh em, em la ' + this.name + ', nam nay em ' + this.age + ' tuoi, em thich ' + this.hobby;
    }
}

var p2 = new Person('Minh Nguyen', 2);
var aChild = new Child('Minh Huy', 3, 'gym');
console.log(aChild.sayHello());

