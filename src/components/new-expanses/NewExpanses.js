import React from "react";
import {Header} from "../Header";
import NewExpansesForm from "./new-expanses-form/NewExpansesForm";

const NewExpanses = () =>{
    return(
        <div className={"new-flat page"}>
            <Header caption="Create New Task" back={true}/>
            <div className={"content"}>
                <NewExpansesForm/>

            </div>
        </div>
    );
}
export default NewExpanses;
