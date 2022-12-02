import v4 from '../../../node_modules/uuid/dist/esm-browser/v4.js';

function getRandomId() {
    return v4();
}

function showAlert(message) {
    alert(message);
}

export { getRandomId, showAlert };
