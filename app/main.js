/**
 *
 */
var PI = 3.14;
var Employee = (function () {
    function Employee(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Employee;
})();
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
var isEmployee = true, employeeName = 'Akshay', employeeSalary = 0xaaaa, canBeAnything = 'Name', numArr = [1, 2 + 1, 4, 5], tupleArr = [15, 'Akshay', false, 0x15];
var Rating;
(function (Rating) {
    Rating[Rating["DidNotMeet"] = 3] = "DidNotMeet";
    Rating[Rating["Met"] = 4] = "Met";
    Rating[Rating["Commendable"] = 5] = "Commendable";
    Rating[Rating["Outstanding"] = 6] = "Outstanding";
})(Rating || (Rating = {}));
var empRating = Rating.Commendable;
//function displayAlert(): never {
//    throw new Error('Bloop');
//}
//displayAlert();
canBeAnything = 15;
canBeAnything = true;
//let person = new Employee('Akshay', 'Abraham', 'Oommen');
//document.getElementById('first').innerHTML = greeter('123');
//document.getElementById('first').innerHTML = person.fullName; 
