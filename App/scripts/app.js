import { Attribute } from './classes/attribute.js';
import { Person } from './classes/person.js';
import { Student } from './classes/student.js';
import { getRandomId } from '../scripts/util/utilis.js';
import { SchoolClass } from '../scripts/classes/schoolClass.js';
import { School } from '../scripts/classes/school.js';
import { addClass, addStudent } from '../scripts/util/buttonScript.js';
import { UIClass } from '../scripts/classes/uiClass.js'

let school = new School("Liceo Mario Students");
const classForm = $('#classForm')[0];
const studentForm = $('#studentForm')[0];
const cardContainer = $('.card-container');
const buttonClass = $('.addClass');
const buttonStudent = $('.addStudent');
const selectClass = $('#classStudent');
let uiObj = new UIClass(school,classForm,studentForm,cardContainer,buttonClass,buttonStudent,selectClass);

$('#nameSchool').text(school.name);

document.querySelector('.addClass').addEventListener('click', uiObj.buttonAddClass);
document.querySelector('.addStudent').addEventListener('click', uiObj.buttonAddStudent);
document.querySelector("#removeStudent").addEventListener("click",(e)=>{
  uiObj.removeStudent(e)
  let className = uiObj.school.getStudentClass();
  uiObj.school.removeStudent(className,e.target.name);
});
document.querySelector("#updateStudent").addEventListener("click",(e) => {
  uiObj.updateStudent(e)
});
document.querySelector("#changeClassStudent").addEventListener("click",uiObj.removeStudent);

classForm.addEventListener('submit',e => {
  e.preventDefault();
  uiObj.addNewClass();
  document.querySelector(".modal-class").classList.remove("show-modal");
  document.querySelector(".darken-bg").classList.remove("darken-bg--visible");
  classForm.reset();
});

studentForm.addEventListener('submit',e => {
  e.preventDefault();
  uiObj.addNewStudent();
  document.querySelector(".modal-student").classList.remove("show-modal");
  document.querySelector(".darken-bg").classList.remove("darken-bg--visible");
  studentForm.reset();
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("darken-bg--visible")) {
    e.target.classList.remove("darken-bg--visible");
    document.querySelector(".modal-class").classList.remove("show-modal");
    document.querySelector(".modal-student").classList.remove("show-modal");
  }
});

