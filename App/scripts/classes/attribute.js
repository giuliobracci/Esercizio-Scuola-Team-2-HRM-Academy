// WARNING!: TODO - REPLACE VALIDATE WITH NEW DEPENDENCIES (DON'T REINVENT THE WHEEL)
// DEPENCIES LIST:
// DATE VALIDATION AND PARSING: https://www.npmjs.com/package/moment or https://day.js.org/ VERY LIGHT, 2kb
// TYPE VALIDATION: https://www.npmjs.com/package/type or https://www.npmjs.com/package/superstruct

import { showAlert } from '../util/utilis.js';

class Attribute {
    //static contenente i types autorizzati
    static #allowedTypes = ['string', 'number', 'date', 'class'];
    #name;
    #type;
    #required;

    // parsing del tipo
    // vedere se c'è un valore
    // se c'è un valore check del type
    // se il type corrisponde procedere alla normalizzazione

    constructor(name, type, required = true) {
        console.log(`Creating attribute with ${name}, ${type}, ${required}`);
        this.name = name;
        this.type = type;
        this.#required = required;
        console.log(`Created attribute ${this}`);
    }

    get allowedTypes() {
        return this.constructor.#allowedTypes;
    }

    get name() {
        return this.#name;
    }

    get required() {
        return this.#required;
    }

    get type() {
        return this.#type;
    }

    set name(value) {
        if (this.isValue(value)) {
            this.#name = value.trim();
        } else {
            showAlert('Name not valid');
        }
    }

    set type(type) {
        try {
            if (this.checkType(type)) {
                this.#type = type;
            }
        } catch (error) {
            showAlert(error);
        }
    }

    isValue(value) {
        console.log('Is value launched');

        if (value == null || value == undefined) {
            console.log('False, undefined or null');
            return false;
        } else if (value.replaceAll(' ', '') === '') {
            console.log('False, no value');
            return false;
        }
        console.log('True, there is value');

        return true;
    }

    checkType(type) {
        console.log(`Set ${type} for ${this.#name}`);

        try {
            if (!this.allowedTypes.includes(type)) {
                throw new Error(`Type ${type} is not allowed`);
            } else this.#type = type;
        } catch (error) {
            showAlert(error);
        }
    }

    validate(value) {
        console.log(`Validate ${value}: `, this);

        let success = false;
        switch (this.type) {
            case 'string':
                // Check if type of value is string
                success = typeof value === 'string';
                // Check if attribute is required
                if (this.required) {
                    // Check if value is not empty
                    success = success && this.isValue();
                }
                break;
            case 'number':
                success = !isNaN(+value);
                break;
            case 'date':
                success = !isNaN(Date.parse(value));
                break;
            case 'class':
                let regEx = /^[0-9]{1}[A-Z]{1}$/;
                regEx.test(value) === true
                    ? (success = true)
                    : (success = false);
                break;
        }

        return success;
    }
}

let newAtrr = new Attribute('Cognome', 'string', true);

console.log(newAtrr);

export { Attribute };
