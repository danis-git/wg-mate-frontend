import UserIcon from "../../../assets/user.png";
import React from "react";
import {Link} from "react-router-dom";
import {FlatService} from "../../../api/FlatService";
import {flat} from "../../../model/entities/flat";

const Flat = (props) => {

    function setFlat() {
        FlatService.setFlat(new flat(props.id, props.name, props.members));
    }

    return (
        //<Link to={`/expanses/${props.name}`} className={"link"}>
        <Link to={`/task-list`} className={"link"}>
            <button className={"flat"} onClick={setFlat.bind(this)}>
                <div>
                    <span className={"span"}>
                        {props.name}</span>
                    <br/>
                    <span>{props.name0}</span>
                    <br/>
                    <span>{props.name1}</span>
                    <br/>
                    <span>{props.name2}</span>
                    <br/>
                    <span>{props.count}
                        <img className={"human"}
                             src={UserIcon}
                             alt="HumanIcon"/>
                    </span>
                    <span className={"span area"}>
                    {props.area}m²
                </span>
                </div>
            </button>
        </Link>
    );
}

export default Flat;
