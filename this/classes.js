// function Square(a, b, c, d) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;
//
//     this.aIsBigger = () => {
//         if (a > b && a > c && a > d) {
//             return true;
//         }
//         return false
//     }
// }
//
// let s = new Square(10, 2, 3, 4);
//
// console.log(s.aIsBigger())

class Person {
    constructor(firstName,lastName,age,salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }
    getFirstName(){
        console.log(this.age)
    }
}

class All{
    constructor() {
        this.persons = [];
    }
    addPerson(p){
        this.persons.push(p)
    }
    removeLastPerson(){
        this.persons.pop()
    }
    getOlderPerson(){
        let older =  this.persons.reduce((start,value)=>{
            return start.age > value.age ? start : value;
        })
        return older;
    }

    getBestSalary(){
        return this.persons.reduce((start,value)=>{
            return start.salary > value.salary ? start : value;
        })
    }

}

let p1 = new Person('itay','asfasf',30,1500);
let p2 = new Person('avi','asfasf',33,200);

let allPersons = new All();
allPersons.addPerson(p1);
allPersons.addPerson(p2);


console.log(allPersons.getBestSalary())