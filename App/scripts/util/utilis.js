// TO REPLACE WITH DEPENDENCY ---> https://www.npmjs.com/package/uuid
// DATE PARSING ---> https://day.js.org/ (2kb) or https://momentjs.com/docs/
// TYPE VALIDATION ---> https://www.npmjs.com/package/type
function getRandomId() {
    let min = Math.ceil(1);
    let max = Math.floor(500000);
    return Math.floor(Math.random() * (max - min) + min);
}

export { getRandomId };
