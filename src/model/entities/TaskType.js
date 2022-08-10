export class TaskType {

    static Recurring = new TaskType("Recurring");
    static Simple = new TaskType("Simple");

    constructor(name) {
        this.name = name;
    }
}

