import React from "react";

export class SaveButton extends React.Component<{}> {
    render() {
        return <button
            className={"primary button"}
            type={"submit"}
        >
            Save
        </button>
    }
}