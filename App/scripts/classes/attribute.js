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

    static validateAttributes(classInstance) {
        for (let attribute in classInstance.attributes) {
            Attribute.formatAndValidate(
                classInstance[attribute],
                classInstance[attribute].type,
                classInstance[attribute].required
            );
        }
    }

    static isValue(value) {
        console.log('Is value launched');

        if (value === null || value === undefined || value === '') {
            return false;
        } else if (String(value).replaceAll(' ', '') === '') {
            console.log('False, no value');
            return false;
        }
        console.log('True, there is value');

        return true;
    }

    static formatAndValidate(value, type, required) {
        console.log(`Validate ${value}: `, value);

        while (required) {
            if (!Attribute.isValue(value)) {
                throw new Error('No value found. Please fill the input field');
            } else {
                switch (type) {
                    case 'string':
                        if (!typeof value === 'string') {
                            let stringError = 'Expected a string';
                            alert(stringError);
                            throw new TypeError('Expected a string');
                        }
                        value = value.trim();
                        break;

                    case 'number':
                        try {
                            if (isNaN(+value)) {
                                throw new TypeError('Expect a number');
                            } else value = +value;
                            break;
                        } catch (error) {
                            console.log(error);
                        }

                    case 'date':
                        let dateRegEx = /^[0-9]{2,4}\/[0-9]{2}\/[0-9]{2,4}$/;
                        if (!dateRegEx.test(value)) {
                            let dateError =
                                'Date formats accepted: DD/MM/YYYY, DD/MM/YY, YYYY/MM/DD, YY/MM/DD';
                            alert(dateError);
                            throw new TypeError(dateError);
                        }
                        break;

                    case 'class':
                        let schoolClassRegEx = /^[0-9]{1}[A-Z]{1}$/;
                        if (!schoolClassRegEx.test(value)) {
                            let schoolClassError =
                                'Class must be a number+a-z letter';
                            alert(schoolClassError);
                            throw new TypeError(schoolClassError);
                        }
                        break;
                }

                return value;
            }
        }
        return value;
    }

    static capitalize(string) {
        let trimmedString = string.trim();
        return `${trimmedString[0].toUpperCase()}${trimmedString
            .slice(1)
            .toLowerCase()}`;
    }

    static checkOnlyCharacters(string) {
        let stringErrorNumbers = 'Expect only alphabetic characters';
        let onlyCharacters = /^[a-zA-Z]{2,16}$/;
        console.log(string);
        console.log(onlyCharacters.test(string));
        if (!onlyCharacters.test(string)) {
            alert(stringErrorNumbers);
            throw new TypeError(stringErrorNumbers);
        }
    }

    static formatAllCaps(string) {
        return string.toUpperCase();
    }

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
        if (this.constructor.isValue(value)) {
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

    checkType(type) {
        console.log(`Set ${type} for ${this.#name}`);

        try {
            if (!this.allowedTypes.includes(type)) {
                throw new TypeError(
                    `Type ${type} is not allowed. Allowed types: string, number, date and class`
                );
            } else this.#type = type;
        } catch (error) {
            showAlert(error);
        }
    }
}

export { Attribute };
