import { Attribute } from './attribute.js';

class SchoolClass {
    // Naming:
    // Name must be formed by "number"+"letter" example: "5A", "4a"
    // The name will be automatically parsed to all caps

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
    get attributes() {
        return this.constructor.#attributes;
    }
    set name(name) {
        this.#name = Attribute.formatAllCaps(
            Attribute.formatAndValidate(
                name,
                SchoolClass.#attributes.name.type,
                SchoolClass.#attributes.name.required
            )
        );
    }

    set ageRequired(age) {
        this.#ageRequired = Attribute.formatAndValidate(
            age,
            SchoolClass.#attributes.ageRequired.type,
            SchoolClass.#attributes.ageRequired.required
        );
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
