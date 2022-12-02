import { School } from "../classes/school.js"
import { UIClass } from "../classes/uiClass.js";

$(document).ready(function(){
    let uiObj = start();
    console.log(uiObj.classForm)
    uiObj.addNewClass();
    $("#addClassForm").click(function(){alert(uiObj.classForm)})
})

function start() {
    let school = new School("Liceo Mario Students");
    $('#nameSchool').text(school.name);
    const classForm = $('#classForm')[0];
    const studentForm = $('#studentForm')[0];
    const cardContainer = $('.card-container')[0];
    let uiObj = new UIClass(school,classForm,studentForm,cardContainer);
    return uiObj;
}

function addNewClassFromForm(){
    console.log("I'm  here")
    console.log(uiObj.classForm)
    //uiObj.addNewClass();
};

function addNewStudentFromForm() {
    uiObj.addNewStudent();
};

