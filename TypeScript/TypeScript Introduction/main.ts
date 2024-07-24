import { fibo, compare } from './functions/methods';
import Student from './models/student.interface';
import { students } from './students';

console.log('Hello World');
/*
1. Variable Declaration
2. Data Types
3. Type Assertion
4. Structures
5. Functions
6. Classes
7. Interfaces
8. Modules
9. Promises
*/

let firstName: string = 'Sebastian'; // Local Scope
var lastName: string = 'Zapata'; // Global Scope

const PI: number = 3.1415; // Constant
let done: boolean = false;
let anything: any = 'Hello World';

let numbers: number[] = [1, 2, 3];
numbers.push(4); // Add element to the end
numbers.pop(); // Remove element from the end
numbers.shift(); // Remove element from the beginning
numbers.unshift(0); // Add element to the beginning

numbers.forEach((number) => console.log(number)); // Iterate over the array
numbers.filter((element) => element > 2). // Filter elements
forEach((element) => console.log(fibo(element))); // Iterate over the array using an imported funciton

let student: Student = {
    id: 1,
    name: 'Sebastian',
    age: 26,
    grade: 4.5,
    address: 'Calle 123',
    phone: '1234567890',
    email: 'example@email.com'
}
console.log(student);
const { id, name, age, grade, address, phone, email } = student; // Destructuring
console.log(id, name, age, grade, address, phone, email);
student={...student, grade: 3.0}; // Spread Operator

numbers=[5, ...numbers, 3]; // Spread Operator
console.log(numbers);

students.sort((a, b) => compare(b.grade, a.grade)).
forEach((student) => console.log(student.grade)); // Sort and Iterate over the array using an imported function