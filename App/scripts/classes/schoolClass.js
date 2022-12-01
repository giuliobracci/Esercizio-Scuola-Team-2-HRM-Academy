class SchoolClass {
    #name;
    #ageRequired;
    #students;

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

    isEligible(studentAge) {
        return studentAge == this.#ageRequired;
    }

    isOutOfCourse(studentAge) {
        return studentAge > this.#ageRequired;
    }
}

export { SchoolClass };
