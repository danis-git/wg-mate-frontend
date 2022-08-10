import React from "react";
import '../Overview.css';
import Flat from "./Flat";

const OverviewForm = (props) => {
        return (
            <div className={"flats"}>
                <Flat name={props.flatName}
                      name0={props.name1}
                      name1={props.name2}
                      name2={props.name3}
                      area={props.area}
                      count={props.count}
                      id={props.id}
                      members={props.members}
                />
            </div>
        );
}
export default OverviewForm;
