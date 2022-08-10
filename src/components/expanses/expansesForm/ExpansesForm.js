import React from "react";
import OpenBills from "./OpenBills";
import PayedBills from "./PayedBills";
const ExpansesForm = (props)=>{
    return(
        <div>
            <OpenBills name={props.name}
                       time={props.time}
                       amount={props.amount}
                       payer={props.payer}
            />
        </div>
    );
}
export default ExpansesForm;
