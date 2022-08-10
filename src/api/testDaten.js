import {Task} from "../model/entities/task";
import {User} from "../model/entities/user";
import {flat} from "../model/entities/flat";
import {TaskType} from "../model/entities/TaskType";

export class TestDaten {


    static user1 = new User(1, "Simon", "simon@mail");
    static user2 = new User(2, "Phil", "phil@mail");
    static user3 = new User(3, "Dani", "dani@mail");

    static testMembers = [this.user1, this.user2, this.user3];

    static flat1 = new flat(1, "Danis WG", this.testMembers);

    static task1 = new Task(1, "titel1", TaskType.Simple, this.user1, true, 25);
    static task2 = new Task(2, "titel2", TaskType.Simple, this.user2, false, 26);
    static task3 = new Task(3, "titel3", TaskType.Recurring, this.user2, false, 25);
    static task4 = new Task(4, "titel4", TaskType.Recurring, this.user2, false, 24);

}
