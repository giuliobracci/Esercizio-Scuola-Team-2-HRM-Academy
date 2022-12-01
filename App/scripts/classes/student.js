import { Person } from './person.js';

class Student extends Person {
    #id;
    constructor(name, surname, birthday, id) {
        super(name, surname, birthday);
        this.#id = id;
    }

    get id() {
        return this.#id;
    }
}

export { Student };
