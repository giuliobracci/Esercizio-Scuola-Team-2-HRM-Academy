import { Attribute } from './classes/attribute.js';
import { Person } from './classes/person.js';
import { Student } from './classes/student.js';
import { getRandomId } from '../scripts/util/utilis.js';
import { SchoolClass } from '../scripts/classes/schoolClass.js';
import { School } from '../scripts/classes/school.js';
import { addClass, addStudent } from '../scripts/util/buttonScript.js';

document.querySelector('.addClass').addEventListener('click', addClass);
document.querySelector('.addStudent').addEventListener('click', addStudent);

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("darken-bg--visible")) {
    e.target.classList.remove("darken-bg--visible");
    document.querySelector(".modal-class").classList.remove("show-modal");
    document.querySelector(".modal-student").classList.remove("show-modal");
  }
});

////////////////// TESTING - NOT REAL CODE /////////////

let students = [];
let newAttribute = new Attribute('Name', 'string', true);
let newPerson = new Person('Luca', 'Rampini', '1980/01/02');
let newStudent = new Student('Paolo', 'Ferrante', '1982/02/02', getRandomId());
let newClass = new SchoolClass('5A', 14, students);
let classes = [];
classes.push(newClass);
let newSchool = new School('Liceo Mario', classes);

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

console.log(newSchool);
const student4 = new Student('Mirco', 'Vucinic', '2020/02/02', getRandomId());
newSchool.addStudent(1, student4);
console.log('Inserendo Mirco');
console.log(newSchool);
// console.log("oooooooooooooooooooooooooooooooooooooo");
// newSchool.addStudent(1,student4);
// console.log("Inserendo Mirco due volte")
// console.log(newSchool);
// console.log("oooooooooooooooooooooooooooooooooooooo");
console.log('Cercando Mirco');
console.log(newSchool.getStudent(1, student4));
newSchool.removeStudent(1, student4);
console.log('Rimuovendo Mirco');
console.log(newSchool);
// console.log("oooooooooooooooooooooooooooooooooooooo");
// newSchool.removeStudent(1,student4);
// console.log("Rimuovendo Mirco");
// console.log(newSchool);
// console.log("oooooooooooooooooooooooooooooooooooooo");
// console.log("oooooooooooooooooooooooooooooooooooooo");
// console.log("Cercando Mirco");
// console.log(newSchool.getStudent(1,student4));
// console.log("oooooooooooooooooooooooooooooooooooooo");
console.log('----------------------------------------');
let classProva1 = new SchoolClass('2A', 14);
let classProva2 = new SchoolClass('2A', 14);
newSchool.addClass(classProva1);
console.log(newSchool);
newSchool.addClass(classProva2);
console.log(newSchool);
