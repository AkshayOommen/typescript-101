/**
 *
 */

const PI = 3.14;

class Employee {
    fullName: string;
    constructor (public firstName, public middleName, public lastName) {
        this.fullName = `${firstName} ${middleName} ${lastName}`;
    }
}

//interface Person {
//    firstName: string,
//    lastName: string
//}

//function greeter(name: string) {
//    return `My name is ${name}`;
//}

//function greeter(person: Person) {
//    return `My first name is ${person.firstName} and last name is ${person.lastName}`;
//}
//
//let person = {
//    firstName: 'Akshay',
//    lastName: 'Abraham'
//}

let isEmployee: boolean = true,
    employeeName: string = 'Akshay',
    employeeSalary: number = 0xaaaa,
    canBeAnything: any = 'Name',
    numArr: Array<number> = [1,2+1,4,5],
    tupleArr: [number, string, boolean, number] = [15, 'Akshay', false, false];

enum Rating {DidNotMeet = 3, Met, Commendable, Outstanding}
let empRating: Rating = Rating.Commendable;

//function displayAlert(): never {
//    throw new Error('Bloop');
//}

//displayAlert();

canBeAnything = 15;
canBeAnything = true;


//let person = new Employee('Akshay', 'Abraham', 'Oommen');
//document.getElementById('first').innerHTML = greeter('123');
//document.getElementById('first').innerHTML = person.fullName;