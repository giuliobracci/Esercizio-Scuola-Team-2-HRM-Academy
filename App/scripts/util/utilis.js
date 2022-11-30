// TO REPLACE WITH DEPENDENCY ---> https://www.npmjs.com/package/uuid
function getRandomId() {
    let min = Math.ceil(1);
    let max = Math.floor(500000);
    return Math.floor(Math.random() * (max - min) + min);
}

export { getRandomId };
