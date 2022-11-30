class SchoolClass {
    #number;
    #ageRequired;
    #students;

    constructor(number, ageRequired, students = []) {
        this.number = number;
        this.ageRequired = ageRequired;
        this.students = students;
    }

    get students() {
        return this.#students;
    }

    set students(students) {
        this.#students = students;
    }

    get number() {
        return this.#number;
    }

    set ageRequired(age) {
        this.#ageRequired = age;
    }

    set number(number) {
        this.#number = number;
    }

    isEligible(studentAge) {
        return studentAge == this.#ageRequired;
    }

    isOutOfCourse(studentAge) {
        return studentAge > this.#ageRequired;
    }
}

export { SchoolClass };
