class School {
    #name;
    #classes;

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
        this.#name = name;
    }

    set classes(classes) {
        this.#classes = classes;
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(student) {
        this.students = this.students.filter(e => student.id === e.id);
    }

    getStudent(student) {
        return this.students.find(e => e.id === student.id);
    }
}
