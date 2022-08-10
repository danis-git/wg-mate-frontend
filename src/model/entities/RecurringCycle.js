export class RecurringCycle {

    static Yearly = new RecurringCycle("yearly");
    static Monthly = new RecurringCycle("monthly");
    static Weekly = new RecurringCycle("weekly");

    constructor(name) {
        this.name = name;
    }
}