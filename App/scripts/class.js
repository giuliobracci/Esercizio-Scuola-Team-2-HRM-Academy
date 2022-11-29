class BaseClass {
    #name;
    #surname;
    #age;

    constructor(name, surname, age) {
        this.#name = name;
        this.#surname = surname;
        this.#age = age;
        console.log(`Creating a base class with ${name}, ${surname}, ${age}`);
    }

    get name() {
        console.log(this.#name);
    }

    get surname() {
        console.log(this.#surname);
    }

    get age() {
        console.log(this.#age);
    }

    set name(name) {
        console.log(`Setting ${this.#name} as ${name}`);
        this.#name = name;
    }

    set surname(surname) {
        console.log(`Setting ${this.#surname} as ${surname}`);
        this.#surname = surname;
    }
    set age(age) {
        console.log(`Setting ${this.#age} as ${age}`);
        this.#age = age;
    }
}

let newClass = new BaseClass('Marco', 'Trivaldi', 23);

console.log(newClass);
