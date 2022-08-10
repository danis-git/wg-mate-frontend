export class Task {

    id;
    name;
    taskTyp;
    assigned;
    checked;
    week;


    constructor(id, name, taskTyp, assigned, checked, week) {
        this.id = id;
        this.name = name;
        this.taskTyp = taskTyp;
        this.assigned = assigned;
        this.checked = checked;
        this.week = week;
    }
}