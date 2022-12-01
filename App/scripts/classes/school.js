import { Attribute } from "./attribute.js";

class School {
    static #attributes = {
        name: new Attribute("name", "string", true),
    };

    #name;
    #classes;

    /**
     * @constructor Constructs a School item
     * @param {String} name School's name
     * @param {SchoolClass[]} classes School's classes
     */
    constructor(name, classes = []) {
        this.name = name;
        this.classes = classes;
    }

    get name() {
        return this.#name;
    }

    get classes() {
        return this.#classes;
    }

    set name(name) {
        this.#name = name.trim();
    }

    set classes(classes) {
        this.#classes = classes;
    }

    /**
     * Adds a class to the School
     * @param {SchoolClass} schoolClass SchoolClass to add to the School
     */
    addClass(schoolClass) {
        if(!this.#classes.find(e =>schoolClass.name === e.name)){
            this.#classes.push(schoolClass);
        }else {
            throw `SchoolClass ${schoolClass.name} already exists in ${this.#name}`;
        }
    }

    /**
     * Adds a student to a school's class
     * @param {String} schoolClass SchoolClass' name
     * @param {Student} student Student to add to the schoolClass
     */
    addStudent(schoolClass,student) {
        for(let classInSchool of this.#classes){
            if(classInSchool.name === schoolClass) {
                if(!classInSchool.students.find(e =>student.id === e.id)){
                    classInSchool.students.push(student);
                }else {
                    throw `Student ${student.name} ${student.surname} already exists in ${classInSchool.name}`;
                }
            }
        }
    }

    /**
     * Remove a student from a school's class
     * @param {String} schoolClass SchoolClass' name
     * @param {Student} student Student to remove from the schoolClass
     */
    removeStudent(schoolClass,student) {
        for(let classInSchool of this.#classes){
            if(classInSchool.name === schoolClass) {
                if(classInSchool.students.find(e =>student.id === e.id)){
                    classInSchool.students = classInSchool.students.filter(e => student.id != e.id);
                }else {
                    throw `Student ${student.name} ${student.surname} doesn't exist in ${classInSchool.name}`;
                }
            }
        }
    }

    /**
     * Return the student of a school's class
     * @param {String} schoolClass  SchoolClass' name
     * @param {*} student Student to return
     * @returns {Student} 
     */
    getStudent(schoolClass,student) {
        let studentToReturn;
        for(let classInSchool of this.classes){
            if(classInSchool.name == schoolClass) {
                if(classInSchool.students.find(e =>student.id === e.id)){
                    studentToReturn = classInSchool.students.find(e => student.id === e.id);
                }else {
                    throw `Student ${student.name} ${student.surname} doesn't exist in ${classInSchool.name}`;
                }
            }
        }
        return studentToReturn;
    }
}

export { School };