import React from 'react';
import './NewFlat.css';
import NewFlatForm from "./new-flat-form/NewFlatForm";
import {Header} from "../Header";

export class NewFlat extends React.Component {
    render() {
        return (
            <div className={"new-flat page"}>
                <Header caption="Create new shared flat" back={true}/>

                <div className={"content"}>
                    <NewFlatForm></NewFlatForm>
                </div>
            </div>
        )
    }
}