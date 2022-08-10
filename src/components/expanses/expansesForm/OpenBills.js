import React from "react";

const OpenBills= (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.payer}</p>
            <p>{props.time}</p>
            <p>{props.amount}</p>
            <br/>
        </div>
    );
}
export default OpenBills;
