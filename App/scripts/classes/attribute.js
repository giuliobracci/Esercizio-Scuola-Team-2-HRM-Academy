// WARNING!: TODO - REPLACE VALIDATE WITH NEW DEPENDENCIES (DON'T REINVENT THE WHEEL)
// DEPENCIES LIST:
// DATE VALIDATION AND PARSING: https://www.npmjs.com/package/moment or https://day.js.org/ VERY LIGHT, 2kb
// TYPE VALIDATION: https://www.npmjs.com/package/type or https://www.npmjs.com/package/superstruct

class Attribute {
    //static contenente i types autorizzati
    static #allowedTypes = ['string', 'number', 'date', 'class'];
    #name;
    #type;
    #required;

    constructor(name, type, required) {
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
        this.#name = value.trim();
    }

    set type(type) {
        console.log(`Set ${type} for ${this.#name}`);
        if (!this.allowedTypes.includes(type)) {
            throw `Type ${type} is not allowed`;
        }
        this.#type = type;
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
                    success = success && value.replaceAll(' ', '').length > 0;
                }
                break;
            case 'number':
                success = !isNaN(+value);
                break;
            case 'date':
                success = !isNaN(Date.parse(value));
                break;
            case 'class':
                success = [1, 2, 3, 4, 5].includes(value);
                break;
        }

        return success;
    }
}

export { Attribute };
