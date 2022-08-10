import React from "react";
import {Header} from "../Header";

export class Settings extends React.Component {
    render() {
        return (
            <div className={"overview page"}>
                <Header caption="Settings" back={true} logout={true}/>

                <div className={"content"}>
                    Hier könnte Ihre werbung stehen
                </div>
            </div>
        )
    }
}