// TO REPLACE WITH DEPENDENCY ---> https://www.npmjs.com/package/uuid
// DATE PARSING ---> https://day.js.org/ (2kb) or https://momentjs.com/docs/
// TYPE VALIDATION ---> https://www.npmjs.com/package/type
import v4 from '../../../node_modules/uuid/dist/esm-browser/v4.js';
import { Attribute } from '../classes/attribute.js';

function getRandomId() {
    return v4();
}
/*
function validateAttributes(value, type, required) {

}

function validateConstruction(value, type, required) {
    if (!required) {
        return 
    }
    else if (!Attribute.isValue(value) && required) {
        throw new Error('Field is empty or invalid');
    } 

}
*/
function showAlert(message) {
    alert(message);
}

export { getRandomId, showAlert };
