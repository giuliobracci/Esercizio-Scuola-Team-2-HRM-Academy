class School {
    #name;
    #classes;

    constructor(name, classes = []) {
        this.name = name;
        this.classes = classes;
    }

    get name() {
        return this.#name;
    }

    get classes() {
        return this.#classes;
    }

    set name(name) {
        this.#name = name.trim();
    }

    set classes(classes) {
        this.#classes = classes;
    }

    //Add a schoolClass in the School if it doesn't exist
    addClass(schoolClass) {
        if(!this.#classes.find(e =>schoolClass.number === e.number)){
            this.#classes.push(schoolClass)
        }else {
            throw `SchoolClass ${schoolClass.number} already exists in ${this.#name}`;
        }
    }

    addStudent(schoolClass,student) {
        for(let classInSchool of this.#classes){
            if(classInSchool.number === schoolClass) {
                classInSchool.students.push(student);
            }
        }
    }

    removeStudent(schoolClass,student) {
        for(let classInSchool of this.#classes){
            if(classInSchool.number === schoolClass) {
                console.log("Before remove student")
                console.log(classInSchool)
                classInSchool = classInSchool.students.indexOf(e => student.id != e.id);
                console.log("After remove student")
                console.log(classInSchool)
            }
        }
    }

    getStudent(schoolClass,student) {
        let studentToReturn;
        for(let classInSchool of this.classes){
            if(classInSchool.number == schoolClass) {
                studentToReturn = classInSchool.students.find(e => student.id === e.id);
            }
        }
        return studentToReturn;
    }
}

export { School };