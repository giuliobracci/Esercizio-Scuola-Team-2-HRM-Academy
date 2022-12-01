import { Attribute } from './attribute.js';

class Person {
    static #attributes = {
        name: new Attribute('name', 'string', true),
        surname: new Attribute('surname', 'string', true),
        birthday: new Attribute('birthday', 'date', true),
    };

    #name;
    #surname;
    #birthday;

    /**
     * @constructor Constructs a Person item
     * @param {String} name Person'name
     * @param {String} surname Person'surname
     * @param {Date} birthday Person'birthday
     */
    constructor(name, surname, birthday) {
        console.log(`Creating person with ${name}, ${surname}, ${birthday}`);
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
        console.log(this);
    }
    get fullName() {
        return `${this.#name} ${this.#surname}`;
    }
    get name() {
        return this.#name;
    }
    get surname() {
        return this.#surname;
    }

    set name(newName) {
        this.#name = newName;
    }

    set surname(newSurname) {
        this.#surname = newSurname;
    }
    set birthday(newBirthday) {
        this.#birthday = newBirthday;
    }

    /**
     * Return the Person's age
     * @param {Date} date Today by default or a specific date
     * @returns {Number} Person'age
     */
    getAge(date = new Date()) {
        const factor = 3.17098 * Math.pow(10, -11);
        console.log(`Getting age: today is ${date}`);
        return Math.floor(factor * (date - new Date(this.#birthday)));
    }
}

let newPerson2 = new Person('Mario', 'Rossi', '20/01/1994');
newPerson2.validateAttributes();
console.log(newPerson2);
export { Person };
