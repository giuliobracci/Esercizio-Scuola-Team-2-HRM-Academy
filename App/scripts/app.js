import { Attribute } from './classes/attribute.js';
import { Person } from './classes/person.js';
import { Student } from './classes/student.js';
import { getRandomId } from '../scripts/util/utilis.js';
import { SchoolClass } from '../scripts/classes/schoolClass.js';
import { School } from '../scripts/classes/school.js';
import { addClass, addStudent } from '../scripts/util/buttonScript.js';
import { UIClass } from '../scripts/classes/uiClass.js'

let school = new School("Test Scuola");
const classForm = $('#classForm')[0];
const studentForm = $('#studentForm')[0];
const studentEditForm = $('#studentEditForm')[0];
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
  let className = uiObj.school.getStudentClass(e.target.name);
  uiObj.school.removeStudent(className,e.target.name);
});

document.querySelector("#updateStudent").addEventListener("click",(e) => {
  document.querySelector(".modal-editStudent").classList.toggle("show-modal");
  document.querySelector(".buttonEditStudent").setAttribute("name",e.target.name);
});

document.querySelector("#changeClassStudent").addEventListener("click",(e) =>{
  document.querySelector(".modal-editClass").classList.toggle("show-modal");
  let oldClass = uiObj.school.getStudentClass(e.target.name);
  document.querySelector("#oldClass").innerHTML = "Old Class: "+oldClass;
  document.querySelector("#changeClassButtonSelect").setAttribute("name",e.target.name)
});

document.querySelector("#changeClassButtonSelect").addEventListener('click',(e)=>{
  let idStudent = document.querySelector("#changeClassButtonSelect").getAttribute("name");
  let oldClass = uiObj.school.getStudentClass(idStudent);
  let newClass = document.querySelector("#classStudentEditSelect").value;
  let student = uiObj.school.getStudent(idStudent);
  uiObj.school.removeStudent(oldClass,idStudent);
  uiObj.school.addStudent(newClass,student);
  uiObj.removeStudent(e);
  uiObj.addNewElementToACard(newClass,student);
  document.querySelector(".modal-edit").classList.remove("show-modal");
  document.querySelector(".modal-editClass").classList.remove("show-modal");
  document.querySelector(".darken-bg").classList.remove("darken-bg--visible");
})

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

studentEditForm.addEventListener('submit',e => {
  e.preventDefault();
  let idStudent = document.querySelector(".buttonEditStudent").getAttribute("name");
  console.log(idStudent)
  let student = school.getStudent(idStudent);
  student.name = (document.querySelector("#editNameStudent").value);
  student.surname = (document.querySelector("#editSurnameStudent").value);
  let birthday = document.querySelector("#editBirthdayStudent").value;
  birthday = birthday.replaceAll('-','/');
  student.birthday = (birthday);
  uiObj.updateStudent(student);
  document.querySelector(".modal-editStudent").classList.remove("show-modal");
  document.querySelector(".modal-edit").classList.remove("show-modal");
  document.querySelector(".darken-bg").classList.remove("darken-bg--visible");
  studentEditForm.reset();
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("darken-bg--visible")) {
    e.target.classList.remove("darken-bg--visible");
    document.querySelector(".modal-class").classList.remove("show-modal");
    document.querySelector(".modal-student").classList.remove("show-modal");
  }
});

