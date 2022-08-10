import React, {useEffect, useState} from "react";
import {Header} from "../Header";
import {FlatService} from "../../api/FlatService";
import moment from "moment";
import Arrow from "../../assets/arrow.png";
import {TaskService} from "../../api/TaskService";
import SortedTasks from "./task-item/SortedList.js"
import {Task} from "../../model/entities/task";
import {TaskType} from "../../model/entities/TaskType";
import {UserService} from "../../api/UserService";
import {Link} from "react-router-dom";

export default function TaskList() {

    const flatName = FlatService.flat.name;

    const [isoWeek, setIsoWeek] = useState(getCurrentWeek());
    const [finished, setFinished] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetching = async () => {
            const response = await TaskService.getTasks();
            const frontEndTasks = [];

            for (const task of response.data) {
                const {taskId, name, startDate} = task;

                frontEndTasks.push(
                    new Task(
                        taskId,
                        name,
                        TaskType.Simple,
                        UserService.user,
                        false,
                        getCurrentWeek()
                    )
                );
            }

            setTasks(frontEndTasks);
            setFinished(true);
        }

        fetching();
        calculateNewCalenderWeek(0);
    }, []);

    function getCurrentWeek() {
        return moment(
            moment().format("DD-MM-YYYY"),  // get today
            "DD-MM-YYYY"
        ).isoWeek()                                // get currentWeek
    }

    function calculateNewCalenderWeek(offset) {
        setIsoWeek(isoWeek + offset);
    }

    function setUpList() {
        const checked = [];
        const unChecked = [];

        for (const task of tasks) {       // get Tasks for Flat todo
            if (Number(task.week) === Number(isoWeek)) {
                if (task.checked) {
                    checked.push(task);
                } else {
                    unChecked.push(task);
                }
            }
        }

        return (<SortedTasks checkedItems={checked} unCheckedItems={unChecked}/>);
    }


    return (
        <div className={"overview page"}>
            <Header caption={flatName}
                    back={true}
                    settings={true}
                    logout={false}
            />

            <div className={"content"}>
                <div className={"menu"}>
                    <button onClick={() => calculateNewCalenderWeek(-1)}>
                        <img className={"icon"}
                             src={Arrow}
                             alt="LeftArrow"/>
                    </button>

                    {isoWeek}

                    <button onClick={() => calculateNewCalenderWeek(1)}>
                        <img className={"icon flipped"}
                             src={Arrow}
                             alt="RightArrow"/>
                    </button>
                </div>

                {finished && setUpList()}

                <Link to={"/new-task"}>
                    <button className={"primary button"}
                            type={"submit"}>
                        New Task
                    </button>
                </Link>
            </div>
        </div>
    );

}
