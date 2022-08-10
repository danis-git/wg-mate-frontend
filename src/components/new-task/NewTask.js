import React from "react";

import {Header} from "../Header";
import NewTaskForm from "./new-task-form/NewTaskForm";


export class NewTask extends React.Component {
    render() {
        return (
            <div className={"new-flat page"}>
                <Header caption="Create New Task" back={true}/>
                <div className={"content"}>
                    <NewTaskForm/>
                </div>
            </div>
        );
    }
}