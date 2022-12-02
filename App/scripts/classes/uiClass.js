import { getRandomId } from "../util/utilis.js";

class UIClass{
    #school;
    #classForm;
    #studentForm;
    #cardContainer

    constructor(school,classForm,studentForm,cardContainer) {
        this.school = school;
        this.classForm = classForm;
        this.studentForm = studentForm;
        this.cardContainer = cardContainer;
    }

    
    addNewClass() {
        let obj = {};
        for (const elem of Object.values(this.#classForm)) {
            if (elem.type != 'submit') {
                obj[elem.id] = elem.value
            }
        }
        this.#school.addNewClass(new SchoolClass(obj.name,obj.ageRequired));
        this.addNewCard(obj.name)
    }

    addNewStudent() {
        let obj = {}
        for (const elem of Object.values(this.#studentForm)) {
            if (elem.type != 'submit') {
                obj[elem.id] = elem.value
            }
        }
        let student = new Student(obj.name,obj.surname,obj.birthday,getRandomId());
        this.#school.addNewStudent(obj.class,student);
        this.addNewElementToACard(nameClass,student);
    }

    addNewCard(nameClass) {
        let newElement  = $('<article class="card" id='+nameClass+'></article>');
        let idList = nameClass+"List";
        let list  = $('<ul id='+idList+'></ul>');
        list.appendTo(newElement);
        newElement.appendTo(this.#cardContainer);
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