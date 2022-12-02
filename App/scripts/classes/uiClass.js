import { getRandomId } from '../util/utilis.js';
import { SchoolClass } from '../classes/schoolClass.js';
import { School } from '../classes/school.js';
import { Student } from '../classes/student.js';

class UIClass {
    static #formRegEx = {
        onlyAlphabetic: /^[a-zA-Z0-9]{2,16}$/,
        onlyCharNumberClassName: /^[0-9]{1}[A-Z]{1}$/,
    };
    static #utilsClasses = {
        error: 'input-invalid',
    };

    constructor(
        school,
        classForm,
        studentForm,
        cardContainer,
        classButton,
        studentButton,
        selectClass
    ) {
    constructor(school,classForm,studentForm,cardContainer,classButton,studentButton,selectClass,editForm) {
        this.school = school;
        this.classForm = classForm;
        this.studentForm = studentForm;
        this.cardContainer = cardContainer;
        this.classButton = classButton;
        this.studentButton = studentButton;
        this.selectClass = selectClass;
        this.editForm = editForm;
    }

    get studentFormName() {
        return this.studentForm.Name.value;
    }

    get studentFormSurname() {
        return this.studentForm.Surname.value;
    }

    get studentFormBirthday() {
        return this.studentForm.BirthDay.value;
    }

    get studentFormSchoolClass() {
        return this.studentForm.SchoolClass.value;
    }

    get classFormSchoolClassName() {
        return this.classForm.ClassName.value;
    }

    checkInputFieldStringValidity(element, value) {
        let result = false;
        if (!this.constructor.#formRegEx.onlyAlphabetic.test(value)) {
            result = true;
        }
        this.addRemoveInputError(element, result);
    }
    checkInputFieldSchoolClassValidity(element, value) {
        let result = false;
        if (!this.constructor.#formRegEx.onlyCharNumberClassName.test(value)) {
            result = true;
        }
        this.addRemoveInputError(element, result);
    }

    addRemoveInputError(element, result) {
        result === true
            ? element.classList.add(UIClass.#utilsClasses.error)
            : element.classList.remove(UIClass.#utilsClasses.error);
    }

    
    get school() {
        return this.#school;
    }

    set school(school) {
        this.#school = school;
    }

    buttonAddClass() {
        document.querySelector('.modal-class').classList.toggle('show-modal');
        document.querySelector('.modal-student').classList.remove('show-modal');
        document
            .querySelector('.darken-bg')
            .classList.toggle('darken-bg--visible');
    }

    buttonAddStudent() {
        document.querySelector('.modal-student').classList.toggle('show-modal');
        document.querySelector('.modal-class').classList.remove('show-modal');
        document
            .querySelector('.darken-bg')
            .classList.toggle('darken-bg--visible');
    }

    addNewClass() {
        const nameClass = this.classForm.ClassName.value;
        const ageRequired = this.classForm.AgeRequired.value;
        this.school.addClass(new SchoolClass(nameClass, ageRequired));
        this.selectClass.append(
            '<option value=' + nameClass + '>' + nameClass + '</option>'
        );
        this.addNewCard(nameClass);
    }

    addNewStudent() {
        const name = this.studentForm.Name.value;
        const surname = this.studentForm.Surname.value;
        let birthday = this.studentForm.BirthDay.value;
        const nameClass = this.studentForm.SchoolClass.value;
        birthday = birthday.replaceAll('-', '/');
        let student = new Student(name, surname, birthday, getRandomId());
        this.school.addStudent(nameClass, student);
        this.addNewElementToACard(nameClass, student);
    }

    addNewCard(nameClass) {
        let newElement = $(
            '<article class="card" id=' + nameClass + '></article>'
        );
        let titleCard = $('<h2 class="title-card">' + nameClass + '</h2>');
        let idList = nameClass + 'List';
        let list = $('<ul id=' + idList + '></ul>');
        titleCard.appendTo(newElement);
        list.appendTo(newElement);
        newElement.appendTo(this.cardContainer);
    }

    addNewElementToACard(nameClass, student) {
        let list = $('#' + nameClass + 'List');
        let newElement = $(
            '<li id=' +
                student.id +
                '>' +
                'Surname: ' +
                student.surname +
                '<br>' +
                'Name: ' +
                student.name +
                '<br>' +
                'Age: ' +
                student.getAge() +
                '</li>'
        );
        newElement.appendTo(list);
    }
}


    buttonsStudent(e) {
        document.querySelector(".modal-edit").classList.toggle("show-modal");
        document.querySelector("#removeStudent").setAttribute("name",e.target.id);
        document.querySelector("#updateStudent").setAttribute("name",e.target.id);
        document.querySelector("#changeClassStudent").setAttribute("name",e.target.id);
    }

    addNewElementToACard(nameClass,student) {
        let list = $('#'+nameClass+'List');
        let newElement = document.createElement("li");
        newElement.setAttribute("id",student.id);
        newElement.addEventListener("click",this.buttonsStudent);
        newElement.innerHTML = 'Surname: ' + student.surname + '<br>' + 'Name: ' + student.name + '<br>' +'Age: ' + student.getAge();
        list.append(newElement);
    }

    removeStudent(e) {
        $('#'+e.target.name+'').remove();
        document.querySelector(".modal-edit").classList.remove("show-modal");
    }

    updateStudent(student){
        $("#"+student.id).html('Surname: ' + student.surname + '<br>' + 'Name: ' + student.name + '<br>' +'Age: ' + student.getAge())
    }

    
}

export { UIClass };
