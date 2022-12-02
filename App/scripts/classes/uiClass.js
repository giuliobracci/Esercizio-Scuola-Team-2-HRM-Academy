import { getRandomId } from "../util/utilis.js";
import { SchoolClass } from "../classes/schoolClass.js";
import { School } from "../classes/school.js";
import { Student } from "../classes/student.js";

class UIClass{
    #school;
    #classForm;
    #studentForm;
    #cardContainer
    #classButton
    #studentButton

    constructor(school,classForm,studentForm,cardContainer,classButton,studentButton) {
        this.school = school;
        this.classForm = classForm;
        this.studentForm = studentForm;
        this.cardContainer = cardContainer;
        this.classButton = classButton;
        this.studentButton = studentButton;
    }

    buttonAddClass() {
        document.querySelector(".modal-class").classList.toggle("show-modal");
        document.querySelector(".modal-student").classList.remove("show-modal");
        document.querySelector(".darken-bg").classList.toggle("darken-bg--visible");
    }

    buttonAddStudent() {
        document.querySelector(".modal-student").classList.toggle("show-modal");
        document.querySelector(".modal-class").classList.remove("show-modal");
        document.querySelector(".darken-bg").classList.toggle("darken-bg--visible");
    }
    
    addNewClass() {
        const nameClass = $("#nameClass").val();
        const ageRequired = $("#ageRequired").val();
        this.school.addClass(new SchoolClass(nameClass,ageRequired));
        this.addNewCard(nameClass);
    }

    addNewStudent() {
        const name = $('#nameStudent').val();
        const surname = $('#surnameStudent').val();
        const birthday = $('#birthdayStudent').val();
        const nameClass = $('#nameClass').val();
        console.log(name)
        console.log(surname)
        console.log(birthday)
        console.log(nameClass)
        let student = new Student(name,surname,birthday,getRandomId());
        this.school.addNewStudent(nameClass,student);
        this.addNewElementToACard(nameClass,student);
    }

    addNewCard(nameClass) {
        let newElement  = $('<article class="card" id='+nameClass+'></article>');
        let titleCard  = $('<h2 class="title-card">'+nameClass+'</h2>');
        let idList = nameClass+"List";
        let list  = $('<ul id='+idList+'></ul>');
        titleCard.appendTo(newElement);
        list.appendTo(newElement);
        newElement.appendTo(this.cardContainer);
    }

    addNewElementToACard(nameClass,student) {
        let list = $('#'+nameClass+'List');
        let newElement  = $('<li id='+student.id+'>'+
            'Surname: ' + student.surname + '<br>' +
            'Name: ' + student.name + '<br>' +
            'Age: ' + student.getAge() + '</li>');
        newElement.appendTo(list);
    }
}

export { UIClass };