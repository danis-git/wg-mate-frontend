import React from "react";
import ErrorIcon from "../assets/error-red.png";

export function ErrorAlert(props) {
    return (
        <div>
            {props.errorMsg &&
                <div className="error">
                    <img className={"icon"}
                         src={ErrorIcon}
                         alt="ErrorIcon"/>
                    {props.errorMsg}
                </div>
            }
        </div>
    )
}