import { Attribute } from './classes/attribute.js';
import { Person } from './classes/person.js';
import { Student } from './classes/student.js';
import { getRandomId } from '../scripts/util/utilis.js';
import { SchoolClass } from '../scripts/classes/schoolClass.js';

//////////////////// TESTING - NOT REAL CODE /////////////

let students = [];
let newAttribute = new Attribute('Name', 'string', true);
let newPerson = new Person('Luca', 'Rampini', '1980/01/02');
let newStudent = new Student('Paolo', 'Ferrante', '1982/02/02', getRandomId());
let newClass = new SchoolClass(1, 14, students);

students.push(newStudent);
students.push(new Student('Daniela', 'Ferrante', '1970/03/01', getRandomId()));

////////////////////////////////////////////////////////

// TEST PERSONE

console.log(newAttribute);
console.log(newPerson);
console.log(newPerson.getAge());
console.log(newPerson);

// TEST GETTER SETTER PERSONA

console.log(newPerson);
console.log(newPerson.name);
console.log(newPerson.surname);
console.log(newPerson.name);

////////////////////////////////////////////////////////

// TEST STUDENTI

console.log(newStudent);

// GETTER STUDENTI
console.log(newStudent.id);

////////////////////////////////////////////////////////

// TEST CLASSI

newClass.students = students;
console.log(newClass);

///////////////////////////////////////////////////////

// TEST SCUOLA

//////////////////////////////////////////////////////
