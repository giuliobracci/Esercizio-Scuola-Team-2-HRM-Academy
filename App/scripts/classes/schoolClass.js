import { Attribute } from './attribute.js';

class SchoolClass {
    static #attributes = {
        name: new Attribute('name', 'class', true),
        ageRequired: new Attribute('ageRequired', 'number', true),
    };

    #name;
    #ageRequired;
    #students;

    /**
     * @constructor Constructs a SchoolClass item
     * @param {String} name SchoolClass' name
     * @param {*} ageRequired Age required in this SchoolClass
     * @param {*} students Students of the SchoolClass
     */
    constructor(name, ageRequired, students = []) {
        this.name = name;
        this.ageRequired = ageRequired;
        this.students = students;
    }

    get students() {
        return this.#students;
    }

    set students(students) {
        this.#students = students;
    }

    get name() {
        return this.#name;
    }

    set ageRequired(age) {
        this.#ageRequired = age;
    }

    set name(name) {
        this.#name = name;
    }

    /**
     * Verify that the student's age is as required by the class
     * @param {Number} studentAge Student's age
     * @returns {Boolean} True if the student's age is right False otherwise
     */
    isEligible(studentAge) {
        return studentAge == this.#ageRequired;
    }

    /**
     * Verify that the student is out of course
     * @param {Number} studentAge Student's age
     * @returns {Boolean} True if the student is out of course False otherwise
     */
    isOutOfCourse(studentAge) {
        return studentAge > this.#ageRequired;
    }
}

export { SchoolClass };
