import React, {useState} from "react";
import Box from "@mui/material/Box";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {FlatService} from "../../../api/FlatService";
import {SaveButton} from "../../SaveButton";
import {TaskService} from "../../../api/TaskService";
import {ErrorAlert} from "../../ErrorAlert";
import {RecurringCycle} from "../../../model/entities/RecurringCycle";
import {TaskType} from "../../../model/entities/TaskType";

// https://onestepcode.com/creating-a-material-ui-form/

export default function NewTaskForm() {

    const flatMembers = FlatService.flat.members;

    const [formValues, setFormValues] = useState({
        taskType: TaskType.Simple,
        name: "",
        recurringCycle: RecurringCycle.Weekly,
        start: ""
    });

    const [checkedMembers, setCheckedMembers] = useState([]);
    const [taskErrorMessage, setTaskErrorMessage] = useState("");

    async function handleNewTask(event) {
        event.preventDefault();
        // debug();

        try {
            const res = await TaskService.createTask(
                formValues.name,
                formValues.taskType,
                formValues.recurringCycle,
                formValues.start,
                checkedMembers
            );
            console.log(res);
        } catch (e) {
            setTaskErrorMessage("Couldn't create Task");
            console.error(e);
        }
    }

    function debug() {
        console.log("---------- DEBUG --------------");
        console.log("TaskType: " + JSON.stringify(formValues.taskType));
        console.log("Name: " + formValues.name);

        console.log(checkedMembers);

        console.log("RecurringCycle: " + JSON.stringify(formValues.recurringCycle));
        console.log("Start time input: " + formValues.start);
    }

    function handleInputChange(event) {
        let {name, value, type} = event.target;

        if (type === "checkbox") {
            handleMembersCheck(event);
        }

        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    function handleMembersCheck(event) {
        let index = event.target.value;
        let name = event.target.name;
        let updatedList = [...checkedMembers];

        if (event.target.checked) {
            updatedList = updatedList.concat(flatMembers[index]);
        } else {
            updatedList.splice(index, 1);
        }

        setCheckedMembers(updatedList);
    }

    function typeSelect() {
        return <FormControl>
            <InputLabel id="taskType">Type</InputLabel>
            <Select
                labelId="taskType"
                id="taskType"
                name="taskType"
                value={formValues.taskType}
                label="Type"
                onChange={handleInputChange.bind(this)}
            >
                <MenuItem value={TaskType.Simple}>Simple</MenuItem>
                <MenuItem value={TaskType.Recurring}>Recurring</MenuItem>
            </Select>
            <FormHelperText>Simple means just one time. Recurring it should repeat.</FormHelperText>
        </FormControl>;
    }

    function recurringTypeSelect() {
        if (formValues.taskType !== TaskType.Simple) {
            return <FormControl>
                <InputLabel
                    id="rec// if await throws error e.g. user doesn't exist weurringCycle">RecurringCycle</InputLabel>
                <Select
                    labelId="recurringCycle"
                    id="recurringCycle"
                    name="recurringCycle"
                    value={formValues.recurringCycle}
                    label="recurringCycle"
                    onChange={handleInputChange.bind(this)}
                >
                    <MenuItem value={RecurringCycle.Weekly}>Weekly</MenuItem>
                    <MenuItem value={RecurringCycle.Monthly}>Monthly</MenuItem>
                    <MenuItem value={RecurringCycle.Yearly}>Yearly</MenuItem>
                </Select>
            </FormControl>
        }
    }

    const setCheckBoxClass = (item) => checkedMembers.includes(item) ? "checkedMembers-item" : "not-checkedMembers-item";

    function setUpCheckBoxes() {
        return (
            <div>
                {flatMembers.map((item, index) => (
                    <div key={index}>
                        <input
                            value={index}
                            type="checkbox"
                            name="checkedMembers"
                            onChange={handleInputChange.bind(this)}
                        />
                        <span className={setCheckBoxClass(item)}>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={"new-task form"}>
            <Box component="form" onSubmit={handleNewTask.bind(this)}>
                <h2>Details</h2>
                {typeSelect()}

                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    onChange={handleInputChange.bind(this)}
                />

                <h2>Assigned</h2>
                {setUpCheckBoxes()}

                <h2>Time Settings</h2>
                {recurringTypeSelect()}
                <TextField
                    label="Start Week"
                    variant="outlined"
                    name="start"
                    onChange={handleInputChange.bind(this)}
                />
                <FormHelperText>Just write a number for the Calenderweek</FormHelperText>

                <SaveButton/>
                <ErrorAlert errorMsg={taskErrorMessage}/>

            </Box>
        </div>
    );
}



