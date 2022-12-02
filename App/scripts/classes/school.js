import { Attribute } from './attribute.js';

class School {
    static #attributes = {
        name: new Attribute('name', 'string', true),
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
    get attributes() {
        return this.constructor.#attributes;
    }

    set name(name) {
        this.#name = Attribute.formatAndValidate(
            name,
            School.#attributes.name.type,
            School.#attributes.name.required
        );
    }

    set classes(classes) {
        this.#classes = classes;
    }

    getClass(nameClass){
        let classToReturn;
        for(let classSchool of this.classes) {
            if(classSchool.name === nameClass){
                classToReturn = classSchool;
            }
        }
        return classToReturn;
    }

    /**
     * Adds a class to the School
     * @param {SchoolClass} schoolClass SchoolClass to add to the School
     */
    addClass(schoolClass) {
        if (!this.#classes.find(e => schoolClass.name === e.name)) {
            this.#classes.push(schoolClass);
        } else {
            throw `SchoolClass ${schoolClass.name} already exists in ${
                this.#name
            }`;
        }
    }

    /**
     * Adds a student to a school's class
     * @param {String} schoolClass SchoolClass' name
     * @param {Student} student Student to add to the schoolClass
     */
    addStudent(schoolClass, student) {
        for (let classInSchool of this.#classes) {
            if (classInSchool.name === schoolClass) {
                if (!classInSchool.students.find(e => student.id === e.id)) {
                    classInSchool.students.push(student);
                } else {
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
    removeStudent(schoolClass, student) {
        for (let classInSchool of this.#classes) {
            if (classInSchool.name === schoolClass) {
                if (classInSchool.students.find(e => student === e.id)) {
                    classInSchool.students = classInSchool.students.filter(
                        e => student != e.id
                    );
                } else {
                    throw `Student with id: ${student} doesn't exist in ${classInSchool.name}`;
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
    getStudent(idStudent) {
        let studentToReturn;
        if(this.classes.length>0) {
            for (let classInSchool of this.classes) {
                for(let student of classInSchool.students) {
                    if(student.id === idStudent){
                        studentToReturn = student;
                    }
                }
            }
        }
        return studentToReturn;
    }

    getStudentClass(idStudent) {
        let className;
        if(this.classes.length>0) {
            for (let classInSchool of this.classes) {
                for(let student of classInSchool.students) {
                    if(student.id === idStudent){
                        className=classInSchool.name;
                    }
                }
            }
        }
        return className;
    }
}

export { School };
