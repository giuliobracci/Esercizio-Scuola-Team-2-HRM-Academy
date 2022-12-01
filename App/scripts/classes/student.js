import { Person } from './person.js';

class Student extends Person {
    #id;

    /**
     * @constructor Constructs a Student item
     * @param {String} name Student'name
     * @param {String} surname Student'surname
     * @param {Date} birthday Student'birthday
     * @param {*} id Student'id
     */
    constructor(name, surname, birthday, id) {
        super(name, surname, birthday);
        this.#id = id;
    }

    get id() {
        return this.#id;
    }
}

export { Student };
