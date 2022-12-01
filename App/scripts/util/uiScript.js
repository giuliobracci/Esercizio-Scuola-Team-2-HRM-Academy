import { School } from "../scripts/classes/school.js";
import { UIClass } from "../scripts/classes/uiClass.js";

let school = new School("Liceo Mario");
const classForm = $('#classForm')[0];
const studentForm = $('#studentForm')[0];
const cardContainer = $('.card-container')[0];
let uiObj = new UIClass(school,classForm,studentForm,cardContainer);

function addNewClass(){
    uiObj.addNewClass();
};

function addNewStudent() {
    uiObj.addNewStudent();
};

