// TO REPLACE WITH DEPENDENCY ---> https://www.npmjs.com/package/uuid
// DATE PARSING ---> https://day.js.org/ (2kb) or https://momentjs.com/docs/
// TYPE VALIDATION ---> https://www.npmjs.com/package/type
import v4 from '../../../node_modules/uuid/dist/esm-browser/v4.js';
function getRandomId() {
    return v4();
}

function validateAttributes(value, type, required) {}

export { getRandomId };
