import axios from "axios";
import {FlatService} from "./FlatService";
import moment from "moment";
import {TaskType} from "../model/entities/TaskType";

export class TaskService {

    static createTask(name, taskType, repetitionType, startCalenderWeek, assignedUser) {
        const flat = FlatService.flat;
        const week = moment(Number(startCalenderWeek), "WW");
        const startDate = week.toISOString();

        console.log(startDate);

        if (taskType === TaskType.Simple) {
            return axios.put(`http://localhost:8080/task/new/${FlatService.flat.id}`, {
                name,
                startDate,
                flat,
                assignedUser
            });
        } else {
            return axios.put(`http://localhost:8080/task/new/task-template`, {
                name,
                repetitionType,
                startDate,
                flat,
                assignedUser
            });
        }


    }

    static getTasks() {
        return axios.get(`http://localhost:8080/task/${FlatService.flat.id}`);
    }


}
